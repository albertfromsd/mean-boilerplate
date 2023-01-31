import { createReducer, on } from '@ngrx/store';
import { AppAction } from './app.action';

export interface AppState {
  currentAppTitle: string;
  message: string;
};

const initialState: AppState = {
  currentAppTitle: 'Home',
  message: ''
};

export const appReducer = createReducer(initialState,
  on( AppAction.setCurrentAppTitle, (state, action) => ({
    ...state, currentAppTitle: action.title
  }) ),

  on( AppAction.setStatusMessage, (state, action) => ({
    ...state, message: action.message
  }))
);
