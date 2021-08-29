import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { TodoAppState } from '../models/todo-app-state.model';

@Injectable({
  providedIn: 'root',
})
// export class TodosService {
  export class TodosApiStoreService {
    private readonly url = 'http://jsonplaceholder.typicode.com/todos';

  constructor(
    private store: Store<TodoAppState>,
    private http: HttpClient
    ) { }

  loadTodos() {
    this.store.dispatch({ type: '[App Home] Fetch Todos Request' })

    this.http.get('http://jsonplaceholder.typicode.com/todos')
    // return this.httpClient.get(this.url)
    .subscribe(todos => {
      this.store.dispatch({ type: '[Todos API] Fetch Todos Success' })
    }, err => {
          this.store.dispatch({ type: '[Todos API] Fetch Todos Error' }) 
    });
  }

  addTodo(resource: any) {
    return this.http.post(this.url, JSON.stringify(resource))
      // .pipe(
      //       map(response => response),
      //       catchError(this.handleError));
  }

  fetchUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }
}
