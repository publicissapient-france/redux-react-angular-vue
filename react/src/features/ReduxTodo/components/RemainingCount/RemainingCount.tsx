import React from "react";

type RemainingCountProsp = {
  remainingCount: number,
  totalCount: number
}

const RemainingCount = ({remainingCount, totalCount}: RemainingCountProsp) => (
  <div>
    <span>{remainingCount}</span>
    /
    <span>{totalCount}</span>
  </div>
);

export default RemainingCount;