// src/todo/todo.service.ts

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo, TodoDocument } from './schemas/todo.schema';
import { CreateTodoDto, UpdateTodoDto } from './dto/todo.dto';

@Injectable()
export class TodoService {
  constructor(
    @InjectModel(Todo.name) private readonly todoModel: Model<TodoDocument>,
  ) {}

  async findAll() {
    return this.todoModel.find().exec();
  }

  async findOne(id: string) {
    return this.todoModel.findById(id).exec();
  }

  async create(createTodoDto: CreateTodoDto) {
    const createdTodo = new this.todoModel(createTodoDto);
    return createdTodo.save();
  }

  async update(id: string, updateTodoDto: UpdateTodoDto) {
    return this.todoModel.findByIdAndUpdate(id, updateTodoDto, { new: true });
  }

  async remove(id: string) {
    return this.todoModel.findByIdAndDelete(id);
  }
}
