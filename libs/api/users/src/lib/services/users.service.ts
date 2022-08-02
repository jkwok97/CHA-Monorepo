import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users_V2 } from '../entities';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(Users_V2) private repo: Repository<Users_V2>) {}

  async findUserByEmail(email: string): Promise<Users_V2> {
    return await this.repo.findOneByOrFail({ email });
  }

  async getAll(): Promise<Users_V2[]> {
    return await this.repo.find();
  }

  async findUserById(id: number): Promise<Users_V2> {
    return await this.repo.findOneByOrFail({ id });
  }
}
