import { createAction, props } from '@ngrx/store';

export const fetchUsers = createAction('[App Home] Fetch Users');

export const fetchUsersSuccess = createAction(
  '[Users API] Fetch Users Success',
  props<{ data: any }>()
);

export const fetchUsersFailure = createAction(
  '[Users API] Fetch Users Failure',
  props<{ error: any }>()
);

export const fetchTodosRequest = createAction('[App Home] Fetch Todos Request');

export const fetchTodosSuccess = createAction(
  '[Todos API] Fetch Todos Success',
  props<{ data: any }>()
);

export const fetchTodosError = createAction(
  '[Todos API] Fetch Todos Error',
  props<{ error: any }>()
);

export const toggleAccordion = createAction('[App Home] Toggle Accordion');
