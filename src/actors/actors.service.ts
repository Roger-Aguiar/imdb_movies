import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NewActorDto } from './dto/new-actor.dto';
import { ActorDto } from './dto/actor.dto';
import {Actor} from './entities/actor.entity';

@Injectable()
export class ActorsService 
{  
  constructor(@InjectRepository(Actor) private actorRepository: Repository<Actor>){}
  
  async create(newActorDto: NewActorDto)
  {
     this.actorRepository.save(newActorDto);    
  }

  read(): Promise<Actor[]> 
  {    
    return this.actorRepository.find();
  }

  readById(id: number): Promise<Actor>
  {
    return this.actorRepository.findOne(id);    
  }

  async update(id: number, actorDto: ActorDto) 
  {
    if(actorDto.id == id)
    {
      this.actorRepository.save(actorDto);
    }
    else
    {
      return 'Not found actor.';
    }        
  }
  
  async delete(id: string) : Promise<void>
  {            
    await this.actorRepository.delete(id);               
  }
}
