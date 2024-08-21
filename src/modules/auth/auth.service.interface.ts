import { ILogInData, ISignUpData } from './auth.service.types';
import { IAuthResult } from './auth.service';

export interface IAuthService {
  logIn(data: ILogInData): Promise<IAuthResult>;
  signUp(data: ISignUpData): Promise<IAuthResult>;
  authorize(accessToken: string): Promise<IAuthResult>;
}
