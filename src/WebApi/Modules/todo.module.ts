import { CqrsModule } from "@nestjs/cqrs";
import { TodoController } from "../Controllers/todo.controller";
import { TodoService } from "src/Infrastructure/Services/todo.service";
import { GetTodoByIdQueryHandler } from "src/Application/CQRS/Queries/get-todo-by-id.query";
import { GetTodoQueryHandler } from "src/Application/CQRS/Queries/get-todo.query";
import { CreateTodoCommandHandler } from "src/Application/CQRS/Commands/create-todo.command";
import { UpdateTodoCommandHandler } from "src/Application/CQRS/Commands/update-todo.command";
import { DeleteTodoCommandHandler } from "src/Application/CQRS/Commands/delete-todo.command";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ToDo } from "src/Domain/Entities/ToDo";

@Module({
  imports: [
    CqrsModule,
    TypeOrmModule.forFeature([ToDo])
  ],
  controllers: [TodoController],
  providers: [
    TodoService,
    GetTodoByIdQueryHandler,
    GetTodoQueryHandler,
    CreateTodoCommandHandler,
    UpdateTodoCommandHandler,
    DeleteTodoCommandHandler,
    
  ],
})

export class TodoModule{}