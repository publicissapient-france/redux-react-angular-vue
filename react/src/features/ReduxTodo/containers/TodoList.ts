import {connect} from "react-redux";
import {State} from "../../../types";
import DumbTodoList from "../components/TodoList/TodoList";
import {getList} from "../selectors";

const mapStateToProps = (state: State) => ({
  todos: getList(state)
});

export default connect(mapStateToProps)(DumbTodoList);