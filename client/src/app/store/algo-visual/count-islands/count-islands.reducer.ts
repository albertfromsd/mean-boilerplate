import { createReducer, on } from '@ngrx/store';
import { CountIslandsAction } from './count-islands.action';

export interface CountIslandsState {
  board: number[][];
  rows: number;
  columns: number;
  output: number | undefined;
}

const INITIAL_STATE: CountIslandsState = {
  board: [],
  rows: 0,
  columns: 0,
  output: undefined
}

export const countIslandsReducer = createReducer(INITIAL_STATE,
  on( CountIslandsAction.setRows, (state, {rows}) => ({
    ...state, rows
  }) ),

  on( CountIslandsAction.setColumns, (state, {columns}) => ({
    ...state, columns
  }) ),

  on( CountIslandsAction.setBoard, (state, {board}) => ({
    ...state, board: board
  }) ),

  on( CountIslandsAction.setOutput, (state, {output}) => ({
    ...state, output
  }) )
);
