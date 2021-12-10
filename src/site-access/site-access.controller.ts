import { Controller, Get } from '@nestjs/common';

@Controller('hits')
export class SiteAccessController {
  @Get()
  amount() {
    return { amount: 123 };
  }
}
