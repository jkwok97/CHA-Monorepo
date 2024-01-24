import { Users_V2 } from '@api/entities';
import { UserCreateDto } from '@cha/shared/entities';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(Users_V2) private repo: Repository<Users_V2>) {}

  async findUserByEmail(email: string): Promise<Users_V2> {
    const emailString = email.toLowerCase();
    return await this.repo.findOneByOrFail({ email: emailString });
  }

  async getAll(): Promise<Users_V2[]> {
    return await this.repo.find();
  }

  async getCurrent(): Promise<Users_V2[]> {
    return await this.repo.find({
      where: {
        isactive: true,
      },
    });
  }

  async findUserById(id: number): Promise<Users_V2> {
    return await this.repo.findOneByOrFail({ id });
  }

  async updateUserById(id: number, attrs: Partial<Users_V2>) {
    const user = await this.repo.findOneByOrFail({ id });

    if (!user) {
      throw new NotFoundException('user not found');
    }

    Object.assign(user, attrs);

    return this.repo.save(user);
  }

  async addUser(body: UserCreateDto) {
    const user = await this.repo.create(body);

    return this.repo.save(user);
  }

  async deleteUser(id: number): Promise<Users_V2> {
    const user = await this.repo.findOneByOrFail({ id });

    if (!user) {
      throw new NotFoundException('user not found');
    }
    return this.repo.remove(user);
  }
}
