import {connect} from "react-redux";
import {Action, createTodo, deleteTodo, fetchTodos, toggleTodo} from "../actions";
import {ThunkDispatch} from "redux-thunk";
import {FilterStatus, State, Todo as TodoType} from "../../../types";
import DumbAddTodo from "../components/AddTodo/AddTodo";
import DumbRemainingCount from "../components/RemainingCount/RemainingCount";
import DumbTodo from "../components/Todo/Todo";
import DumbTodoList from "../components/TodoList/TodoList";
import DumbApp from "../components/App/App";

export const App = connect(
  null,
  (dispatch: ThunkDispatch<State, undefined, Action>) => ({
    fetchTodos: () => dispatch(fetchTodos()),
  })
)(DumbApp);

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
  (state: State, props: { id: number }) => ({
    ...state.todos[props.id]
  }),
  (dispatch: ThunkDispatch<State, undefined, Action>, props: { id: number }) => ({
    remove: () => dispatch(deleteTodo(props.id)),
    toggleDone: (todo: TodoType) => dispatch(toggleTodo(todo))
  })
)(DumbTodo);

export const TodoList = connect(
  (state: State) => ({
    todos: Object.values(state.todos)
      .filter((todo) => {
        return (
          state.filter === FilterStatus.ALL ||
          state.filter === FilterStatus.COMPLETED && todo.done ||
          state.filter === FilterStatus.ACTIVE && !todo.done
        );
      })
  })
)
(DumbTodoList);