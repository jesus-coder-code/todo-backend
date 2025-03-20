import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { TodoService } from "src/Infrastructure/Services/todo.service";

export class GetTodoByIdQuery{
    constructor(public readonly todoId: number){}
}

@QueryHandler(GetTodoByIdQuery)
export class GetTodoByIdQueryHandler implements IQueryHandler<GetTodoByIdQuery>{
    constructor(private readonly todoService: TodoService){}

    async execute(query: GetTodoByIdQuery): Promise<string> {
        return await this.todoService.getTodoById(query.todoId)
    }
    
}