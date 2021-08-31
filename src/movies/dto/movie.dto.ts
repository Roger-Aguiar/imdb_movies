import { PartialType } from '@nestjs/mapped-types';
import { NewMovieDto } from './new-movie.dto';

export class MovieDto extends PartialType(NewMovieDto) {}
