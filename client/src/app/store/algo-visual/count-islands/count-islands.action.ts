import { createActionGroup, props } from '@ngrx/store';

export const CountIslandsAction = createActionGroup({
  source: '[Count Islands] Service',
  events: {
    'Set Rows': props<{rows: number}>(),
    'Set Columns': props<{columns: number}>(),
    'Set Board': props<{board: number[][]}>(),
    'Set Output': props<{output: number | undefined}>()
  }
})
