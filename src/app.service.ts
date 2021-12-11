import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  date = new Date();

  getAppStatus(): any {
    return { message: `A API está funcionando! Desde ${this.date.toString()}` };
  }
}
