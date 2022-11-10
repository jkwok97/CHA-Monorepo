import { Conferences_V2 } from '@api/entities';
import { Controller, Get, NotFoundException } from '@nestjs/common';
import { ApiConferencesService } from '../services';

@Controller('conferences')
export class ConferencesController {
  constructor(private conferencesService: ApiConferencesService) {}

  @Get()
  async getAll(): Promise<Conferences_V2[]> {
    const conferences = await this.conferencesService.getAll();

    if (!conferences || conferences.length < 1) {
      throw new NotFoundException('Conferences not found');
    }
    return conferences;
  }

  // @Put('/:id')
  // updateDivisionById(@Param() param, @Body() body): Promise<DivisionDto> {
  //   return this.conferencesService.updateDivisionById(parseInt(param.id), body);
  // }

  // @Post('/add')
  // addDivision(@Body() body: DivisionCreateDto) {
  //   return this.conferencesService.addDivision(body);
  // }

  // @Delete('/:id')
  // deleteDivision(@Param() param) {
  //   return this.conferencesService.deleteDivision(parseInt(param.id));
  // }
}
