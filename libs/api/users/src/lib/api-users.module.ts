import { Users_V2 } from '@api/entities';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './controllers';
import { UserMiddleware } from './middlewares';
import { UsersService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([Users_V2])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class ApiUsersModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UserMiddleware).forRoutes('*');
  }
}
