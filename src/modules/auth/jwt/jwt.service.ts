import { injectable } from 'tsyringe';
import jwt from 'jsonwebtoken';
import { Result } from '@typings/result';
import { IJwtService } from './jwt.service.interface';

@injectable()
export class JwtService implements IJwtService {
  public sign<T extends object>(payload: T): string {
    return jwt.sign(payload, process.env.JWT_SECRET as string);
  }

  public verify<T extends object>(token: string): Result<T, Error> {
    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET as string);
      return { result: payload as T, error: null };
    } catch (error) {
      return { result: null, error: error as Error };
    }
  }
}
