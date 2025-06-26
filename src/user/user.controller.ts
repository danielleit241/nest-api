import {
  Controller,
  Get,
  Put,
  UseGuards,
} from '@nestjs/common';
import { User } from 'generated/prisma';
import { GetUser } from 'src/auth/decorator/get-user.decorator';
import { JwtGuard } from 'src/auth/guard';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  @Get('me')
  getMe(@GetUser() user: User) {
    console.log(user);
    return user;
  }

  @Put()
  editUser(@GetUser('id') userId: number) {
    console.log(userId);
    return {
      message: 'User updated successfully',
      userId: userId,
    };
  }
}
