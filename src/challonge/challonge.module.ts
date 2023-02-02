import { Module } from '@nestjs/common';
import { ChallongeService } from './challonge.service';
import { ChallongeController } from './challonge.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule.register({
    timeout: 5000,
    maxRedirects: 5
  })],
  controllers: [ChallongeController],
  providers: [ChallongeService]
})
export class ChallongeModule {}
