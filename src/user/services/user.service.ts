import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserReturnAdapter } from '../adapters/user-return.adapter';
import { User, UserDocument } from '../models/user.model';
import * as bcrypt from 'bcrypt';
import { QueryUserDto } from '../dto/query-user.dto';
import { UserDto } from '../dto/user.dto';

/**
 * @class UserService
 * @description Interage com o banco de dados a fim de salvar e buscar as informações do usuário
 */
@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  /**
   * @method encriptPassword
   * @description Criptografa a senha definida pelo usuário para que possa ser salva no banco de dados
   */
  private async encriptPassword(userData: UserDto): Promise<void> {
    const rounds = Number(process.env.HASH_ROUNDS);
    userData.password = await bcrypt.hash(userData.password, rounds);
  }

  /**
   * @method create
   * @description Salva as informações do usuário no banco de dados
   * @returns O documento do usuário salvo
   */
  async create(userData: UserDto): Promise<UserReturnAdapter> {
    await this.encriptPassword(userData);

    const UserModelData = new this.userModel(userData);
    const createdUser = await UserModelData.save();

    return new UserReturnAdapter(createdUser);
  }

  /**
   * @method getById
   * @description Busca as informações do usário por id
   * @returns O documento do usuário salvo
   */
  async getById(id: string): Promise<UserReturnAdapter> {
    const user = await this.userModel.findById(id);

    return new UserReturnAdapter(user);
  }

  /**
   * @method getOne
   * @description Busca as informações do usário por uma query definida no parâmetro da requisição
   * @returns O documento do usuário salvo
   */
  async getOne(where: QueryUserDto): Promise<UserReturnAdapter> {
    const user = await this.userModel.findOne(where);

    return new UserReturnAdapter(user);
  }
}
