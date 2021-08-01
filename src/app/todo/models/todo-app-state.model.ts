import { TodoItem } from './todo-item';

export interface TodoAppState {
  readonly todolisting: Array<TodoItem>
  // lastUpdate: Date;

};
