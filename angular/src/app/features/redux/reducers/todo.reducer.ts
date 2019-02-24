import { Todo } from 'App/domains';

import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { ActionsUnion, ActionTypes } from '../actions/todo.actions';

export interface State extends EntityState<Todo> {
  text: string;
}

export const adapter: EntityAdapter<Todo> = createEntityAdapter<Todo>({
  sortComparer: (a, b) => a.id < b.id ? 1 : -1
});

export const initialState: State = adapter.getInitialState({
  text: ''
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
    default: {
      return state;
    }
  }
}

const { selectAll } = adapter.getSelectors();

export const _getTodos = selectAll;

export const _getText = (state: State) => state.text;
