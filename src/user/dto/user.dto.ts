import { ApiProperty } from '@nestjs/swagger';

/**
 * @class UserDto
 * @description Define o objeto recebido pela api na criação do usuário
 */
export class UserDto {
  _id?: string;

  @ApiProperty({ type: String })
  username: string;

  @ApiProperty({ type: String })
  password: string;

  @ApiProperty({ type: String })
  name: string;

  @ApiProperty({ type: String })
  email: string;
}
