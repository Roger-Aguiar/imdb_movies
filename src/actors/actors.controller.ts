import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ActorsService } from './actors.service';
import { CreateActorDto } from './dto/create-actor.dto';
import { UpdateActorDto } from './dto/update-actor.dto';

@Controller('actors')
export class ActorsController 
{
  constructor(private readonly actorsService: ActorsService) {}

  @Post()
  create(@Body() createActorDto: CreateActorDto) 
  {    
    return this.actorsService.create(createActorDto);
  }

  @Get()
  findAll() 
  {
    return this.actorsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) 
  {
    return this.actorsService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateActorDto: UpdateActorDto) 
  {
    return this.actorsService.update(+id, updateActorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) 
  {
    return this.actorsService.remove(+id);
  }
}
