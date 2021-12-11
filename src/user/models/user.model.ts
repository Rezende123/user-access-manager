import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

/**
 * @interface UserInterface
 * @description Define o objeto recebido pela api na criação do usuário
 */
export interface UserInterface {
  _id?: string;
  username: string;
  password: string;
  name: string;
  email: string;
}

export type UserDocument = User & Document;

/**
 * @class User
 * @description Modela o usuário a ser salvo no banco de dados MongoDB
 */
@Schema()
export class User {
  @Prop({ type: mongoose.Schema.Types.ObjectId })
  id: string;

  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
