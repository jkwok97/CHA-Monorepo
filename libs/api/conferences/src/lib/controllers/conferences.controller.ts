import { Conferences_V2 } from '@api/entities';
import { ConferenceCreateDto, ConferenceDto } from '@cha/shared/entities';
import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
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

  @Put('/:id')
  updateConferenceById(@Param() param, @Body() body): Promise<ConferenceDto> {
    return this.conferencesService.updateConferenceById(parseInt(param.id), body);
  }

  @Post('/add')
  addConference(@Body() body: ConferenceCreateDto) {
    return this.conferencesService.addConference(body);
  }

  @Delete('/:id')
  deleteConference(@Param() param) {
    return this.conferencesService.deleteConference(parseInt(param.id));
  }
}
