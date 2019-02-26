import {connect} from "react-redux";
import {FilterStatus, State} from "../../../types";
import DumbTodoList from "../components/TodoList/TodoList";

const mapStateToProps = (state: State) => ({
  todos: Object.values(state.todos)
    .filter((todo) => {
      return (
        state.filter === FilterStatus.ALL ||
        state.filter === FilterStatus.COMPLETED && todo.done ||
        state.filter === FilterStatus.ACTIVE && !todo.done
      )
    }).sort((todo1, todo2) => todo1.id - todo2.id)
});

export default connect(mapStateToProps)(DumbTodoList);