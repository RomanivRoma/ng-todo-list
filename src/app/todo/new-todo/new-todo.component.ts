import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/Todo.interface';
import { TodoService } from '../services/todo-service.service';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css']
})
export class NewTodoComponent implements OnInit {

  value?: string;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  resetInput(){
    this.value = ''
  }

  handleAdd(){
    const todo: Todo = {
      id: '',
      value: this.value || '',
      done: false
    }
    this.todoService.addTodo(todo)
    this.resetInput()
  }
}
