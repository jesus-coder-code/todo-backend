import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from "@nestjs/swagger";
import { CreateTodoCommad } from "src/Application/CQRS/Commands/create-todo.command";
import { DeleteTodoCommand } from "src/Application/CQRS/Commands/delete-todo.command";
import { UpdateTodoCommand } from "src/Application/CQRS/Commands/update-todo.command";
import { GetTodoByIdQuery } from "src/Application/CQRS/Queries/get-todo-by-id.query";
import { GetTodoQuery } from "src/Application/CQRS/Queries/get-todo.query";
import { TodoDto } from "src/Application/DTOs/todo-dto";

@ApiTags('ToDo')
@Controller('Todo')
export class TodoController {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus
  ) {}

  @ApiOperation({ summary: 'Obtener todos los ToDos' })
  @ApiResponse({ status: 200, description: 'Lista de ToDos obtenida correctamente' })
  @Get()
  async getTodo(): Promise<any> {
    return await this.queryBus.execute(new GetTodoQuery());
  }

  @ApiOperation({ summary: 'Obtener un ToDo por ID' })
  @ApiParam({ name: 'todoId', type: Number, description: 'ID del ToDo' })
  @ApiResponse({ status: 200, description: 'ToDo obtenido correctamente' })
  @ApiResponse({ status: 404, description: 'ToDo no encontrado' })
  @Get('GetTodoById/:todoId')
  async getTodoById(@Param('todoId') todoId: number): Promise<any> {
    return await this.queryBus.execute(new GetTodoByIdQuery(todoId));
  }

  @ApiOperation({ summary: 'Crear un nuevo ToDo' })
  @ApiBody({ type: TodoDto })
  @ApiResponse({ status: 201, description: 'todo created' })
  @ApiResponse({ status: 400, description: 'bad request' })
  @Post()
  async createTodo(@Body() body: TodoDto): Promise<any> {
    return await this.commandBus.execute(new CreateTodoCommad(body));
  }

  @ApiOperation({ summary: 'Actualizar un ToDo' })
  @ApiParam({ name: 'todoId', type: Number, description: 'ID del ToDo a actualizar' })
  @ApiBody({ type: TodoDto })
  @ApiResponse({ status: 200, description: 'todo updated' })
  @ApiResponse({ status: 400, description: 'bad request' })
  @ApiResponse({ status: 404, description: 'todo not found' })
  @Put('UpdateTodo/:todoId')
  async updateTodo(@Param('todoId') todoId: number, @Body() body: TodoDto): Promise<any> {
    return await this.commandBus.execute(new UpdateTodoCommand(todoId, body));
  }

  @ApiOperation({ summary: 'Eliminar un ToDo' })
  @ApiParam({ name: 'todoId', type: Number, description: 'ID del ToDo a eliminar' })
  @ApiResponse({ status: 200, description: 'todo deleted' })
  @ApiResponse({ status: 404, description: 'todo not found' })
  @Delete('DeleteTodo/:todoId')
  async deleteTodo(@Param('todoId') todoId: number): Promise<any> {
    return await this.commandBus.execute(new DeleteTodoCommand(todoId));
  }
}