import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ActorsModule } from './actors/actors.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoviesModule } from './movies/movies.module';

@Module({
  imports: [ActorsModule, TypeOrmModule.forRoot(), MoviesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
