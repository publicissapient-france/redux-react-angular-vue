import {connect} from "react-redux";
import {State} from "../../../types";
import DumbRemainingCount from "../components/RemainingCount/RemainingCount";

const mapStateToProps = (state: State) => ({
  remainingCount: Object.values(state.todos).filter((todo) => !todo.done).length,
  totalCount: Object.values(state.todos).length
});

export default connect(mapStateToProps)(DumbRemainingCount);