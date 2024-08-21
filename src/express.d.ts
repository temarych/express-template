import { IUser } from '@modules/user/user.entity';

declare global {
  namespace Express {
    interface Request {
      user: IUser;
    }
  }
}
