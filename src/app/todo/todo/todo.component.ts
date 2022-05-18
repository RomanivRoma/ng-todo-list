import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoService } from '../services/todo-service.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  editIsVisible$: Observable<boolean>;

  constructor(todoService: TodoService) {
    this.editIsVisible$ = todoService.isEditVisible
  }

  ngOnInit(): void {
  }

}
