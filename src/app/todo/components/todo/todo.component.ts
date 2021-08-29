import { Component, OnInit } from '@angular/core';
import { TodoFacade } from './todo.facade';
import {
  toggleAccordion,
  fetchUsers,
} from 'src/app/store/app.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoFacade],
})
export class TodoComponent implements OnInit {
  constructor(public facade: TodoFacade) {}

  ngOnInit(): void {}

  toggleAccordion() {
    this.facade.dispatch(toggleAccordion());
  }

  fetchTodos() {
    this.facade.dispatch(fetchUsers());
  }
}
