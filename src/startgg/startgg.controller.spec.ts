import { Test, TestingModule } from '@nestjs/testing';
import { StartggController } from './startgg.controller';
import { StartggService } from './startgg.service';

describe('StartggController', () => {
  let controller: StartggController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StartggController],
      providers: [StartggService],
    }).compile();

    controller = module.get<StartggController>(StartggController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
