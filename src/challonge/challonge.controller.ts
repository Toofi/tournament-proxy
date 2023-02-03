import { Controller, Get, Post, Body, Param} from '@nestjs/common';
import { ChallongeService } from './challonge.service';
import { CreateChallongeDto } from './dto/create-challonge.dto';
import { Tournament } from './interfaces/tournament';

@Controller('challonge')
export class ChallongeController {
  constructor(private readonly challongeService: ChallongeService) {}

  @Post()
  create(@Body() createChallongeDto: CreateChallongeDto) {
    return this.challongeService.create(createChallongeDto);
  }

  @Get('tournaments/apiKey=:apiKey')
  async findAllTournaments(@Param('apiKey') apiKey: string): Promise<Tournament[]> {
    let tournaments: Tournament[];
    await this.challongeService.findAllTournaments(apiKey).then((response) => tournaments = response);
    return tournaments;
  }

  @Get('tournaments/apiKey=:apiKey/tournamentId=:tournamentId')
  async findOneTournament(@Param('apiKey') apiKey: string, @Param('tournamentId') id: string) {
    let tournament: Tournament[];
    await this.challongeService.findOneTournament(+id, apiKey).then((response) => tournament = response);
    return tournament;
  }
}
