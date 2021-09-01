import { Module } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';
import { Actor } from '../actors/entities/actor.entity';
import { Genre } from '../genres/entities/genre.entity';

@Module(
  {
    imports: [Actor, Genre],
    controllers: [MoviesController],
    providers: [MoviesService]
  })
export class MoviesModule {}
