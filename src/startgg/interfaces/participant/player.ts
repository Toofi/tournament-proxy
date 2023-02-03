import { Ranking } from "./ranking";

export interface Player {
  id: number;
  gamerTag: string;
  prefix: string;
  name?: any;
  state?: any;
  country?: any;
  region?: any;
  images?: any;
  rankings: Ranking[];
}