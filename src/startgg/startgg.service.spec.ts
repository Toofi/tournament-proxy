import { Test, TestingModule } from '@nestjs/testing';
import { StartggService } from './startgg.service';

describe('StartggService', () => {
  let service: StartggService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StartggService],
    }).compile();

    service = module.get<StartggService>(StartggService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
