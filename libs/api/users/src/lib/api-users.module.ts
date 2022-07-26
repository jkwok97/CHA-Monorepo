import { Module } from '@nestjs/common';
import { UsersController } from './controllers';

@Module({
  controllers: [UsersController],
  providers: [],
  exports: [],
})
export class ApiUsersModule {}
