import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChallongeModule } from './challonge/challonge.module';

@Module({
  imports: [ChallongeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
