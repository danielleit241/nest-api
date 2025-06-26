import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateBookmarkDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'My Favorite Article' })
  title: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'https://example.com/my-favorite-article' })
  link: string;
  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'An article about my favorite topic.' })
  description?: string;
}
