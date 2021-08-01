import { Action } from '@ngrx/store';
import { ShoppingItem } from '../models/shopping-item.model';

export enum ShoppingActionTypes {
  ADD_ITEM = '[SHOPPING] Add Item',
  // ADD_ITEM_SUCCESS = '[SHOPPING] Add Item Success',
  // ADD_ITEM_FAILURE = '[SHOPPING] Add Item Failure',
  REMOVE_ITEM = '[SHOPPING] Remove Item'
}

export class AddItemAction implements Action {
  readonly type = ShoppingActionTypes.ADD_ITEM;

  constructor(public payload: ShoppingItem) {}

}

export class RemoveItemAction implements Action {
  readonly type = ShoppingActionTypes.REMOVE_ITEM;

  constructor(public payload: string) { }

}

export type ShoppingAction
  = AddItemAction
  | RemoveItemAction;

// PostApp version:
// export const EDIT_TEXT  = '[Post] Edit';
// export const ADD_TEXT  = '[Post] Add';
// export const UPVOTE     = '[Post] Upvote';
// export const DOWNVOTE   = '[Post] Downvote';
// export const RESET      = '[Post] Reset';


// export class EditText implements Action {
//   readonly type = EDIT_TEXT;

//   /// user a constructor to send a payload with the action
//   constructor(public payload: string) {}
// }

// export class AddText implements Action {
//   readonly type = ADD_TEXT;

//   /// user a constructor to send a payload with the action
//   constructor(public payload: string) {}
// }

// export class Upvote implements Action {
//   readonly type = UPVOTE;
// }

// export class Downvote implements Action {
//   readonly type = DOWNVOTE;
// }

// export class Reset implements Action {
//   readonly type = RESET;
// }

// export type All
//   = Upvote
//   | Downvote
//   | Reset
//   | EditText
//   | AddText;
