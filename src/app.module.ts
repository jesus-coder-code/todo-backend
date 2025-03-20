import { Module } from '@nestjs/common';
import { TodoModule } from './WebApi/Modules/todo.module';
import { DatabaseModule } from './WebApi/Modules/database.module';

@Module({
  imports: [
    TodoModule,
    DatabaseModule
  ],
})
export class AppModule {}
