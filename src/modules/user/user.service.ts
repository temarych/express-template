import { injectable } from 'tsyringe';
import { prisma } from '@config/db.config';
import { IUser } from './user.entity';
import { ICreateUserData } from './user.service.types';
import { IUserService } from './user.service.interface';

@injectable()
export class UserService implements IUserService {
  public async createUser(data: ICreateUserData): Promise<IUser> {
    return await prisma.user.create({ data });
  }

  public async isEmailUnique(email: string): Promise<boolean> {
    const emailCount = await prisma.user.count({ where: { email } });
    return emailCount === 0;
  }

  public async getUserByEmail(email: string): Promise<IUser | null> {
    return await prisma.user.findFirst({ where: { email } });
  }

  public async getUserById(id: string): Promise<IUser | null> {
    return await prisma.user.findFirst({ where: { id } });
  }
}
