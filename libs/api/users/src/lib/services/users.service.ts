import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  async findUserByEmail(email: string): Promise<User> {
    console.log(email);
    return await this.repo.findOneByOrFail({ email });
  }

  async getAll(): Promise<User[]> {
    return await this.repo.find();
  }
}
