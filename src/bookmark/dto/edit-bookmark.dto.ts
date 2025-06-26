import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class EditBookmarkDto {
  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'Updated Bookmark Title' })
  title?: string;
  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'https://example.com/updated-bookmark' })
  link?: string;
  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'Updated description of the bookmark.' })
  description?: string;
}
