import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { TodoService } from "src/Infrastructure/Services/todo.service";

export class DeleteTodoCommand{
    constructor(public readonly todoId: number){}
}

@CommandHandler(DeleteTodoCommand)
export class DeleteTodoCommandHandler implements ICommandHandler<DeleteTodoCommand>{
    constructor(private readonly todoService: TodoService){}
    async execute(command: DeleteTodoCommand): Promise<any> {
        return await this.todoService.deleteTodo(command.todoId)
    }
}