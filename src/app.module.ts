import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SiteAccessController } from './site-access/site-access.controller';
import { CountapiService } from './site-access/services/countapi/countapi.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, SiteAccessController],
  providers: [AppService, CountapiService],
})
export class AppModule {}
