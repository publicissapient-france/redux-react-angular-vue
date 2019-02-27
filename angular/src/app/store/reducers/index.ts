import { ActionReducerMap } from '@ngrx/store';

import * as fromTodos from './todo.reducer';

export interface AppState {
  todo: fromTodos.State;
}

export const reducers: ActionReducerMap<AppState> = {
  todo: fromTodos.reducer
};

export const getTodosState = (state: AppState) => state.todo;
