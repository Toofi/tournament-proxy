import { Test, TestingModule } from '@nestjs/testing';
import { ChallongeController } from './challonge.controller';
import { ChallongeService } from './challonge.service';

describe('ChallongeController', () => {
  let controller: ChallongeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChallongeController],
      providers: [ChallongeService],
    }).compile();

    controller = module.get<ChallongeController>(ChallongeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
