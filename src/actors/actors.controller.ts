import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ActorsService } from './actors.service';
import { NewActorDto } from './dto/new-actor.dto';
import { ActorDto } from './dto/actor.dto';

@Controller('actors')
export class ActorsController 
{
  constructor(private readonly actorsService: ActorsService) {}

  @Post()
  create(@Body() newActorDto: NewActorDto) 
  {    
    return this.actorsService.create(newActorDto);
  }

  @Get()
  read() 
  {
    return this.actorsService.read();
  }

  @Get(':id')
  readById(@Param('id') id: number) 
  {
    return this.actorsService.readById(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() actorDto: ActorDto) 
  {
    return this.actorsService.update(+id, actorDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) 
  {
    return this.actorsService.delete(id);
  }
}
