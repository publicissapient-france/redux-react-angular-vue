import { Todo } from 'App/domains';

import { ActionsUnion, ActionTypes } from '../actions/todo.actions';

export interface State {
  list: Todo[];
  text: string;
}

export const initialState: State = {
  list: [],
  text: ''
};

export function reducer(state = initialState, action: ActionsUnion): State {
  switch (action.type) {
    case ActionTypes.LoadSuccess: {
      return { ...state, list: action.payload };
    }

    case ActionTypes.AddSuccess: {
      return { ...state, list: [action.payload, ...state.list] };
    }

    case ActionTypes.UpdateSuccess: {
      const index = state.list.findIndex(todo => todo.id === action.payload.id);
      const list = [...state.list];
      list.splice(index, 1, action.payload);
      return { ...state, list };
    }

    case ActionTypes.Text: {
      return { ...state, text: action.payload };
    }

    default: {
      return state;
    }
  }
}

export const _getTodos = (state: State) => state.list;

export const _getText = (state: State) => state.text;
