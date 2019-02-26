import {connect} from "react-redux";
import {Action, deleteTodo, toggleTodo} from "../actions";
import {ThunkDispatch} from "redux-thunk";
import {State, Todo as TodoType} from "../../../types";
import DumbTodo from "../components/Todo/Todo";

const mapStateToPros = (state: State, props: { id: number }) => ({
  ...state.todos[props.id]
});

const mapDispatchToProps = (dispatch: ThunkDispatch<State, undefined, Action>, props: { id: number }) => ({
  remove: () => dispatch(deleteTodo(props.id)),
  toggleDone: (todo: TodoType) => dispatch(toggleTodo(todo))
});

export default connect(mapStateToPros, mapDispatchToProps)(DumbTodo);
