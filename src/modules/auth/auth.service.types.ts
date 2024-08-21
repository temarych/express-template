import { IUser } from '../user/user.entity';

export type ILogInData = Pick<IUser, 'email' | 'password'>;
export type ISignUpData = Omit<IUser, 'id'>;

export interface IAccessTokenPayload {
  id: string;
}
