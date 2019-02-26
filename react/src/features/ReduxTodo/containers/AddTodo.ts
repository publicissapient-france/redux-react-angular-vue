import {connect} from "react-redux";
import {ThunkDispatch} from "redux-thunk";
import {State} from "../../../types";
import {Action, createTodo} from "../actions";
import DumbAddTodo from "../components/AddTodo/AddTodo";

export default connect(
  null,
  (dispatch: ThunkDispatch<State, undefined, Action>) => ({
    add: (text: string) => dispatch(createTodo(text))
  })
)(DumbAddTodo);