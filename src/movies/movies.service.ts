import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NewMovieDto } from './dto/new-movie.dto';
import { MovieDto } from './dto/movie.dto';
import { Movie } from './entities/movie.entity';
/*import { NewActorDto } from '../actors/dto/new-actor.dto';
import { ActorDto } from '../actors/dto/actor.dto';
import { Actor } from '../actors/entities/actor.entity';
import { NewGenreDto } from '../genres/dto/new-genre.dto';
import { GenreDto } from '../genres/dto/genre.dto';
import { Genre } from '../genres/entities/genre.entity';*/

@Injectable()
export class MoviesService 
{
  constructor(@InjectRepository(Movie) private movieRepository: Repository<Movie>){}

  async create(newMovieDto: NewMovieDto) 
  {
    this.movieRepository.save(newMovieDto);
  }

  read(): Promise<Movie []>
  {
    return this.movieRepository.find();
  }

  readById(id: number): Promise<Movie>
  {
    return this.movieRepository.findOne(id);
  }

  update(id: number, movieDto: MovieDto) 
  {
    if(movieDto.id == id)
    {
      this.movieRepository.save(movieDto);
    }
    else
    {
      return 'Not found movie.';
    }        
  }

  async delete(id: string): Promise<void> 
  {
    await this.movieRepository.delete(id);
  }
}
