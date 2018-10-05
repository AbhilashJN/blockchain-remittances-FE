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
        <styles.BalanceAmountText>{`$${props.accountDetails.Balance}`}</styles.BalanceAmountText>
      </styles.Balance>
      )}
    </styles.DetailsHead>
    <styles.TransactionsList>
      <styles.TransactionHistoryText>Transaction History</styles.TransactionHistoryText>
      { props.accountDetails && props.accountDetails.Transactions.length
        ? props.accountDetails.Transactions.map(transaction => (
          <styles.Transaction key={transaction.ID}>
            <styles.TransactionDetails>
              <styles.TransactionPeerText>
                {transaction.Name}
              </styles.TransactionPeerText>
              <styles.TransactionPeerAccountText>
                {transaction.From || transaction.To}
              </styles.TransactionPeerAccountText>
              <styles.TransactionIDText>{`TxID: ${transaction.ID}`}</styles.TransactionIDText>
            </styles.TransactionDetails>
            <styles.TransactionAmount>
              <styles.TransactionAmountText type={transaction.TransactionType}>
                {transaction.TransactionType === 'debit' ? '-' : '+'}
                {' $'}
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
