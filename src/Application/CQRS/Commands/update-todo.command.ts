import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { TodoDto } from "src/Application/DTOs/todo-dto";
import { ToDo } from "src/Domain/Entities/ToDo";
import { TodoService } from "src/Infrastructure/Services/todo.service";

export class UpdateTodoCommand{
    constructor(
        public readonly todoId: number,
        public readonly updateData: TodoDto
    ){}
}

@CommandHandler(UpdateTodoCommand)
export class UpdateTodoCommandHandler implements ICommandHandler<UpdateTodoCommand>{
    constructor(private readonly todoService: TodoService){}
    async execute(command: UpdateTodoCommand): Promise<any> {
        return await this.todoService.updateTodo(command.todoId, command.updateData)
    }
}