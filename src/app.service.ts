import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  date = new Date();

  getHello(): string {
    return `A API está funcionando! Desde ${this.date.toString()}`;
  }
}
