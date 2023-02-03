export interface Ranking {
  id: number;
  active: boolean;
  iterationId: number;
  sourceId: number;
  rank: number;
  seriesId: number;
  videogameId: number;
  externalId?: any;
}