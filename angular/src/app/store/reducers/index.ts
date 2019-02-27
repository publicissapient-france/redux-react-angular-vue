import { ActionReducerMap, createSelector } from '@ngrx/store';

import * as fromTodos from './todo.reducer';

export interface AppState {
  todo: fromTodos.State;
}

export const reducers: ActionReducerMap<AppState> = {
  todo: fromTodos.reducer
};

export const getTodosState = (state: AppState) => state.todo;

export const getTodos = createSelector(getTodosState, fromTodos._getTodos);
export const getText  = createSelector(getTodosState, fromTodos._getText);
