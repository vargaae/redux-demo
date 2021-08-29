import { Component, EventEmitter, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { TodoAppState } from '../../models/todo-app-state.model';
import { TodoItem } from '../../models/todo-item';
import { reset } from '../../actions/todo.actions';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.css'],
})
export class TodoDashboardComponent implements OnInit {
  todos$: Observable<Array<TodoItem>>;
  lastUpdate$: TodoItem;
  // todosCleared = new EventEmitter();
  // todos: number;
  // lastStudent$ = this.todos$.valueChanges().mergeAll().takeLast(1);

  // Observable - Array wrap up practices:
  items: String[] = ["tom", "jeff", "sam"];
  lastItem = this.items[this.items.length-1];
  todos = [{id: 1}];

  constructor(private store: Store<TodoAppState>) {
    // this.todos$ = store.select('todos');
  }

  ngOnInit() {
    this.todos$ = this.store.select((store) => store.todolisting);
    // this.lastUpdate$ = this.store.select('lastUpdate');
    this.todos$.subscribe(
      lastUpdate => this.lastUpdate$ = lastUpdate[lastUpdate.length-1]);
      console.log(this.lastUpdate$)
  }

  // clearTodos() {
  //   this.ngRedux.dispatch({ type: CLEAR_TODOS });
  // }
  clearTodos() {
    this.store.dispatch(reset());
    // this.store.dispatch({ type: CLEAR_TODOS });

    // console.log(this.todos)
    // this.todos = [];
    // this.todosCleared.emit();
    // console.log(this.todos)
    // this.service.clearTodos();
  }

  // Read the comment in TodoService
  // constructor(private service: TodoService) {
  //   this.todos = service.getTodos().length;

  //   service.todoAdded.subscribe(() => {
  //     this.todos++;
  //     this.lastUpdate = new Date();
  //   });

  //   service.todoRemoved.subscribe(() => {
  //     this.todos--;
  //     this.lastUpdate = new Date();
  //   });

  //   service.todoToggled.subscribe(() => {
  //     this.lastUpdate = new Date();
  //   });

  //   service.todosCleared.subscribe(() => {
  //     this.todos = 0;
  //     this.lastUpdate = new Date();
  //   });
  // }
}
