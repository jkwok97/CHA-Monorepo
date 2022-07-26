import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { configuration, validationSchema } from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      validationSchema,
    }),
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class ApiCoreModule {}
