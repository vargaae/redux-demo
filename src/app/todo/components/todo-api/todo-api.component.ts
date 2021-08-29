import { BadInput } from './../../common/bad-input';
import { NotFoundError } from './../../common/not-found-error';
import { AppError } from './../../common/app-error';
import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../data/data.service';
import { TodosService } from '../../data/todos.service';
import { TodosApiStoreService } from '../../data/todos-api-store.service';

@Component({
  selector: 'todo-api',
  templateUrl: './todo-api.component.html',
  styleUrls: ['./todo-api.component.css']
})
export class TodoApiComponent implements OnInit {
  todos : any ;

  constructor(
    private todoService: TodosApiStoreService,
    private service: TodosService
    ) { }

  ngOnInit(): void {
    // this.todoService.loadTodos()

    this.service.getAll()
    .subscribe(todos => this.todos = todos);

    // this.todosService.getAllTodos()
    // .subscribe(todos => {
    //   // LOADING ICON: -> store.isFetching = true
    //   // this.store.dispatch({ type: 'FETCH_TODOS_REQUEST' })

    //   // Non-Redux way
    //   this.todos = todos
    //   // Redux way - here from the component or we can dispatch in the service:
    //   // this.store.dispatch({ type: 'FETCH_TODOS_SUCCESS', todos: todos 
    //   // }, err => {
    //   //   this.store.dispatch({ type: 'FETCH_TODOS_ERROR' })

    //   // this.store.dispatch({ type: 'FETCH_TODOS_SUCCESS', todos: todos.json() })
    // })
  }

  createTodo(input: HTMLInputElement) {
    let todo : any = { title: input.value };
    this.todos.splice(0, 0, todo);

    input.value = '';

    this.service.create(todo)
    .subscribe(
      newTodo => { todo.id = newTodo;
    },
    (error: AppError) => {
        this.todos.splice(0, 1);

        if (error instanceof BadInput) {
          // this.form.setErrors(error.originalError);
        }
        else throw error;

    });
  }

  addTodo(input: HTMLInputElement) {
    if (!input.value) return;
    // if (!this.newTodoItem.title) return;
    // this.newTodoItem.id = uuid();

    // // Redux way this.store.dispatch({ type: ADD_TODO, title: input.value });
    // this.store.dispatch(new AddTodoAction(this.newTodoItem));
    // this.newTodoItem = {
    //   id: '',
    //   title: '',
    //   lastUpdate: new Date().toLocaleString(),
    // };
    // // non-Redux way - OPTIMISTIC UPDATE
    let todo : any = { title: input.value };
  
    this.todos.splice(0, 0, todo);
    // this.todos.push(todo); - Update the todos array
    // // Redux way: -> dispatch the action 
    // - but the Optimistic Update doesn't work, 
    // because newTodo's ID is generated on the Server, 
    // not here in the Client(var newTodo = { id: state.todos.length + 1, })
    //   // this.store.dispatch({ type: 'ADD_TODO', todo: todo })
    // SOLUTION 1 -> Pessimistic Update:
    // this.service.addTodo(todo); - Call the Server
    this.service.create(todo)
    .subscribe(
      newTodo => { 
    // this.store.dispatch({ type: 'ADD_TODO', todo: todo })
    
        todo.id = newTodo;
    });

    input.value = '';

  }
}
