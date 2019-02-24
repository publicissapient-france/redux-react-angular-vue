import {FilterStatus, State} from "../../../types";
import {Action, SET_VISIBILITY_FILTER} from "../actions";
import {Reducer} from "redux";

export const initialState = FilterStatus.ALL;

const filterReducer: Reducer<State["filter"]> = (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default filterReducer;