import React from "react";

const RemainingCount = (remainingCount: number, totalCount: number) => (
  <div>
    <span>{remainingCount}</span>
    /
    <span>{totalCount}</span>
  </div>
);