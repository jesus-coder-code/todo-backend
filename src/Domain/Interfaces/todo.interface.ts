import { TodoDto } from "src/Application/DTOs/todo-dto"
import { ToDo } from "../Entities/ToDo"

export interface ITodoService{
    getTodo(): Promise<any>
    createTodo(data: TodoDto): Promise<any>
    updateTodo(todoId: number, updateData: TodoDto): Promise<any>
    deleteTodo(todoId: number): Promise<any>
    getTodoById(todoId: number): Promise<any>
}