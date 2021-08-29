import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromApp from './app.reducer';

export const selectAppState = createFeatureSelector<fromApp.AppState>(
  fromApp.appFeatureKey
);

export const selectAppUsers = createSelector(
  selectAppState,
  (state: fromApp.AppState) => (state ? state.users : null)
);

export const selectAppAccordionOpen = createSelector(
  selectAppState,
  (state: fromApp.AppState) => (state ? state.accordionOpen : null)
);