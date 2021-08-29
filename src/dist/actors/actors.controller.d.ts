import { ActorsService } from './actors.service';
import { CreateActorDto } from './dto/create-actor.dto';
import { UpdateActorDto } from './dto/update-actor.dto';
export declare class ActorsController {
    private readonly actorsService;
    constructor(actorsService: ActorsService);
    create(createActorDto: CreateActorDto): string;
    findAll(): import("./interfaces/actor.interface").Actor[];
    findOne(id: number): import("./interfaces/actor.interface").Actor;
    update(id: string, updateActorDto: UpdateActorDto): string;
    remove(id: string): import("./interfaces/actor.interface").Actor[];
}
