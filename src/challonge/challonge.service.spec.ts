import { Test, TestingModule } from '@nestjs/testing';
import { ChallongeService } from './challonge.service';

describe('ChallongeService', () => {
  let service: ChallongeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChallongeService],
    }).compile();

    service = module.get<ChallongeService>(ChallongeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
