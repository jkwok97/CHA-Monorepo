import { Conferences_V2 } from '@api/entities';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([Conferences_V2])],
  controllers: [DivisionsController],
  providers: [ApiDivisionsService],
})
export class ApiConferencesModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(DivisionsMiddleware).forRoutes('*');
  }
}
