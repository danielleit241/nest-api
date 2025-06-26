import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super({
      datasources: {
        db: {
          url: 'postgresql://sa:123@localhost:5434/nest?shema=public&connection_limit=1',
        },
      },
    });
  }
}
