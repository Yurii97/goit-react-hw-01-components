import TransactionsList from './TransactionsList';
import TransactionsHead from './TransactionsHead';
import PropTypes from 'prop-types';

function Transactions({ data }) {
  return (
    <table className="transaction-history">
      <TransactionsHead />
      <TransactionsList items={data} />
    </table>
  );
}

Transactions.prototype = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default Transactions;
