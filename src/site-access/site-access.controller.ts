import { Controller, Get } from '@nestjs/common';
import { CountapiService } from './services/countapi/countapi.service';

@Controller('hits')
export class SiteAccessController {
  constructor(private countApi: CountapiService) {}

  @Get()
  amount() {
    return this.countApi.hits();
  }
}
