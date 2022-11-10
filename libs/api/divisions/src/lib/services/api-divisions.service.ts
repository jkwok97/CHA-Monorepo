import { Divisions_V2 } from '@api/entities';
import { DivisionCreateDto } from '@cha/shared/entities';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ApiDivisionsService {
  constructor(
    @InjectRepository(Divisions_V2) private repo: Repository<Divisions_V2>
  ) {}

  async getAllActive(): Promise<Divisions_V2[]> {
    return await this.repo.findBy({ isactive: true });
  }

  async getAll(): Promise<Divisions_V2[]> {
    return await this.repo.find({
      relations: ['conference_id'],
    });
  }

  async updateDivisionById(id: number, attrs: Partial<Divisions_V2>) {
    const division = await this.repo.findOneByOrFail({ id });

    if (!division) {
      throw new NotFoundException('division not found');
    }

    Object.assign(division, attrs);

    return this.repo.save(division);
  }

  async addDivision(body: DivisionCreateDto) {
    const division = await this.repo.create(body);

    return this.repo.save(division);
  }

  async deleteDivision(id: number): Promise<Divisions_V2> {
    const division = await this.repo.findOneByOrFail({ id });

    if (!division) {
      throw new NotFoundException('division not found');
    }
    return this.repo.remove(division);
  }
}
