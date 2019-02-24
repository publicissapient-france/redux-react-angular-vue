import * as fromRoot from 'App/reducers';

import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromTodos from './todo.reducer';

export interface ReduxState {
  todo: fromTodos.State;
}

export const reducers: ActionReducerMap<ReduxState> = {
  todo: fromTodos.reducer
};

export const FEATURE_NAME = 'redux';

export interface AppState extends fromRoot.AppState {
  [FEATURE_NAME]: ReduxState;
}

export const getReduxState = createFeatureSelector<AppState, ReduxState>(FEATURE_NAME);

export const getTodosState = createSelector(getReduxState, state => state.todo);

export const getTodos           = createSelector(getTodosState, fromTodos._getTodos);
export const getText            = createSelector(getTodosState, fromTodos._getText);
