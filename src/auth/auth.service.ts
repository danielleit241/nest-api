import {
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private prismaService: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  async signup(dto: AuthDto) {
    try {
      //generate the password hash
      const hash = await argon.hash(dto.password);
      //save the user in the db
      const user =
        await this.prismaService.user.create({
          data: {
            email: dto.email,
            hash,
          },
        });

      const { hash: _hash, ...userWithoutHash } =
        user;
      return await this.signToken(
        userWithoutHash.id,
        userWithoutHash.email,
      );
    } catch (error) {
      if (
        error instanceof
          PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new ForbiddenException(
          'Credentials taken',
        );
      }
      throw error;
    }
  }

  async signin(dto: AuthDto) {
    //find the user by email
    const user =
      await this.prismaService.user.findFirst({
        where: {
          email: dto.email,
        },
      });
    if (!user) {
      throw new ForbiddenException(
        'Credentials incorrect',
      );
    }

    //compare the password
    const pwMatches = await argon.verify(
      user.hash,
      dto.password,
    );
    if (!pwMatches) {
      throw new ForbiddenException(
        'Credentials incorrect',
      );
    }
    return await this.signToken(
      user.id,
      user.email,
    );
  }

  async signToken(
    userId: number,
    email: string,
  ): Promise<{
    access_token: string;
    refresh_token?: string;
  }> {
    const claims = {
      sub: userId,
      email,
    };

    const secret =
      this.config.get<string>('JWT_SECRET');

    const token = await this.jwt.signAsync(
      claims,
      {
        expiresIn: '15m',
        secret,
      },
    );
    return {
      access_token: token,
    };
  }
}
