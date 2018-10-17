import React from 'react';
import * as styles from './style';

const DetailsView = props => (
  <styles.Container>

    <styles.DetailsHead>
      <styles.AccountDetails>
        <styles.UserName>{props.credentials.Name}</styles.UserName>
        <styles.BankAccountDetailsText>{props.credentials.BankName}</styles.BankAccountDetailsText>
        <styles.BankAccountDetailsText>
          {props.credentials.BankAccountID}
        </styles.BankAccountDetailsText>
      </styles.AccountDetails>
      {props.accountDetails && (
      <styles.Balance>
        <styles.BankAccountDetailsText>Balance:</styles.BankAccountDetailsText>
        <styles.BalanceAmountText>{`${props.credentials.BankInfo.NativeCurrency === 'INR' ? '₹' : '$'} ${props.accountDetails.Balance}`}</styles.BalanceAmountText>
      </styles.Balance>
      )}
    </styles.DetailsHead>
    <styles.TransactionsList>
      <styles.TransactionHistoryText>Transaction History</styles.TransactionHistoryText>
      { props.accountDetails && props.accountDetails.Transactions.length
        ? props.accountDetails.Transactions.reverse().map(transaction => (
          <styles.Transaction key={transaction.TxID}>
            <styles.TransactionDetails>
              <styles.TransactionPeerText>
                {transaction.TransactionType === 'debit' ? `To: ${transaction.Name}` : `From: ${transaction.Name}`}
              </styles.TransactionPeerText>
              <styles.TransactionPeerAccountText>
               AccountID:
                {' '}
                {transaction.From || transaction.To}
              </styles.TransactionPeerAccountText>
              <styles.TransactionIDText>{`TxID: ${transaction.TxID}`}</styles.TransactionIDText>
              <styles.TransactionTimeText>{`${(new Date(transaction.CreatedAt)).toUTCString()}`}</styles.TransactionTimeText>
            </styles.TransactionDetails>
            <styles.TransactionAmount>
              <styles.TransactionAmountText type={transaction.TransactionType}>
                {transaction.TransactionType === 'debit' ? '-' : '+'}
                {props.credentials.BankInfo.NativeCurrency === 'INR' ? '₹' : '$'}
                {transaction.Amount}
              </styles.TransactionAmountText>
            </styles.TransactionAmount>
          </styles.Transaction>
        ))
        : <styles.TransactionHistoryText>No Transactions</styles.TransactionHistoryText>
    }
    </styles.TransactionsList>
  </styles.Container>
);


export default DetailsView;
