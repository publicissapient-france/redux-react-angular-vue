import {connect} from "react-redux";
import {FilterStatus, State} from "../../../types";
import {setVisibilityFilter} from "../actions";
import DumbFilterSelector from "../components/FilterSelector/FilterSelector";
import {Dispatch} from "redux";

const mapStateToProps = (state: State) => ({
  filter: state.filter
});

const mapDispatchToPropps = (dispatch: Dispatch) => ({
  setFilter: (filter: FilterStatus) => dispatch(setVisibilityFilter(filter))
});

export default connect(mapStateToProps, mapDispatchToPropps)(DumbFilterSelector);