import { IUser } from './user.entity';

export type ICreateUserData = Omit<IUser, 'id'>;
