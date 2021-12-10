import Container from './components/container/Container';
import Friends from './components/Friends/Friends';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import Transactions from './components/Transaction/Transactions';
import dataUser from './Data/user.json';
import dataStatistics from './Data/data.json';
import dataFriends from './Data/friends.json';
import dataTransactions from './Data/transactions.json';

function App() {
  return (
    <div>
      <Container>
        <Profile user={dataUser} />
      </Container>
      <Container>
        <Friends friends={dataFriends} />
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
