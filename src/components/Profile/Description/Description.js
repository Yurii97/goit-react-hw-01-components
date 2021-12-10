import s from './Description.module.css';

function Description({ username, tag, location, avatar }) {
  return (
    <div className={s.description}>
      <img src={avatar} alt="User avatar" className={s.avatar} />
      <p className={s.name}>{username}</p>
      <p className={s.tag}>{tag}</p>
      <p className={s.location}>{location}</p>
    </div>
  );
}

export default Description;
