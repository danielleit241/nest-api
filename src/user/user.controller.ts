import { Controller, Get, Put, UseGuards } from '@nestjs/common';
import { User } from 'generated/prisma';
import { Roles } from 'src/auth/decorator';
import { GetUser } from 'src/auth/decorator/get-user.decorator';
import { JwtGuard } from 'src/auth/guard';
import { RolesGuard } from 'src/auth/guard/roles.guard';

@UseGuards(JwtGuard, RolesGuard)
@Controller('users')
export class UserController {
  @Get('me')
  @Roles(['user'])
  getMe(@GetUser() user: User) {
    console.log(user);
    return user;
  }

  @Put()
  @Roles(['user'])
  editUser(@GetUser('id') userId: number) {
    console.log(userId);
    return {
      message: 'User updated successfully',
      userId: userId,
    };
  }
}
