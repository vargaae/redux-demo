import { Component, EventEmitter, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TodoAppState } from '../../models/todo-app-state.model';
import { v4 as uuid } from 'uuid';
import { TodoItem } from '../../models/todo-item';
import { AddTodoAction, RemoveTodoAction } from '../../actions/todo.actions';

// import { TodoService } from '../../services/todo.service';
// import * as todoActions from '../../actions/todo.actions';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  // Read the comment in TodoService
  // non Redux way to be toggled
  todoToggled = new EventEmitter();
  // REDUX WAY
  newTodoItem: TodoItem = {
    id: '',
    title: '',
    lastUpdate: new Date().toLocaleString(),
  };
  // todos$: Observable<string>;
  todos$: Observable<Array<TodoItem>>;

  // title: string; /// form input val

  constructor(private store: Store<TodoAppState>) {
    // this.todos$ = store.select('todos');
  }

  addTodo() {
    if (!this.newTodoItem.title) return;
    this.newTodoItem.id = uuid();

    this.store.dispatch(new AddTodoAction(this.newTodoItem));
    this.newTodoItem = {
      id: '',
      title: '',
      lastUpdate: new Date().toLocaleString(),
    };
  }

  removeTodo(id: string) {
    this.store.dispatch(new RemoveTodoAction(id));
  }

  // addTodo(input) {
  //   if (!input.value) return;

  //   this.ngRedux.dispatch({ type: ADD_TODO, title: input.value });

  //   input.value = '';
  // }
  // addTodo(input) {
  // if (!input.value) return;

  // this.store.dispatch(todoActions.ADD_TODO());
  // }

  ngOnInit() {
    this.todos$ = this.store.select((store) => store.todolisting);
  }


  toggleTodo(id: any) {
    this.store.dispatch(new RemoveTodoAction(id));
    // non Redux way
    // id.isCompleted = !id.isCompleted;
    // this.todoToggled.emit(id);
  }

  // toggleTodo(todo) {
  //   this.ngRedux.dispatch({ type: TOGGLE_TODO, id: todo.id });
  // }

  // removeTodo(todo) {
  //   this.ngRedux.dispatch({ type: REMOVE_TODO, id: todo.id });
  // }
}
