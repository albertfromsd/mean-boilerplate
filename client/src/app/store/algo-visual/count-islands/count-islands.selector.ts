import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CountIslandsState } from './count-islands.reducer';

export const selectCountIslandsState = createFeatureSelector<CountIslandsState>('countIslands');

export const selectCountIslandsBoard = createSelector(
  selectCountIslandsState,
  (countIslandsState: CountIslandsState) => countIslandsState.board
);

export const selectCountIslandsOutput = createSelector(
  selectCountIslandsState,
  (countIslandsState: CountIslandsState) => countIslandsState.output
);


