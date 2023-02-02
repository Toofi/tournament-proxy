import { Module } from '@nestjs/common';
import { ChallongeModule } from './challonge/challonge.module';

@Module({
  imports: [ChallongeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
