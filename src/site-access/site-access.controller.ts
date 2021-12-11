import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { HitAdapter } from './adapters/hit.adapter';
import { CountapiService } from './services/countapi/countapi.service';

@ApiTags('Acessos')
@Controller('hits')
export class SiteAccessController {
  constructor(private countApi: CountapiService) {}

  @Get()
  amount(): Promise<HitAdapter> {
    return this.countApi.hits();
  }

  @Get('up')
  increase(): Promise<HitAdapter> {
    return this.countApi.hit();
  }
}
