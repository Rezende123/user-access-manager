import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserInterface } from './models/user.model';
import { UserService } from './services/user.service';

@Controller('user')
export class UserController {
  constructor(private service: UserService) {}
  @Post()
  create(
    @Body()
    userData: UserInterface,
  ) {
    return this.service.create(userData);
  }
  @Get(':id')
  getById(
    @Param('id')
    id: string,
  ) {
    return this.service.getById(id);
  }
}
