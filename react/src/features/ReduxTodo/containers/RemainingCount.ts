import {connect} from "react-redux";
import {State} from "../../../types";
import DumbRemainingCount from "../components/RemainingCount/RemainingCount";
import {getRemainingCount, getTotal} from "../selectors";

const mapStateToProps = (state: State) => ({
  remainingCount: getRemainingCount(state),
  totalCount: getTotal(state)
});

export default connect(mapStateToProps)(DumbRemainingCount);