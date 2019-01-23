import { Todo } from 'App/domains/todo.model';

import { createEntityAdapter, EntityAdapter, EntityState, Update } from '@ngrx/entity';

import { ActionsUnion, ActionTypes } from '../actions/todos.actions';

export interface State extends EntityState<Todo> {

}

export const adapter: EntityAdapter<Todo> = createEntityAdapter<Todo>({
  sortComparer: (a, b) => a.id < b.id ? 1 : -1
});

export const initialState: State = adapter.getInitialState({

});

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

    default: {
      return state;
    }
  }
};

export const { selectAll } = adapter.getSelectors();
