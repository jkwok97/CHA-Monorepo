import { Divisions_V2 } from '@api/entities';
import { Controller, Get, NotFoundException } from '@nestjs/common';
import { ApiDivisionsService } from '../services';

@Controller('divisions')
export class DivisionsController {
  constructor(private divisionsService: ApiDivisionsService) {}

  @Get()
  async getAll(): Promise<Divisions_V2[]> {
    const divisions = await this.divisionsService.getAll();

    if (!divisions || divisions.length < 1) {
      throw new NotFoundException('Divisions not found');
    }
    return divisions;
  }
}
