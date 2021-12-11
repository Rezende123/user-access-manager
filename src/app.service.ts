import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private date = new Date();

  getAppStatus(): any {
    return { message: `A API está funcionando desde ${this.date.toString()}` };
  }
}
