import { createActionGroup, props } from '@ngrx/store';

export const AppAction = createActionGroup({
  source: '[App] Root App service',
  events: {
    'Set Current App Title': props<{title: string}>(),
    'Set Status Message': props<{message: string}>(),
  }
})
