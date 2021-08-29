import { CreateActorDto } from './dto/create-actor.dto';
import { UpdateActorDto } from './dto/update-actor.dto';
import { Actor } from './interfaces/actor.interface';
export declare class ActorsService {
    private readonly actors;
    create(createActorDto: CreateActorDto): string;
    findAll(): Actor[];
    findOne(id: number): Actor;
    update(id: number, updateActorDto: UpdateActorDto): string;
    remove(id: number): Actor[];
}
