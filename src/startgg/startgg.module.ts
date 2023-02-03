import { Module } from '@nestjs/common';
import { StartggService } from './startgg.service';
import { StartggController } from './startgg.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule.register({
    timeout: 5000,
    maxRedirects: 5
  })],
  controllers: [StartggController],
  providers: [StartggService]
})
export class StartggModule {}
