import { HttpService } from '@nestjs/axios/dist';
import { Injectable } from '@nestjs/common';
import { AxiosError, AxiosResponse } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';
import { CreateChallongeDto } from './dto/create-challonge.dto';
import { Tournament } from './interfaces/tournament';

@Injectable()
export class ChallongeService {

  constructor(private readonly httpService: HttpService) {}

  create(createChallongeDto: CreateChallongeDto) {
    return 'This action adds a new challonge';
  }

  async findAllTournaments(apiKey: string): Promise<Tournament[]> {
    const { data } = await firstValueFrom(
      this.httpService.get<Tournament[]>(`https://api.challonge.com/v1/tournaments.json?api_key=${apiKey}`, 
      { headers: {'X-Requested-With': 'XMLHttpRequest', 
        'Accept-Encoding': "gzip,deflate,compress"
      }}).pipe(
        catchError((error: AxiosError) => {
          throw 'error';
        })
      )
    );
    return data;
    const result = this.httpService.get<any>(`https://api.challonge.com/v1/tournaments.json?api_key=${apiKey}`).subscribe((result) => 
      console.log(result.data));
    console.log(result);
    // const { data } = await firstValueFrom(
    //   this.httpService.get<Cat[]>('http://localhost:3000/cats').pipe(
    //     catchError((error: AxiosError) => {
    //       this.logger.error(error.response.data);
    //       throw 'An error happened!';
    //     }),
    //   ),
    // );
    //récupérer infos du résultat
    //return les infos
  }

  findOneTournament(id: number, apiKey: string) {
    return `This action returns a #${id} challonge`;
  }
}
