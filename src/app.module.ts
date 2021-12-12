import { Module } from '@nestjs/common';
import { AppController } from './app/app.controller';
import { AppService } from './app/app.service';
import { SiteAccessController } from './site-access/site-access.controller';
import { CountapiService } from './site-access/services/countapi/countapi.service';
import { ConfigModule } from '@nestjs/config';
import { UserController } from './user/user.controller';
import { UserService } from './user/services/user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './user/models/user.model';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_DB_URL),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [AppController, SiteAccessController, UserController],
  providers: [AppService, CountapiService, UserService],
})
export class AppModule {}
