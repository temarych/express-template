import { LoginResponseDto, SignupResponseDto } from '@api/index';
import { userMapper } from '@modules/user/user.mapper';
import { IAuthResult } from './auth.service';

class AuthMapper {
  public toLoginResponse(data: IAuthResult): LoginResponseDto {
    return {
      user: userMapper.toUser(data.user),
      accessToken: data.accessToken,
    };
  }

  public toSignupResponse(data: IAuthResult): SignupResponseDto {
    return {
      user: userMapper.toUser(data.user),
      accessToken: data.accessToken,
    };
  }
}

export const authMapper = new AuthMapper();
