import * as fromRoot from 'App/reducers';

import { ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';

import * as fromTodos from './todos.reducer';

export interface AppState extends fromRoot.AppState {
  redux: ReduxState;
}

export interface ReduxState {
  todos: fromTodos.State;
}

export const reducers: ActionReducerMap<ReduxState> = {
  todos: fromTodos.reducer
};

export const getReduxState = createFeatureSelector<AppState, ReduxState>('redux');

export const getTodosState = createSelector(getReduxState, state => state.todos);

export const getTodos = createSelector(getTodosState, fromTodos.selectAll);
