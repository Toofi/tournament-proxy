import { Controller, Get, Param } from '@nestjs/common';
import { StartggService } from './startgg.service';

@Controller('startgg')
export class StartggController {
  constructor(private readonly startggService: StartggService) {}

  @Get('bracketId=:bracketId')
  findAllData(@Param('bracketId') bracketId: string) {
    return this.startggService.getAllData(bracketId);
  }

  @Get('brackets/bracketId=:bracketId')
  findOneTournament(@Param('bracketId') bracketId: string) {
    return this.startggService.getBracket(bracketId);
  }

  @Get('participants/bracketId=:bracketId')
  findParticipants(@Param('bracketId') bracketId: string) {
    return this.startggService.getParticipants(bracketId);
  }

  @Get('rounds/bracketId=:bracketId')
  findRounds(@Param('bracketId') bracketId: string) {
    return this.startggService.getRounds(bracketId);
  }
}
