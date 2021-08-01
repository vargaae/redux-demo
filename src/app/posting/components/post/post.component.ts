import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { v4 as uuid } from 'uuid';

import { Post } from '../../models/post.model';
import * as PostActions from '../../actions/post.actions';
// import { Todo } from '../../models/todo.model';
// import { AddTodoAction, RemoveTodoAction } from '../../actions/post.actions';



interface AppState {
  post: Post;
  // readonly todolisting: Array<Todo>
  // lastUpdate: Date;
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: Observable<Post>
  // todos: Observable<any[]>;

  text: string; /// form input val
  // todos$: Observable<AppState[]> = this.store.select(state => state.todos);

  // Todo$: Observable<Array<Todo>>;
  // newShoppingItem: Todo = { id: '', name: '' };


  todos = [
    { id: 1, title: 'FirstTodo' },
    { id: 2, title: 'SecondTodo' },
  ]

  constructor(
    private store: Store<AppState>,
    // private store: Store<{ todos: AppState[] }>
    ) {
    this.post = this.store.select('post');
    // this.todos$ = store.select('todos');
    // this.todos$ = store.select('lastUpdate');

  }

  ngOnInit(): void {
    // this.todos$ = this.store.select(store => store.todolisting);
    // this.shoppingItems = this.store.select('shopping');
  }

  editText() {
    this.store.dispatch(new PostActions.EditText(this.text) )
  }

  // addTodo() {
  //   if (!this.newShoppingItem.name) return;
  //   this.newShoppingItem.id = uuid();

  //   this.store.dispatch(new AddItemAction(this.newShoppingItem))
  //   // this.store.dispatch(new AddItemAction({ id: '123', name: 'Dr. Pepper'}))

  //   // setTimeout(() => this.addItem(), 2000);
  //   // this.text = '';
  //   this.newShoppingItem = { id: '', name: '' };

  // }

  // removeItem(id: string) {
  //   // this.newShoppingItem.id = uuid();

  //   // this.store.dispatch(new RemoveTodoAction(id));

  // }

  resetPost() {
    this.store.dispatch(new PostActions.Reset())
  }

  upvote() {
    this.store.dispatch(new PostActions.Upvote())
  }

  downvote() {
    this.store.dispatch(new PostActions.Downvote())
  }
}
