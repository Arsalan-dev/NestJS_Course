import { IsEnum, MinLength } from 'class-validator';

export class CreateNinjaDto {
  @MinLength(4)
  name: string;

  @IsEnum(['stars', 'tank'], {message: 'Use correct weapon'})
  weapon: 'stars' | 'tank';
}
