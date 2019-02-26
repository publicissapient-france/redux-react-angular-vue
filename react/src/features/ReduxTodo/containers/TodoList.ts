import {connect} from "react-redux";
import {FilterStatus, State} from "../../../types";
import DumbTodoList from "../components/TodoList/TodoList";

export default connect(
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
)(DumbTodoList);