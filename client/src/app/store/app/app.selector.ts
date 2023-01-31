import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './app.reducer';

export const selectAppState = createFeatureSelector<AppState>('app');

export const selectAppTitle = createSelector(
  selectAppState,
  (appState: AppState) => appState.currentAppTitle
);

export const selectAppMessage = createSelector(
  selectAppState,
  (appState: AppState) => appState.message
);
