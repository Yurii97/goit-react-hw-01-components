import React, { Fragment } from 'react';
function OneTransaction({ type, amount, currency }) {
  return (
    <Fragment>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </Fragment>
  );
}

export default OneTransaction;
