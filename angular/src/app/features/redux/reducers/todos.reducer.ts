import { Todo, TodoCategory } from 'App/domains/todo.model';

import { createEntityAdapter, EntityAdapter, EntityState, Update } from '@ngrx/entity';
import { createSelector } from '@ngrx/store';

import { ActionsUnion, ActionTypes } from '../actions/todos.actions';

export interface State extends EntityState<Todo> {
  category: TodoCategory;
  filter: string;
  filterEnabled: boolean;
}

export const adapter: EntityAdapter<Todo> = createEntityAdapter<Todo>({
  sortComparer: (a, b) => a.id < b.id ? 1 : -1
});

export const initialState: State = adapter.getInitialState({
  category: 'active',
  filter: '',
  filterEnabled: false
} as State);

export const reducer = (state = initialState, action: ActionsUnion): State => {
  switch (action.type) {
    case ActionTypes.LoadSuccess:
      return adapter.addAll(action.payload, state);

    case ActionTypes.AddSuccess:
      return adapter.addOne(action.payload, state);

    case ActionTypes.UpdateSuccess:
      return adapter.upsertOne(action.payload, state);

    case ActionTypes.RemoveSuccess:
      return adapter.removeOne(action.payload.id, state);

    case ActionTypes.Category:
      return { ...state, category: action.payload };

    case ActionTypes.Filter:
      return { ...state, filter: action.payload };

    case ActionTypes.SwitchFilterEnabled:
      return { ...state, filterEnabled: !state.filterEnabled };

    default: {
      return state;
    }
  }
};

export const { selectAll } = adapter.getSelectors();

export const getCategory = (state: State) => state.category;

export const getFilter = (state: State) => state.filter;

export const getFilterEnabled = (state: State) => state.filterEnabled;

export const getLiveFilter = createSelector(
  getFilter,
  getFilterEnabled,
  (filter, filterEnabled) => filterEnabled ? filter : ''
);
