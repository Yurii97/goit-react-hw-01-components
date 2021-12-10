import React, { Fragment } from 'react';

function StatisticsElem({ label, percentage }) {
  return (
    <Fragment>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </Fragment>
  );
}

export default StatisticsElem;
