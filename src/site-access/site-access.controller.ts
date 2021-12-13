import { Controller, Get, HttpStatus } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { HitAdapter } from './adapters/hit.adapter';
import { CountapiService } from './services/countapi/countapi.service';

@ApiTags('Acessos')
@Controller('hits')
export class SiteAccessController {
  constructor(private countApi: CountapiService) {}

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Quantidade atual de acessos.',
  })
  @Get()
  amount(): Promise<HitAdapter> {
    return this.countApi.hits();
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Quantidade incrementada de acessos.',
  })
  @Get('up')
  increase(): Promise<HitAdapter> {
    return this.countApi.hit();
  }
}
