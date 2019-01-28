import { Todo, TodoCategory } from 'App/domains/todo.model';
import { filterByCategory, filterByText, isTextFree, pipe } from 'App/domains/todo.operators';

import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createSelector } from '@ngrx/store';

import { ActionsUnion, ActionTypes } from '../actions/todos.actions';

export interface State extends EntityState<Todo> {
  text: string;
  category: TodoCategory;
  filterEnabled: boolean;
}

export const adapter: EntityAdapter<Todo> = createEntityAdapter<Todo>({
  sortComparer: (a, b) => a.id < b.id ? 1 : -1
});

export const initialState: State = adapter.getInitialState({
  text: '',
  category: 'all',
  filterEnabled: false
} as State);

export function reducer(state = initialState, action: ActionsUnion): State {
  switch (action.type) {
    case ActionTypes.LoadSuccess: {
      return adapter.addAll(action.payload, state);
    }
    case ActionTypes.AddSuccess: {
      return adapter.addOne(action.payload, state);
    }
    case ActionTypes.UpdateSuccess: {
      return adapter.upsertOne(action.payload, state);
    }
    case ActionTypes.RemoveSuccess: {
      return adapter.removeOne(action.payload.id, state);
    }
    case ActionTypes.Text: {
      return { ...state, text: action.payload };
    }
    case ActionTypes.Category: {
      return { ...state, category: action.payload };
    }
    case ActionTypes.FilterEnabled: {
      return { ...state, filterEnabled: action.payload };
    }
    default: {
      return state;
    }
  }
}

const { selectAll } = adapter.getSelectors();

export const getTodos = selectAll;

export const getText = (state: State) => state.text;

export const getCategory = (state: State) => state.category;

export const getFilterEnabled = (state: State) => state.filterEnabled;

export const getFilter = createSelector(
  getText,
  getFilterEnabled,
  (text, filterEnabled) => filterEnabled ? text : ''
);

export const getTodosFiltered = createSelector(
  getTodos,
  getCategory,
  getFilter,
  (todos, category, liveFilter) => {
    return pipe<Todo[]>(todos)(
      filterByCategory(category),
      filterByText(liveFilter)
    );
  }
);

export const getIsTextFree = createSelector(
  getTodos,
  getText,
  (todos, text) => isTextFree(todos, text)
);
