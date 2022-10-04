import { Divisions_V2 } from '@api/entities';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ApiDivisionsService {
  constructor(
    @InjectRepository(Divisions_V2) private repo: Repository<Divisions_V2>
  ) {}

  async getAll(): Promise<Divisions_V2[]> {
    return await this.repo.find();
  }
}
