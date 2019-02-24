import {connect} from "react-redux";
import {FilterStatus, State} from "../../../types";
import {setVisibilityFilter} from "../actions";
import DumbFilterSelector from "../components/FilterSelector";

export const FilterSelector = connect(
  (state: State) => ({
    filter: state.filter
  }),
  (dispatch) => ({
    setFilter: (filter: FilterStatus) => dispatch(setVisibilityFilter(filter))
  })
)(DumbFilterSelector);