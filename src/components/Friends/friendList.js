import Friend from './Friend';

function FriendList({ friends }) {
  return (
    <ul>
      {friends.map(friend => (
        <li key={friend.id}>
          <Friend
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}

export default FriendList;
