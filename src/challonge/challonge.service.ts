import { HttpService } from '@nestjs/axios/dist';
import { Injectable } from '@nestjs/common';
import { catchError, firstValueFrom } from 'rxjs';
import { CreateChallongeDto } from './dto/create-challonge.dto';
import { Tournament } from './interfaces/tournament';
import { AxiosError } from 'axios';

@Injectable()
export class ChallongeService {

  private readonly baseUrl: string = "https://api.challonge.com/v1/tournaments";
  private readonly requestConfig: any =  { headers: {'X-Requested-With': 'XMLHttpRequest', 
  'Accept-Encoding': "gzip,deflate,compress"} };

  constructor(private readonly httpService: HttpService) {}

  create(createChallongeDto: CreateChallongeDto) {
    return 'This action adds a new challonge';
  }

  async findAllTournaments(apiKey: string): Promise<Tournament[]> {
    const { data } = await firstValueFrom(
      this.httpService.get<Tournament[]>(`${this.baseUrl}.json?api_key=${apiKey}`, this.requestConfig)
        .pipe(catchError((error: AxiosError) => {
          console.log(error);
          throw 'error';
        })
      )
    );
    return data;
  }

  async findOneTournament(tournamentId: number, apiKey: string): Promise<Tournament[]> {
    const { data } = await firstValueFrom(
      this.httpService.get<Tournament[]>(`${this.baseUrl}/${tournamentId}.json?api_key=${apiKey}`, this.requestConfig)
        .pipe(catchError((error: AxiosError) => {
          console.log(error);
          throw 'error';
        })
      )
    );
    return data;
  }
}
