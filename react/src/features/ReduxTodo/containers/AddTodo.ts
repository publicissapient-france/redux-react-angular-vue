import {connect} from "react-redux";
import {ThunkDispatch} from "redux-thunk";
import {State} from "../../../types";
import {Action, createTodo} from "../actions";
import DumbAddTodo from "../components/AddTodo/AddTodo";

const mapDispatchToProps = ((dispatch: ThunkDispatch<State, undefined, Action>) => ({
  add: (text: string) => dispatch(createTodo(text))
}));

export default connect(null, mapDispatchToProps)(DumbAddTodo);