import Friend from './Friend/Friend';
import PropTypes from 'prop-types';

function FriendsList({ friends }) {
  return (
    <ul>
      {friends.map(friends => (
        <Friend
          id={friends.id}
          avatar={friends.avatar}
          name={friends.name}
          isOnline={friends.isOnline}
        />
      ))}
    </ul>
  );
}

FriendsList.prototype = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};

export default FriendsList;
