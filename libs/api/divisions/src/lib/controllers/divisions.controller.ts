import { Divisions_V2 } from '@api/entities';
import { DivisionCreateDto, DivisionDto } from '@cha/shared/entities';
import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
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

  @Put('/:id')
  updateDivisionById(@Param() param, @Body() body): Promise<DivisionDto> {
    return this.divisionsService.updateDivisionById(parseInt(param.id), body);
  }

  @Post('/add')
  addDivision(@Body() body: DivisionCreateDto) {
    return this.divisionsService.addDivision(body);
  }

  @Delete('/:id')
  deleteDivision(@Param() param) {
    return this.divisionsService.deleteDivision(parseInt(param.id));
  }
}
