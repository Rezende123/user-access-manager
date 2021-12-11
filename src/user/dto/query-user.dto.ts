import { ApiProperty } from '@nestjs/swagger';

/**
 * @class QueryUserDto
 * @description Define os valores a serem utilizados na query de busca pelo usuário
 */
export class QueryUserDto {
  @ApiProperty({ type: String, required: false })
  username?: string;

  @ApiProperty({ type: String, required: false })
  name?: string;

  @ApiProperty({ type: String, required: false })
  email?: string;
}
