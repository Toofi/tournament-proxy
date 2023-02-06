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

  async getAllData(bracketId: string) {
    let result;
    await this.getAllRoughData(bracketId).then(data => result = data);
    return result;
  }

  async getParticipants(bracketId: string): Promise<Participant[]> {
    let participants: Participant[] = new Array();
    await this.getBracketRoughData(bracketId).then(data => participants = data.entities.participants);
    return participants;
  }

  async getRounds(bracketId: string): Promise<Sets[]> {
    let roundsWithTwoParticipants: Sets[] = new Array();
    await this.getBracketRoughData(bracketId).then((data) => { roundsWithTwoParticipants = data.entities.sets });
    return roundsWithTwoParticipants;
  }

  private async getBracketRoughData(bracketId: string): Promise<any> {
    const { data } = await firstValueFrom(
      this.httpService.get(`${this.baseUrl}/phase_group/${bracketId}?expand[]=participants&expand[]=sets`, this.requestConfig)
      .pipe(catchError((error: AxiosError) => {
        console.log(error);
        throw 'error';
      }))
    );
    return data;
  }

  /**
   * Get all participants, standings, seeds and sets from a backetId
   * @param bracketId 
   * @returns 
   */
  private async getAllRoughData(bracketId: string): Promise<any> {
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
