import Stat from './Stat/Stat';
import Description from './Description/Description';
import s from './Profile.module.css';

import PropTypes from 'prop-types';

function Profile({ user }) {
  return (
    <div className={s.profile}>
      <Description
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
      />
      <Stat stats={user.stats} />
    </div>
  );
}

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    stats: PropTypes.object.isRequired,
  }),
};

export default Profile;
