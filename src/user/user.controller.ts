import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserReturnAdapter } from './adapters/user-return.adapter';
import { QueryUserDto } from './dto/query-user.dto';
import { UserDto } from './dto/user.dto';
import { UserService } from './services/user.service';

@ApiTags('Usuário')
@Controller('user')
export class UserController {
  constructor(private service: UserService) {}

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Dados do usuário que foi criado.',
  })
  @ApiResponse({
    status: HttpStatus.PRECONDITION_REQUIRED,
    description: 'Dados inválidos para cadastrar usuário.',
  })
  @ApiResponse({
    status: HttpStatus.SERVICE_UNAVAILABLE,
    description: 'Não foi possível salvar o cadastro.',
  })
  @ApiBody({ type: UserDto })
  @Post()
  create(
    @Body()
    userData: UserDto,
  ): Promise<UserReturnAdapter> {
    return this.service.create(userData);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Usuário encontrado.',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Não foi possível encontrar um usuário com o ID: XXX.',
  })
  @Get(':id')
  getById(
    @Param('id')
    id: string,
  ): Promise<UserReturnAdapter> {
    return this.service.getById(id);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Usuário encontrado.',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Não foi possível encontrar um usuário com estes requisitos.',
  })
  @Get()
  getOne(
    @Query()
    query: QueryUserDto,
  ): Promise<UserReturnAdapter> {
    return this.service.getOne(query);
  }
}
