import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ActorsModule } from './actors/actors.module';

@Module({
  imports: [ActorsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
