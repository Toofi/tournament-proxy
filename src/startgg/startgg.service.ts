import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';
import { Participant } from './interfaces/participant/participant';
import { Sets } from './interfaces/set/set';

@Injectable()
export class StartggService {

  private readonly baseUrl: string = "https://api.smash.gg";
  private readonly requestConfig: any =  { headers: {'X-Requested-With': 'XMLHttpRequest', 
  'Accept-Encoding': "gzip,deflate,compress"} };

  constructor(private readonly httpService: HttpService) {}

  async getBracket(bracketId: string) {
    let result;
    await this.getBracketRoughData(bracketId).then(data => result = data);
    return result;
  }

  async getParticipants(bracketId: string): Promise<Participant[]> {
    let participants: Participant[] = new Array();
    await this.getBracketRoughData(bracketId).then(data => participants = data.entities.participants);
    return participants;
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
    //all infos :
    //?expand[]=participants&expand[]=standings&expand[]=seeds&expand[]=entrants&expand[]=sets
    const { data } = await firstValueFrom(
      this.httpService.get(`${this.baseUrl}/phase_group/${bracketId}?expand[]=participants&expand[]=sets`, this.requestConfig)
      .pipe(catchError((error: AxiosError) => {
        console.log(error);
        throw 'error';
      }))
    );
    return data;
  }
}
