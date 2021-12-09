import Stat from './Stat/Stat';
import Description from './Description/Description';

function Profile({ user }) {
  return (
    <div class="profile">
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

export default Profile;
