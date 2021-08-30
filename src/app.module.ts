import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ActorsModule } from './actors/actors.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ActorsModule, 
            TypeOrmModule.forRoot(),
          ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
