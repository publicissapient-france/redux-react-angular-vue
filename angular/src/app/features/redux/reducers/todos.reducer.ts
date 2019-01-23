import { Todo } from 'App/domains/todo.model';

import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

export interface State extends EntityState<Todo> {

}

export const adapter: EntityAdapter<Todo> = createEntityAdapter<Todo>();

export const initialState: State = adapter.getInitialState({

});

export const reducer = (state = initialState, action): State => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};
