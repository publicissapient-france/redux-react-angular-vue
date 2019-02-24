import {connect} from "react-redux";
import {Action, createTodo, deleteTodo} from "../actions";
import {ThunkDispatch} from "redux-thunk";
import {State} from "../../../types";
import DumbAddTodo from "../components/AddTodo";
import DumbRemainingCount from "../components/RemainingCount";
import DumbTodo from "../components/Todo";
import DumbTodoList from "../components/TodoList";


export const AddTodo = connect(
  null,
  (dispatch: ThunkDispatch<State, undefined, Action>) => ({
    add: (text: string) => dispatch(createTodo(text))
  })
)(DumbAddTodo);

export const RemainingCount = connect(
  (state: State) => ({
    remainingCount: Object.values(state.todos).filter((todo) => !todo.done).length,
    totalCount: Object.values(state.todos).length
  })
)(DumbRemainingCount);

export const Todo = connect(
  (state: State, props: { id: number }) => {
    const todo = state.todos[props.id];
    return {
      text: todo.text,
      done: todo.done
    }
  },
  (dispatch: ThunkDispatch<State, undefined, Action>, props: { id: number }) => ({
    remove: () => dispatch(deleteTodo(props.id))
  })
)(DumbTodo);

export const TodoList = connect(
  (state: State) => ({
    todos: Object.values(state.todos)
  })
)
(DumbTodoList);