import { Todo } from "src/app/todo/model/Todo.interface";

export interface TodoState {
    todos: Todo[];
    error: string | null;
    status: 'pending' | 'loading' | 'error' | 'success';
}