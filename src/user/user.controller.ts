import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { QueryUserInterface } from './models/query-user.model';
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
  @Get()
  getOne(
    @Query()
    query: QueryUserInterface,
  ) {
    return this.service.getOne(query);
  }
}
