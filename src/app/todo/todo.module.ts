import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from './todo-list/todo-item/todo-item.component';
import { NewTodoComponent } from './new-todo/new-todo.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { MatIconModule } from '@angular/material/icon';
import { TodoComponent } from './todo/todo.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { ReactiveComponentModule } from '@ngrx/component';




@NgModule({
  declarations: [
    TodoItemComponent,
    NewTodoComponent,
    EditTodoComponent,
    TodoListComponent,
    TodoComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveComponentModule
  ],
  exports: [ TodoComponent ]
})
export class TodoModule { }
