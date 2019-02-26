import {connect} from "react-redux";
import {Action, deleteTodo, toggleTodo} from "../actions";
import {ThunkDispatch} from "redux-thunk";
import {State, Todo as TodoType} from "../../../types";
import DumbTodo from "../components/Todo/Todo";

export default connect(
  (state: State, props: { id: number }) => ({
    ...state.todos[props.id]
  }),
  (dispatch: ThunkDispatch<State, undefined, Action>, props: { id: number }) => ({
    remove: () => dispatch(deleteTodo(props.id)),
    toggleDone: (todo: TodoType) => dispatch(toggleTodo(todo))
  })
)(DumbTodo);
