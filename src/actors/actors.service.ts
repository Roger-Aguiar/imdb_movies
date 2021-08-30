import { Injectable } from '@nestjs/common';
import { CreateActorDto } from './dto/create-actor.dto';
import { UpdateActorDto } from './dto/update-actor.dto';
//import { Actor } from './interfaces/actor.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Actor} from './entities/actor.entity';

@Injectable()
export class ActorsService 
{  
  constructor(@InjectRepository(Actor) private actorRepository: Repository<Actor>){}

  private readonly actors: Actor[] = [
    {
      "id": 1,
      "actor": "Jean-Claude Van Damme",
      "born": " October 18, 1960",
      "country": "Belgium",
      "imdb_link": "https://www.imdb.com/name/nm0000241/",
      "as_actor": 75,
      "as_producer": 12,
      "as_director": 0
    },
    {
      "id": 2,
      "actor": "Arnold Schwarzenegger",
      "born": "July 30, 1947",
      "country": "Australia",
      "imdb_link": "https://www.imdb.com/name/nm0000216/",
      "as_actor": 79,
      "as_producer": 13,
      "as_director": 2
    },
    {
      "id": 3,
      "actor": "Denzel Washington",
      "born": "December 28, 1954",
      "country": "USA",
      "imdb_link": "https://www.imdb.com/name/nm0000243/?ref_=nv_sr_srsg_0",
      "as_actor": 61,
      "as_producer": 13,
      "as_director": 5
    }
  ]

  create(createActorDto: CreateActorDto) 
  {
    return `Id: ${createActorDto.id}
            Actor: ${createActorDto.actor}
            Born: ${createActorDto.born}
            Country: ${createActorDto.country}
            Imdb link: ${createActorDto.imdb_link}
            As actor: ${createActorDto.as_actor}
            As producer: ${createActorDto.as_producer}
            As director: ${createActorDto.as_director}`;    
  }

  findAll(): Actor[] 
  {    
    return this.actors;
  }

  findOne(id: number): Actor
  {
    return this.actors.find(actor => actor.id == id);    
  }

  update(id: number, updateActorDto: UpdateActorDto) 
  {
    if(updateActorDto.id == id)
    {
      return `Id: ${updateActorDto.id}
            Actor: ${updateActorDto.actor}
            Born: ${updateActorDto.born}
            Country: ${updateActorDto.country}
            Imdb link: ${updateActorDto.imdb_link}
            As actor: ${updateActorDto.as_actor}
            As producer: ${updateActorDto.as_producer}
            As director: ${updateActorDto.as_director}`;
    }
    else
    {
      return 'Not found actor.';
    }        
  }

  
  remove(id: number) 
  {
    let actorsCopy = this.actors;
    actorsCopy.splice(id);
    return actorsCopy;              
  }
}
