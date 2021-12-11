import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { UserReturnAdapter } from './adapters/user-return.adapter';
import { QueryUserDto } from './dto/query-user.dto';
import { UserDto } from './dto/user.dto';
import { UserService } from './services/user.service';

@ApiTags('Usuário')
@Controller('user')
export class UserController {
  constructor(private service: UserService) {}

  @ApiBody({ type: UserDto })
  @Post()
  create(
    @Body()
    userData: UserDto,
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
    query: QueryUserDto,
  ): Promise<UserReturnAdapter> {
    return this.service.getOne(query);
  }
}
