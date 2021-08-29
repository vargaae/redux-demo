import { Action, createReducer, on } from '@ngrx/store';
import * as AppActions from './app.actions';


export const appFeatureKey = 'app';

export interface AppState {
  users: any;
  accordionOpen: boolean;
}

export const initialState: AppState = {
  users: null,
  accordionOpen: false,
};


export const appReducer = createReducer(
  initialState,
  on(AppActions.fetchUsersSuccess, (state, action) => ({
    ...state,
    users: action.data,
  })),
  on(AppActions.fetchUsersFailure, (state, action) => ({
    ...state,
    error: action.error,
  })),
  on(AppActions.fetchTodosRequest, (state, action) => ({
    ...state,
  })),
  on(AppActions.fetchTodosSuccess, (state, action) => ({
    ...state,
    users: action.data,
  })),
  on(AppActions.fetchTodosError, (state, action) => ({
    ...state,
    error: action.error,
  })),
  on(AppActions.toggleAccordion, (state) => ({
    ...state,
    accordionOpen: !state.accordionOpen,
  }))
);

export function reducer(state: AppState | undefined, action: Action) {
  return appReducer(state, action);
}
