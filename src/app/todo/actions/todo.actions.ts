// import { createAction } from '@ngrx/store';
import { Action } from '@ngrx/store';
import { TodoItem } from '../models/todo-item';

// export const addtodo = createAction('[Todo Component] ADD_TODO');
// export const TOGGLE_TODO = createAction('[Todo Component] TOGGLE_TODO');
// // export const getTodos = createAction('[Todo Component] GetTodos');
// export const REMOVE_TODO = createAction('[Todo Component] REMOVE_TODO');
// export const CLEAR_TODOS = createAction('[Todo Component] CLEAR_TODOS');

export enum TodoActionTypes {
  ADD_TODO = '[TODO] Add Todo',
  REMOVE_TODO = '[TODO] Remove Todo',
  // TOGGLE_TODO = '[TODO] Toggle Todo',
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

export type TodoAction
  = AddTodoAction
  | RemoveTodoAction;
  // | ToggleTodoAction;
