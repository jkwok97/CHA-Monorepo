import { Drafts_V2 } from '@api/entities';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntryDraftController } from './controllers';
import { EntryDraftMiddleware } from './middlewares';
import { ApiEntryDraftService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([Drafts_V2])],
  controllers: [EntryDraftController],
  providers: [ApiEntryDraftService],
})
export class ApiEntryDraftModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(EntryDraftMiddleware).forRoutes('*');
  }
}
