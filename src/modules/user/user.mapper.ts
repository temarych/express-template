import { UserDto } from '@api/userDto';
import { IUser } from './user.entity';

class UserMapper {
  public toUser(data: IUser): UserDto {
    return {
      id: data.id,
      email: data.email,
    };
  }
}

export const userMapper = new UserMapper();
