import { ActionsUnion } from '../actions/todo.actions';

export interface State { } // tslint:disable-line:no-empty-interface

export const initialState: State = {};

export function reducer(state = initialState, action: ActionsUnion): State {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
