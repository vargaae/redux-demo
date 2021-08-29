import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import {
  catchError,
  filter,
  map,
  switchMap,
  tap,
  withLatestFrom,
} from 'rxjs/operators';
import { TodosApiStoreService } from '../todo/data/todos-api-store.service';
import * as AppActions from './app.actions';
import { AppState } from './app.reducer';
import { selectAppUsers } from './app.selectors';

@Injectable()
export class AppEffects {
  // Fetch Users/Todos from API
  onFetchUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AppActions.fetchUsers),
      withLatestFrom(this.store.select(selectAppUsers)),
      filter(([action, users]) => users === null),
      switchMap(() =>
        this.todosService.fetchUsers().pipe(
          map((data) => AppActions.fetchUsersSuccess({ data })),
          catchError((error) => of(AppActions.fetchUsersFailure({ error })))
        )
      )
    );
  });

  onFetchTodos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AppActions.fetchUsers),
      withLatestFrom(this.store.select(selectAppUsers)),
      filter(([action, users]) => users === null),
      switchMap(() =>
        this.todosService.fetchUsers().pipe(
          map((data) => AppActions.fetchUsersSuccess({ data })),
          catchError((error) => of(AppActions.fetchUsersFailure({ error })))
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private todosService: TodosApiStoreService,
    private store: Store<AppState>
  ) {}
}
