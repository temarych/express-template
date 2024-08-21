import { IUser } from './user.entity';
import { ICreateUserData } from './user.service.types';

export interface IUserService {
  isEmailUnique(email: string): Promise<boolean>;
  getUserById(id: string): Promise<IUser | null>;
  getUserByEmail(email: string): Promise<IUser | null>;
  createUser(data: ICreateUserData): Promise<IUser>;
}
