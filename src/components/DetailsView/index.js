import React from 'react';
import * as styles from './style';

const DetailsView = props => (
  <styles.Container>
    <styles.Text>
      {`Name: ${props.credentials.CustomerName}`}
    </styles.Text>
    <styles.Text>
      {`AccountID: ${props.credentials.BankAccountID}`}
    </styles.Text>
    {props.accountDetails && <styles.TransactionText>{`Balance:${props.accountDetails.Balance}`}</styles.TransactionText>}
    <styles.TransactionText>
        Transactions:
    </styles.TransactionText>

    { props.accountDetails && props.accountDetails.Transactions
      ? props.accountDetails.Transactions.map(transaction => (
        <styles.Transaction key={transaction.TransactionID}>
          <styles.TransactionText>{`TxID: ${transaction.TransactionID}`}</styles.TransactionText>
          <styles.TransactionText>{`Type: ${transaction.TransactionType}`}</styles.TransactionText>
          <styles.TransactionText>{`To: ${transaction.To}`}</styles.TransactionText>
          <styles.TransactionText>{`Amount: ${transaction.Amount}`}</styles.TransactionText>
        </styles.Transaction>
      ))
      : <styles.TransactionText>No Transactions</styles.TransactionText>
    }
  </styles.Container>
);


export default DetailsView;
