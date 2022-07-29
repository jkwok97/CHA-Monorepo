import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  findUserByEmail(email: string) {
    console.log(this.repo.findOneByOrFail({ email }));
    return this.repo.findOneByOrFail({ email });
  }
}
