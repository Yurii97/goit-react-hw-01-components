import React, { Fragment } from 'react';

function Friend({ avatar, name, isOnline }) {
  return (
    <Fragment>
      <span className={`status status--${isOnline}`}></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </Fragment>
  );
}

export default Friend;
