import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Teams_V2 } from '@cha/shared/entities';
import { Repository } from 'typeorm';

@Injectable()
export class TeamsService {
  constructor(@InjectRepository(Teams_V2) private repo: Repository<Teams_V2>) {}
}
