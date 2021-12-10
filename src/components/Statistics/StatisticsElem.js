import React, { Fragment } from 'react';
import s from './StatisticsElem.module.css';

function StatisticsElem({ label, percentage }) {
  return (
    <Fragment>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage} %</span>
    </Fragment>
  );
}

export default StatisticsElem;
