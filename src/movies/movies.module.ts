import { Module } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';
import { Actor } from '../actors/entities/actor.entity';
@Module(
  {
    imports: [Actor],
    controllers: [MoviesController],
    providers: [MoviesService]
  })
export class MoviesModule {}
