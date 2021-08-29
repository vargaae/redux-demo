import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { TodoAppState } from '../models/todo-app-state.model';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
// export class TodosService {
  export class TodosService extends DataService {

  constructor(http: HttpClient) {
    super('http://jsonplaceholder.typicode.com/todos', http);
  }
}
