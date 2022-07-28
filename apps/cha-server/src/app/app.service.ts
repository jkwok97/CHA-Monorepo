import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: 'Welcome to cha-server!' };
  }

  getViewName() {
    return 'index.hbs';
  }
}
