import {
  ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer
} from '@ngrx/store';

import * as fromTodos from './todos.reducer';

export interface State {
  todos: fromTodos.State;
}

export const reducers: ActionReducerMap<State> = {
  todos: fromTodos.reducer
};
