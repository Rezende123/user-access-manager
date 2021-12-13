import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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
   * @method isValid
   * @description Valida se os dados do usuário estão corretos
   */
  isValidUser(userData: UserDto) {
    return (
      userData.name && userData.username && userData.email && userData.password
    );
  }

  /**
   * @method create
   * @description Salva as informações do usuário no banco de dados
   * @returns O documento do usuário salvo
   */
  async create(userData: UserDto): Promise<UserReturnAdapter> {
    if (!this.isValidUser(userData)) {
      throw new HttpException(
        'Dados inválidos para cadastrar usuário',
        HttpStatus.PRECONDITION_REQUIRED,
      );
    }
    await this.encriptPassword(userData);

    const UserModelData = new this.userModel(userData);

    try {
      const createdUser = await UserModelData.save();

      return new UserReturnAdapter(createdUser);
    } catch (error) {
      throw new HttpException(
        'Não foi possível salvar o cadastro',
        HttpStatus.SERVICE_UNAVAILABLE,
      );
    }
  }

  /**
   * @method getById
   * @description Busca as informações do usário por id
   * @returns O documento do usuário salvo
   */
  async getById(id: string): Promise<UserReturnAdapter> {
    try {
      const user = await this.userModel.findById(id);

      return new UserReturnAdapter(user);
    } catch (error) {
      throw new HttpException(
        `Não foi possível encontrar um usuário com o ID: ${id}`,
        HttpStatus.NOT_FOUND,
      );
    }
  }

  /**
   * @method getOne
   * @description Busca as informações do usário por uma query definida no parâmetro da requisição
   * @returns O documento do usuário salvo
   */
  async getOne(where: QueryUserDto): Promise<UserReturnAdapter> {
    try {
      const user = await this.userModel.findOne(where);

      return new UserReturnAdapter(user);
    } catch (error) {
      throw new HttpException(
        'Não foi possível encontrar um usuário com estes requisitos',
        HttpStatus.NOT_FOUND,
      );
    }
  }
}
