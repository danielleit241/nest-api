import { Body, Controller, Get, Put, UseGuards } from '@nestjs/common';
import { User } from 'generated/prisma';
import { Roles } from 'src/auth/decorator';
import { GetUser } from 'src/auth/decorator/get-user.decorator';
import { JwtGuard } from 'src/auth/guard';
import { RolesGuard } from 'src/auth/guard/roles.guard';
import { EditUserDto } from './dto';
import { UserService } from './user.service';

@UseGuards(JwtGuard, RolesGuard)
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('me')
  @Roles(['user'])
  getMe(@GetUser() user: User) {
    console.log(user);
    return user;
  }

  @Put()
  editUser(@GetUser('id') userId: number, @Body() dto: EditUserDto) {
    return this.userService.editUser(userId, dto);
  }
}
