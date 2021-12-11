import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { UserReturnAdapter } from './adapters/user-return.adapter';
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
  ): Promise<UserReturnAdapter> {
    return this.service.create(userData);
  }

  @Get(':id')
  getById(
    @Param('id')
    id: string,
  ): Promise<UserReturnAdapter> {
    return this.service.getById(id);
  }

  @Get()
  getOne(
    @Query()
    query: QueryUserInterface,
  ): Promise<UserReturnAdapter> {
    return this.service.getOne(query);
  }
}
