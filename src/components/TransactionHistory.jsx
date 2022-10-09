import PropTypes from 'prop-types';
import { TableHead, TableRowHead, TransactionHistory, TableRow, TableData  } from './TransactionHistory.styled';

export const Transactions = ({ items }) => {
  return (
    <TransactionHistory>
      <TableHead>
        <TableRowHead>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </TableRowHead>
      </TableHead>

      <tbody>
        {items.map(({ type, amount, currency, id }) => (
          <TableRow key={id}>
            <TableData>{type}</TableData>
            <TableData>{amount}</TableData>
            <TableData>{currency}</TableData>
          </TableRow>
        ))}
      </tbody>
    </TransactionHistory>
  );
};


Transactions.protoType= {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.number.isRequired,
            currency: PropTypes.string.isRequired,

        })
    )
}