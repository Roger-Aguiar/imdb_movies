import { Injectable } from '@nestjs/common';
import { NewGenreDto } from './dto/new-genre.dto';
import { GenreDto } from './dto/genre.dto';

@Injectable()
export class GenresService 
{
  create(newGenreDto: NewGenreDto) 
  {
    return 'This action adds a new genre';
  }

  read() 
  {
    return `This action returns all genres`;
  }

  readById(id: number) 
  {
    return `This action returns a #${id} genre`;
  }

  update(id: number, genreDto: GenreDto) 
  {
    return `This action updates a #${id} genre`;
  }

  delete(id: number) 
  {
    return `This action removes a #${id} genre`;
  }
}
