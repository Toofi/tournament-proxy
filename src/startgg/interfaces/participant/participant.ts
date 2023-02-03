import { Mutations } from "./mutation";

export interface Participant {
  id: number;
  playerId: number;
  tournamentId: number;
  gamerTag: string;
  prefix: string;
  verified: boolean;
  claimed: boolean;
  venueType?: any;
  images: any[];
  expand: any[];
  name: string;
  mutations: Mutations;
}