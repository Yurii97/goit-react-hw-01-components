import TransactionsList from './TransactionsList';
import TransactionsHead from './TransactionsHead';

function Transactions({ data }) {
  return (
    <table className="transaction-history">
      <TransactionsHead />
      <TransactionsList items={data} />
    </table>
  );
}

export default Transactions;
