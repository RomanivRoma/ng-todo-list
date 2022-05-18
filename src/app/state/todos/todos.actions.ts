import { createAction, props } from "@ngrx/store";

export const addTodo = createAction(
    '[Todo Page] Add Todo',
    props<{value: string}>()
)
export const removeTodo = createAction(
    '[Todo Page] Remove Todo',
    props<{id: string}>()
)