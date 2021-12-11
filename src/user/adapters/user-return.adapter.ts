import { UserDto } from '../dto/user.dto';

/**
 * @class UserReturnAdapter
 * @description Retorna ao usuário apenas os campos que podem ser considerados públicos
 */
export class UserReturnAdapter {
  id: string;
  username: string;
  name: string;
  email: string;

  constructor(user: UserDto) {
    this.id = user._id;
    this.name = user.name;
    this.email = user.email;
    this.username = user.username;
  }
}
