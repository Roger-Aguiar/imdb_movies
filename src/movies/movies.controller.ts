import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { NewMovieDto } from './dto/new-movie.dto';
import { MovieDto } from './dto/movie.dto';

@Controller('movies')
export class MoviesController 
{
  constructor(private readonly moviesService: MoviesService) {}

  @Post()
  create(@Body() newMovieDto: NewMovieDto) 
  {
    return this.moviesService.create(newMovieDto);
  }

  @Get()
  read() 
  {
    return this.moviesService.read();
  }

  @Get(':id')
  readById(@Param('id') id: string) 
  {
    return this.moviesService.readById(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() movieDto: MovieDto) 
  {
    return this.moviesService.update(+id, movieDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) 
  {
    return this.moviesService.delete(id);
  }
}
