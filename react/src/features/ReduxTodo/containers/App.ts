import {connect} from "react-redux";
import {ThunkDispatch} from "redux-thunk";
import {State} from "../../../types";
import {Action, fetchTodos} from "../actions";
import DumbApp from "../components/App/App";

const mapDispatchToProps = (dispatch: ThunkDispatch<State, undefined, Action>) => ({
  fetchTodos: () => dispatch(fetchTodos()),
});

export default connect(null, mapDispatchToProps)(DumbApp);