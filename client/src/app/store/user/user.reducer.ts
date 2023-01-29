import { createReducer, on } from '@ngrx/store';
import { UserAction } from './user.action';

import { User } from '../../shared/interfaces/User.interface';
export interface UserState {
  allUsers: User[]
}

const initialState: UserState = {
  allUsers: []
}

export const userReducer = createReducer(initialState,
  on( UserAction.setAllUsers, (state, action) => ({
    ...state, allUsers: action.allUsers
  }) )
)
