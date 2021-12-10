import OneTransaction from './OneTransaction';

function TransactionsList({ items }) {
  return (
    <tbody>
      {items.map(item => (
        <tr key={item.id}>
          <OneTransaction
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        </tr>
      ))}
    </tbody>
  );
}

export default TransactionsList;
