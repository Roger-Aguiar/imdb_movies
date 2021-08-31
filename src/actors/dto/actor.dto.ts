import { PartialType } from '@nestjs/mapped-types';
import { NewActorDto } from './new-actor.dto';

export class ActorDto extends PartialType(NewActorDto) {}
