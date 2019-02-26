import React from "react";
import {FilterStatus} from "../../../../types";
import styles from "./FilterSelector.module.css";

type FilterSelectorProps = {
  filter: FilterStatus,
  setFilter: (filter: FilterStatus) => void
}

const FilterSelector = ({filter, setFilter}: FilterSelectorProps) => (
  <div>
    <button
      className={styles["button"]}
      data-selected={filter === FilterStatus.ALL}
      onClick={() => setFilter(FilterStatus.ALL)
      }
    >
      All
    </button>
    <button
      className={styles["button"]}
      data-selected={filter === FilterStatus.ACTIVE}
      onClick={() => setFilter(FilterStatus.ACTIVE)}
    >
      Active
    </button>
    <button
      className={styles["button"]}
      data-selected={filter === FilterStatus.COMPLETED}
      onClick={() => setFilter(FilterStatus.COMPLETED)}
    >
      Completed
    </button>
  </div>
);

export default FilterSelector;