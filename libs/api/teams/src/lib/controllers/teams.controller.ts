import { Controller } from '@nestjs/common';
import { TeamsService } from '../services';

@Controller('teams')
export class TeamsController {
  constructor(private teamsService: TeamsService) {}
}
