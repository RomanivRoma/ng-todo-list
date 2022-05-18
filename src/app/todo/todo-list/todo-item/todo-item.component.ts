import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Todo } from '../../model/Todo.interface';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input('todo') todo: Todo;
  @Output() edit: EventEmitter<Todo> = new EventEmitter();
  @Output() delete: EventEmitter<string> = new EventEmitter();
  @Output() checked: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleDelete(id: string){
    this.delete.emit(id)
  }
  handleEdit(todo: Todo){
    this.edit.emit(todo)
  }
  handleChecked(todo: Todo){
    this.checked.emit({...todo, done: !todo.done})
  }
}
