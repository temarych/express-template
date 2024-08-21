import autobind from 'autobind-decorator';
import { injectable } from 'tsyringe';
import { Request, Response } from 'express';
import { userMapper } from './user.mapper';
import { IUser } from './user.entity';

@autobind
@injectable()
export class UserController {
  public async getMe(request: Request, response: Response) {
    const user = request.user as IUser;
    response.send(userMapper.toUser(user));
  }
}
