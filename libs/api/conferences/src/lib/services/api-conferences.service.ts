import { Conferences_V2 } from '@api/entities';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ApiConferencesService {
  constructor(
    @InjectRepository(Conferences_V2) private repo: Repository<Conferences_V2>
  ) {}

  async getAll(): Promise<Conferences_V2[]> {
    return await this.repo.find();
  }

  // async updateConferenceById(id: number, attrs: Partial<Conferences_V2>) {
  //   const conference = await this.repo.findOneByOrFail({ id });

  //   if (!conference) {
  //     throw new NotFoundException('conference not found');
  //   }

  //   Object.assign(conference, attrs);

  //   return this.repo.save(conference);
  // }

  // async addDivision(body: DivisionCreateDto) {
  //   const division = await this.repo.create(body);

  //   return this.repo.save(division);
  // }

  // async deleteDivision(id: number): Promise<Conferences_V2> {
  //   const division = await this.repo.findOneByOrFail({ id });

  //   if (!division) {
  //     throw new NotFoundException('division not found');
  //   }
  //   return this.repo.remove(division);
  // }
}
