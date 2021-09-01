import { PartialType } from '@nestjs/mapped-types';
import { NewGenreDto } from './new-genre.dto';

export class GenreDto extends PartialType(NewGenreDto) {}
