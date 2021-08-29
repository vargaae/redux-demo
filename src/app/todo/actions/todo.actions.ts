// import { createAction } from '@ngrx/store';
import { Action, createAction, props } from '@ngrx/store';
import { TodoItem } from '../models/todo-item';

// export const addtodo = createAction(
//   '[Todo Component] ADD_TODO',
//   props<{ payload: string }>());
// export const TOGGLE_TODO = createAction('[Todo Component] TOGGLE_TODO');
// // export const getTodos = createAction('[Todo Component] GetTodos');
// export const REMOVE_TODO = createAction('[Todo Component] REMOVE_TODO');
export const reset = createAction('[Todo Component] CLEAR_TODOS');

export enum TodoActionTypes {
  ADD_TODO = '[TODO] Add Todo',
  REMOVE_TODO = '[TODO] Remove Todo',
  // TOGGLE_TODO = '[TODO] Toggle Todo',
  CLEAR_TODOS = '[TODO] Clear Todos',
}

export class AddTodoAction implements Action {
  readonly type = TodoActionTypes.ADD_TODO

  constructor(public payload: TodoItem) { }
}

export class RemoveTodoAction implements Action {
  readonly type = TodoActionTypes.REMOVE_TODO

  constructor(public payload: string) { }
}

// export class ToggleTodoAction implements Action {
//   readonly type = TodoActionTypes.TOGGLE_TODO

//   constructor(public payload: string) { }
//   // type: string;
//   // readonly type = TOGGLE_TODO;
// }

export class ClearTodosAction implements Action {
  readonly type = TodoActionTypes.CLEAR_TODOS

  constructor(public payload: string) { }
}

export type TodoAction
  = AddTodoAction
  | RemoveTodoAction
  // | ToggleTodoAction;
  | ClearTodosAction;
