import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class EditUserDto {
  @IsEmail()
  @ApiProperty({ example: 'alice@gmail.com' })
  email?: string;
  @IsString()
  @ApiProperty({ example: 'Alice' })
  firstName?: string;
  @IsString()
  @ApiProperty({ example: 'Smith' })
  lastName?: string;
}
