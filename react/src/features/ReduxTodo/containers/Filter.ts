import {connect} from "react-redux";
import {FilterStatus, State} from "../../../types";
import {setVisibilityFilter} from "../actions";
import DumbFilterSelector from "../components/FilterSelector/FilterSelector";

export default connect(
  (state: State) => ({
    filter: state.filter
  }),
  (dispatch) => ({
    setFilter: (filter: FilterStatus) => dispatch(setVisibilityFilter(filter))
  })
)(DumbFilterSelector);