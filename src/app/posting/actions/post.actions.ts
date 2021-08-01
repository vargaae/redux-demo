import { Action } from '@ngrx/store';

export const EDIT_TEXT  = '[Post] Edit';
// export const ADD_TODO  = '[Post] Add';
// export const REMOVE_TODO  = '[Post] Remove';
export const UPVOTE     = '[Post] Upvote';
export const DOWNVOTE   = '[Post] Downvote';
export const RESET      = '[Post] Reset';


export class EditText implements Action {
  readonly type = EDIT_TEXT;

  /// user a constructor to send a payload with the action
  constructor(public payload: string) {}
}

// export class AddTodo implements Action {
//   readonly type = ADD_TODO;

//   /// user a constructor to send a payload with the action
//   constructor(public payload: string) {}
// }

// export class RemoveTodo implements Action {
//   readonly type = REMOVE_TODO;

//   /// user a constructor to send a payload with the action
//   constructor(public payload: string) {}
// }

export class Upvote implements Action {
  readonly type = UPVOTE;
}

export class Downvote implements Action {
  readonly type = DOWNVOTE;
}

export class Reset implements Action {
  readonly type = RESET;
}

export type All
  = Upvote
  | Downvote
  | Reset
  | EditText
  // | AddTodo;
  // | RemoveTodo;
