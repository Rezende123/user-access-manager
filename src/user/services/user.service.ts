import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserReturnAdapter } from '../adapters/user-return.adapter';
import { User, UserDocument, UserInterface } from '../models/user.model';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(userData: UserInterface) {
    const createdUser = new this.userModel(userData);
    const user = await createdUser.save();
    return new UserReturnAdapter(user);
  }
}
