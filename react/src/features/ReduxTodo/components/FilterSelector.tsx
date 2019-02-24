import React from "react";
import {FilterStatus} from "../../../types";

const FilterSelector = (filter: FilterStatus, setFilter: (filter: FilterStatus) => void) => (
  <div>
    <button
      data-selected={filter === FilterStatus.ALL} onClick={() =>
      setFilter(FilterStatus.ALL)}
    >
      All
    </button>
    <button
      data-selected={filter === FilterStatus.ACTIVE}
      onClick={() => setFilter(FilterStatus.ACTIVE)}
    >
      Active
    </button>
    <button
      data-selected={filter === FilterStatus.COMPLETED}
      onClick={() => setFilter(FilterStatus.COMPLETED)}
    >
      Completed
    </button>
  </div>
);

export default FilterSelector;