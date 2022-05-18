import { createReducer } from "@ngrx/store";
import { TodoState } from "./todos.model";

const initialState: TodoState = {
    todos: [],
    error: null,
    status: 'pending',
  };

export const todoReducer = createReducer(

)