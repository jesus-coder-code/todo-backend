import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TodoDto } from "src/Application/DTOs/todo-dto";
import { ToDo } from "src/Domain/Entities/ToDo";
import { ITodoService } from "src/Domain/Interfaces/todo.interface";
import { Repository } from "typeorm";

@Injectable()
export class TodoService implements ITodoService{
    constructor(
        @InjectRepository(ToDo)
        private readonly todoRepository: Repository<ToDo>
    ){}

    async getTodo(): Promise<any> {
        var records = await this.todoRepository.find()
        return {message: 'success', data: records}
    }

    async createTodo(data: TodoDto): Promise<any> {
        const create = this.todoRepository.create(data)
        await this.todoRepository.save(create)
        return {message:'todo created'}
    }

    async updateTodo(todoId: number, updateData: TodoDto): Promise<any> {
        await this.todoRepository.update(todoId, updateData)
        return {message: 'todo updated'}
    }

    async deleteTodo(todoId: number): Promise<any> {
        await this.todoRepository.delete(todoId)
        return {message: 'todo deleted'}
    }

    async getTodoById(todoId: number): Promise<any> {
        const record = await this.todoRepository.findOne({where:{id: todoId}})
        return {message: 'success', data: record}
    }
    
}