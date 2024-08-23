import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './database/prisma.service';

@Controller('api')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private prisma: PrismaService,
  ) {}

  @Get('hello')
  getHello() {
    return {
      message: 'aa',
    };
  }

  @Get('create-user')
  async createUser() {
    await this.prisma.user.create({
      data: {
        id: 'ewrttr',
        name: 'teste',
        email: 'teste@teste.com',
        user_photo: '{}',
      },
    });
  }

  @Get('get-users')
  async getUsers() {
    const users = await this.prisma.user.findMany();
    return users;
  }
}
