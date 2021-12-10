import React, { Fragment } from 'react';
import s from './Friend.module.css';

function Friend({ avatar, name, isOnline }) {
  return (
    <Fragment>
      <span className={`${s.status} ${s[isOnline]}`}></span>
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </Fragment>
  );
}

export default Friend;
