import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserReturnAdapter } from '../adapters/user-return.adapter';
import { User, UserDocument, UserInterface } from '../models/user.model';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  private async encriptPassword(userData: UserInterface) {
    const rounds = Number(process.env.HASH_ROUNDS);
    userData.password = await bcrypt.hash(userData.password, rounds);
  }

  async create(userData: UserInterface) {
    await this.encriptPassword(userData);

    const createdUser = new this.userModel(userData);
    const user = await createdUser.save();

    return new UserReturnAdapter(user);
  }

  async getById(id: string) {
    const user = await this.userModel.findById(id);

    return new UserReturnAdapter(user);
  }
}
