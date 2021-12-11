import { UserInterface } from '../models/user.model';

export class UserReturnAdapter {
  id?: string;
  username: string;
  name: string;
  email: string;

  constructor(user: UserInterface) {
    this.id = user._id;
    this.name = user.name;
    this.email = user.email;
    this.username = user.username;
  }
}
