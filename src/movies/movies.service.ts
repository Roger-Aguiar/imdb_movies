import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NewMovieDto } from './dto/new-movie.dto';
import { MovieDto } from './dto/movie.dto';
import { Movie } from './entities/movie.entity';
import { NewActorDto } from '../actors/dto/new-actor.dto';

@Injectable()
export class MoviesService 
{
  constructor(@InjectRepository(Movie) private movieRepository: Repository<Movie>){}

  create(newMovieDto: NewMovieDto) 
  {
    return 'This action adds a new movie';
  }

  read() 
  {
    return `This action returns all movies`;
  }

  readById(id: number) 
  {
    return `This action returns a #${id} movie`;
  }

  update(id: number, movieDto: MovieDto) 
  {
    return `This action updates a #${id} movie`;
  }

  delete(id: number) 
  {
    return `This action removes a #${id} movie`;
  }
}
