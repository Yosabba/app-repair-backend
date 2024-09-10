import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): object {
    return {
      welcome: true,
      name: 'domniic',
    };
  }
}
