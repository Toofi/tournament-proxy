import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';
import { Sets } from './interfaces/set';

@Injectable()
export class StartggService {

  private readonly baseUrl: string = "https://api.smash.gg";
  private readonly requestConfig: any =  { headers: {'X-Requested-With': 'XMLHttpRequest', 
  'Accept-Encoding': "gzip,deflate,compress"} };

  constructor(private readonly httpService: HttpService) {}

  async getBracket(bracketId: string) {
    const { data } = await this.getBracketRoughData(bracketId);
    return data;
  }

  async getEntrants(bracketId: string) {
    const { data } = await this.getBracketRoughData(bracketId);
    return data.entities.participants;
  }

  async getRounds(bracketId: string): Promise<Sets[]> {
    let roundsWithTwoParticipants: Sets[] = new Array();
    await this.getBracketRoughData(bracketId).then((response) => {
      const rounds: Sets[] = response.entities.sets;
      roundsWithTwoParticipants = rounds.filter(round => round.entrant1Id !== null && round.entrant2Id !== null);
    });
    return roundsWithTwoParticipants;
  }

  private async getBracketRoughData(bracketId: string) {
    const { data } = await firstValueFrom(
      this.httpService.get(`${this.baseUrl}/phase_group/${bracketId}?expand[]=participants&expand[]=standings&expand[]=seeds&expand[]=entrants&expand[]=sets`, this.requestConfig)
      .pipe(catchError((error: AxiosError) => {
        console.log(error);
        throw 'error';
      }))
    );
    return data;
  }
}
