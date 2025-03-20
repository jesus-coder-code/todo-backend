import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { TodoDto } from "src/Application/DTOs/todo-dto";
import { ToDo } from "src/Domain/Entities/ToDo";
import { TodoService } from "src/Infrastructure/Services/todo.service";

export class CreateTodoCommad{
    constructor(
        public readonly payload: TodoDto
    ){}
}

@CommandHandler(CreateTodoCommad)
export class CreateTodoCommandHandler implements ICommandHandler<CreateTodoCommad>{
    constructor(private readonly todoService: TodoService){}
    async execute(command: CreateTodoCommad): Promise<any> {
        return await this.todoService.createTodo(command.payload)
    }
}