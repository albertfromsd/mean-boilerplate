import { createActionGroup, props } from '@ngrx/store';
import { User } from '../../shared/interfaces/User.interface';

export const UserAction = createActionGroup({
  source: '[App] User Service',
  events: {
    'Set All Users': props<{ allUsers: User[] }>(),
  }
})
