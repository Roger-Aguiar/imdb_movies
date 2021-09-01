import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { GenresService } from './genres.service';
import { NewGenreDto } from './dto/new-genre.dto';
import { GenreDto } from './dto/genre.dto';

@Controller('genres')
export class GenresController 
{
  constructor(private readonly genresService: GenresService) {}

  @Post()
  create(@Body() newGenreDto: NewGenreDto) 
  {
    return this.genresService.create(newGenreDto);
  }

  @Get()
  read() 
  {
    return this.genresService.read();
  }

  @Get(':id')
  readById(@Param('id') id: string) 
  {
    return this.genresService.readById(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() genreDto: GenreDto) 
  {
    return this.genresService.update(+id, genreDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) 
  {
    return this.genresService.delete(+id);
  }
}
