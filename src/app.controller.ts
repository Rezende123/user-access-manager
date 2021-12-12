import { Controller, Get, Render } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { StatusDto } from './dto/status.dto';

@ApiTags('Status da api')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getAppStatus(): StatusDto {
    return this.appService.getAppStatus();
  }
}
