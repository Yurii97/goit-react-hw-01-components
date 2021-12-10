import FriendList from './friendList';

function Friends({ friends }) {
  console.log(friends);
  return (
    <div>
      <FriendList friends={friends} />
    </div>
  );
}

export default Friends;
