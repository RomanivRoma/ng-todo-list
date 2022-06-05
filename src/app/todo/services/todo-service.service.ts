import { Injectable } from '@angular/core';
import { Todo } from '../model/Todo.interface';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private dbPath: string = '/Todo';
  isEditVisible: Subject<boolean> = new Subject();
  selectedTodo: Subject<Todo | null> = new Subject();
  todoRef: AngularFirestoreCollection<Todo>;
  // todos
  constructor(private afs: AngularFirestore) {
    this.todoRef = afs.collection<Todo>(this.dbPath)
  }

  // add todo
  addTodo(todo: Todo){
    todo.id = this.afs.createId()
    return this.todoRef.add(todo)
  }

  // get todos
  getTodos(){
    return this.todoRef.snapshotChanges()
  }

  // update todo
  updateTodo(todo: Todo){
    return this.todoRef.doc(todo.id).update(todo)
  }

  // delete todos
  deleteTodo(id: string): void {
    this.todoRef.doc(id).delete()
  }

  setSelectedTodo(todo: Todo | null): void {
    this.selectedTodo.next(todo)
  }
  getSelectedTodo(): Subject {
    return this.selectedTodo
  }

}
