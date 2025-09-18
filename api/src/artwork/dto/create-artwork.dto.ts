import { Transform } from 'class-transformer';
import { IsBoolean, IsNotEmpty, IsString, MaxLength, IsInt, IsNumber } from 'class-validator';

export class CreateArtworkDto {
  @Transform(({ value }) => value.toUpperCase())
  @IsString({ message: 'campo title deve ser uma string' })
  @MaxLength(255)
  @IsNotEmpty()
  readonly title: string;

  @IsNotEmpty()
  @MaxLength(255)
  readonly artist: string;

  @IsNotEmpty()
  @IsInt()
  readonly year: number;

  @IsNotEmpty()
  @IsNumber()
  readonly price: number;
}
