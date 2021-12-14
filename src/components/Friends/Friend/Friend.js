import s from './Friend.module.css';

function Friend({ id, avatar, name, isOnline }) {
  return (
    <li className={s.item} key={id}>
      <span className={`${s.status} ${s[isOnline]}`}></span>
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

export default Friend;
