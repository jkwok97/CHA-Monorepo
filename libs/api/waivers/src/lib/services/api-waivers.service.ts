import { Waivers_V2 } from '@api/entities';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ApiWaiversService {
  constructor(
    @InjectRepository(Waivers_V2)
    private repo: Repository<Waivers_V2>
  ) {}

  async getWaiverPriority() {
    return await this.repo.find();
  }
}
