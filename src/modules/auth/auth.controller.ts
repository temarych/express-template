import autobind from 'autobind-decorator';
import { injectable } from 'tsyringe';
import { Request, Response } from 'express';
import { SignupRequestDto, LoginRequestDto } from '@api/index';
import { AuthService } from '@modules/auth/auth.service';
import { authMapper } from './auth.mapper';

@autobind
@injectable()
export class AuthController {
  constructor(private authService: AuthService) {}

  public async signUp(request: Request, response: Response) {
    const data = request.body as SignupRequestDto;

    const result = await this.authService.signUp(data);

    response.send(authMapper.toSignupResponse(result));
  }

  public async logIn(request: Request, response: Response) {
    const data = request.body as LoginRequestDto;

    const result = await this.authService.logIn(data);

    response.send(authMapper.toLoginResponse(result));
  }
}
