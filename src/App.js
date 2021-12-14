import Container from './components/container/Container';
import FriendsList from './components/Friends/friendsList';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import Transactions from './components/Transaction/Transactions';

import user from './Data/user.json';
import dataStatistics from './Data/data.json';
import dataFriends from './Data/friends.json';
import dataTransactions from './Data/transactions.json';

function App() {
  return (
    <div>
      <Container>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Container>
      <Container>
        <FriendsList friends={dataFriends} />
      </Container>
      <Container>
        <Statistics title="Upload stats" data={dataStatistics} />
      </Container>
      <Container>
        <Statistics data={dataStatistics} />
      </Container>
      <Container>
        <Transactions data={dataTransactions} />
      </Container>
    </div>
  );
}

export default App;
