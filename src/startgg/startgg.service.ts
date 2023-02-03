import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';

@Injectable()
export class StartggService {

  private readonly baseUrl: string = "https://api.smash.gg";
  private readonly requestConfig: any =  { headers: {'X-Requested-With': 'XMLHttpRequest', 
  'Accept-Encoding': "gzip,deflate,compress"} };

  constructor(private readonly httpService: HttpService) {}

  async getBracket(bracketId: string) {
    const { data } = await firstValueFrom(
      this.httpService.get(`${this.baseUrl}/phase_group/${bracketId}?expand[]=participants&expand[]=standings&expand[]=seeds&expand[]=entrants&expand[]=sets`, this.requestConfig)
      .pipe(catchError((error: AxiosError) => {
        console.log(error);
        throw 'error';
      }))
    );
    return data;
  }

  async getEntrants(bracketId: string) {
    const { data } = await firstValueFrom(
      this.httpService.get(`${this.baseUrl}/phase_group/${bracketId}?expand[]=participants&expand[]=standings&expand[]=seeds&expand[]=entrants&expand[]=sets`, this.requestConfig)
      .pipe(catchError((error: AxiosError) => {
        console.log(error);
        throw 'error';
      }))
    );
    return data.entities.participants;
  }
}
