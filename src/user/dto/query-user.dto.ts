/**
 * @interface QueryUserDto
 * @description Define os valores a serem utilizados na query de busca pelo usuário
 */
export interface QueryUserDto {
  username?: string;
  name?: string;
  email?: string;
}
