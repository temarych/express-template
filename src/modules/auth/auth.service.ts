import { injectable } from 'tsyringe';
import { JsonWebTokenError, TokenExpiredError } from 'jsonwebtoken';
import { UserService } from '@modules/user/user.service';
import { IUser } from '@modules/user/user.entity';
import { ApiError } from '@modules/error/api-error.entity';
import { ApiErrorCode } from '@modules/error/api-error-code.enum';
import { JwtService } from './jwt/jwt.service';
import { HashService } from './hash/hash.service';
import {
  IAccessTokenPayload,
  ILogInData,
  ISignUpData,
} from './auth.service.types';
import { IAuthService } from './auth.service.interface';

export interface IAuthResult {
  user: IUser;
  accessToken: string;
}

@injectable()
export class AuthService implements IAuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private hashService: HashService,
  ) {}

  public async logIn(data: ILogInData): Promise<IAuthResult> {
    const user = await this.userService.getUserByEmail(data.email);

    if (!user) throw new ApiError(ApiErrorCode.EntityNotFound);

    const isCorrectPassword = await this.hashService.compare(
      data.password,
      user.password,
    );

    if (!isCorrectPassword) throw new ApiError(ApiErrorCode.IncorrectPassword);

    const accessToken = this.jwtService.sign<IAccessTokenPayload>({
      id: user.id,
    });

    return { user, accessToken };
  }

  public async signUp(data: ISignUpData): Promise<IAuthResult> {
    const isEmailUnique = await this.userService.isEmailUnique(data.email);

    if (!isEmailUnique) throw new ApiError(ApiErrorCode.EmailNotUnique);

    const password = await this.hashService.hash(data.password);
    const user = await this.userService.createUser({ ...data, password });

    const accessToken = this.jwtService.sign<IAccessTokenPayload>({
      id: user.id,
    });

    return { user, accessToken };
  }

  public async authorize(accessToken: string): Promise<IAuthResult> {
    const { result: payload, error } =
      this.jwtService.verify<IAccessTokenPayload>(accessToken);

    if (error && error instanceof TokenExpiredError) {
      throw new ApiError(ApiErrorCode.ExpiredAccessToken);
    }

    if (error && error instanceof JsonWebTokenError) {
      throw new ApiError(ApiErrorCode.InvalidAccessToken);
    }

    const user = await this.userService.getUserById(payload!.id);

    if (!user) throw new ApiError(ApiErrorCode.EntityNotFound);

    return { user, accessToken };
  }
}
