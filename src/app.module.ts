import { Module } from '@nestjs/common';
import { ChallongeModule } from './challonge/challonge.module';
import { StartggModule } from './startgg/startgg.module';

@Module({
  imports: [ChallongeModule, StartggModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
