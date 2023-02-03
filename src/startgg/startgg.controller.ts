import { Controller, Get, Param } from '@nestjs/common';
import { StartggService } from './startgg.service';

@Controller('startgg')
export class StartggController {
  constructor(private readonly startggService: StartggService) {}

  @Get('brackets/bracketId=:bracketId')
  findOneTournament(@Param('bracketId') bracketId: string) {
    return this.startggService.getBracket(bracketId);
  }

  @Get('entrants/bracketId=:bracketId')
  findEntrants(@Param('bracketId') bracketId: string) {
    return this.startggService.getEntrants(bracketId);
  }
}
