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
      <Profile user={dataUser} />
      <Friends friends={dataFriends} />
      <Statistics data={dataStatistics} />
      <Transactions item={dataTransactions} />
    </div>
  );
}

export default App;
