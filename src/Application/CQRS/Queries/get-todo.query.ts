import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { TodoService } from "src/Infrastructure/Services/todo.service";

export class GetTodoQuery{}

@QueryHandler(GetTodoQuery)
export class GetTodoQueryHandler implements IQueryHandler<GetTodoQuery>{
    constructor(private readonly todoService: TodoService){}

    async execute(query: GetTodoQuery): Promise<string> {
        return await this.todoService.getTodo()
    }
    
}