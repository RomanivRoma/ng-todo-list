import { Component, OnInit } from '@angular/core';
import { map, Observable, Subject, takeUntil } from 'rxjs';
import { Todo } from '../model/Todo.interface';
import { TodoService } from '../services/todo-service.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoList: Todo[];
  destroy$: Subject<boolean> = new Subject();

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.retrieveTodos()
  }
  ngOnDestroy(): void {
    this.destroy$.next(true)
    this.destroy$.complete()
  }

  retrieveTodos() {
    return this.todoService.getTodos()
    .pipe(
      map(changes =>
        changes.map(c =>
          ({ ...c.payload.doc.data(), id: c.payload.doc.id })
        )
      ),
      takeUntil(this.destroy$)
    ).subscribe((data: Todo[]) => {
      this.todoList = data;
    });
  }

  handleEdit(todo: Todo): void {
    this.todoService.isEditVisible.next(true)
    this.todoService.setSelectedTodo(todo)
  }
  handleDelete(id: string): void {
    this.todoService.deleteTodo(id)
  }
  handleChecked(todo: Todo): void {
    this.todoService.updateTodo(todo)
  }
  identify(index: number, item: Todo): string {
    return item.id; 
  }
}
