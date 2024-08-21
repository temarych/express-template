import { injectable } from 'tsyringe';
import bcrypt from 'bcrypt';
import { IHashService } from './hash.service.interface';

@injectable()
export class HashService implements IHashService {
  public async hash(value: string): Promise<string> {
    const hashRounds = parseInt(process.env.HASH_ROUNDS as string);
    return await bcrypt.hash(value, hashRounds);
  }

  public async compare(value: string, hashed: string): Promise<boolean> {
    return await bcrypt.compare(value, hashed);
  }
}
