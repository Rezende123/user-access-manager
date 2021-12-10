import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SiteAccessController } from './site-access/site-access.controller';
import { CountapiService } from './site-access/services/countapi/countapi.service';
import { ConfigModule } from '@nestjs/config';
import { UserController } from './user/user.controller';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, SiteAccessController, UserController],
  providers: [AppService, CountapiService],
})
export class AppModule {}
