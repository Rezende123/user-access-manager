import { Injectable } from '@nestjs/common';
import { UserInterface } from '../models/user.model';

@Injectable()
export class UserService {
  create(userData: UserInterface) {
    return userData;
  }
}
