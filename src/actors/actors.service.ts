import { Injectable } from '@nestjs/common';
import { CreateActorDto } from './dto/create-actor.dto';
import { UpdateActorDto } from './dto/update-actor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Actor} from './entities/actor.entity';

@Injectable()
export class ActorsService 
{  
  constructor(@InjectRepository(Actor) private actorRepository: Repository<Actor>){}
  
  async create(createActorDto: CreateActorDto)
  {
     this.actorRepository.save(createActorDto);    
  }

  findAll(): Promise<Actor[]> 
  {    
    return this.actorRepository.find();
  }

  findOne(id: number): Promise<Actor>
  {
    return this.actorRepository.findOne(id);    
  }

  async update(id: number, updateActorDto: UpdateActorDto) 
  {
    if(updateActorDto.id == id)
    {
      this.actorRepository.save(updateActorDto);
    }
    else
    {
      return 'Not found actor.';
    }        
  }
  
  async remove(id: string) : Promise<void>
  {            
    await this.actorRepository.delete(id);               
  }
}
