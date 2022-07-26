import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ApiAwardsModule } from '@api/awards';
import { ApiUsersModule } from '@api/users';
import { configuration, validationSchema } from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      validationSchema,
    }),
    ApiUsersModule,
    ApiAwardsModule,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class ApiCoreModule {}
