import { Component, OnInit } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Todo } from '../model/Todo.interface';
import { TodoService } from '../services/todo-service.service';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {
  
  selectedTodo: Todo | null;
  constructor(private todoService: TodoService) { }
  value: string;
  destroy$: Subject<boolean> = new Subject();

  ngOnInit(): void {
    this.todoService.getSelectedTodo()
    .pipe(
      takeUntil(this.destroy$)
    )
    .subscribe(val =>{
      this.selectedTodo = val
      this.value = val?.value || ''
    })

  }
  ngOnDestroy(): void {
    this.destroy$.next(true)
    this.destroy$.complete()
  }

  handleCancel(): void {
    this.todoService.setSelectedTodo(null)
    this.todoService.isEditVisible.next(false)
  }
  handleSave(): void {
    if(!this.selectedTodo) return
    const todo = {
      id: this.selectedTodo.id,
      value: this.value,
      done: this.selectedTodo.done
    }
    this.todoService.updateTodo(todo)
    this.todoService.isEditVisible.next(false)
    this.todoService.setSelectedTodo(null)
  }
}
