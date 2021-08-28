import { Post } from './../models/post.model';
import { Action } from '@ngrx/store';

export const EDIT_TEXT  = '[Post] Edit';
// export const ADD_TODO  = '[Post] Add';
// export const REMOVE_TODO  = '[Post] Remove';
export const UPVOTE     = '[Post] Upvote';
export const DOWNVOTE   = '[Post] Downvote';
export const RESET      = '[Post] Reset';


export const GET_POST = '[Post] GET_POST';
export const GET_POST_SUCCESS = '[Post] GET_POST_SUCCESS';
export const VOTES_UPDATE = '[Post] VOTES_UPDATE';
export const VOTES_UPDATE_SUCCESS = '[Post] VOTES_UPDATE_SUCCESS';
export const VOTES_UPDATE_FAIL = '[Post] VOTES_UPDATE_FAIL';

export class GetPost implements Action {
  readonly type = GET_POST;

  constructor(public payload: string) {}
}

export class GetPostSuccess implements Action {
  readonly type = GET_POST_SUCCESS;

  constructor(public payload: Post) {}
}

export class VoteUpdateAction implements Action {
  readonly type = VOTES_UPDATE;

  constructor(public payload: any) {}
}

export class VoteUpdateSuccessAction implements Action {
  readonly type = VOTES_UPDATE_SUCCESS;

  constructor(public payload: Post) {}
}

export class VoteUpdateFailAction implements Action {
  readonly type = VOTES_UPDATE_FAIL;

  constructor(public payload?: any) {}
}

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
  | GetPost
  | GetPostSuccess
  | VoteUpdateAction
  | VoteUpdateSuccessAction
  | VoteUpdateFailAction;
