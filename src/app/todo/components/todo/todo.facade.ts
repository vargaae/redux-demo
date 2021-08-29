import { Injectable } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import * as fromApp from 'src/app/store/app.reducer';
import {
  selectAppUsers,
  selectAppAccordionOpen,
} from 'src/app/store/app.selectors';

@Injectable()
export class TodoFacade {
  constructor(private store: Store<fromApp.AppState>) {}

  users$ = this.store.select(selectAppUsers);
  todosApi$ = this.store.select(selectAppUsers);
  accordionOpen$ = this.store.select(selectAppAccordionOpen);

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
