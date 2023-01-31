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

  @Get('/tournament/:apiKey')
  async findAll(@Param('apiKey') apiKey: string): Promise<Tournament[]> {
    let tournaments: Tournament[];
    await this.challongeService.findAllTournaments(apiKey).then((response) => tournaments = response);
    return tournaments;
  }

  @Get('/tournament/:apikey:tournamentId')
  findOneTournament(@Param('tournamentId') id: string, @Param('apiKey') apiKey: string) {
    return this.challongeService.findOneTournament(+id, apiKey);
  }
}
