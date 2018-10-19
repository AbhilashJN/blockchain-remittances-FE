import React from 'react';
import * as styles from './style';

class DetailsView extends React.PureComponent {
  render() {
    return (
      <styles.Container>
        <styles.DetailsHead>
          <styles.HeaderText>My Account</styles.HeaderText>
          <styles.AccountInfo>
            <styles.AccountDetails>
              <styles.BankAccountDetailsTextLarge>{this.props.credentials.Name}</styles.BankAccountDetailsTextLarge>
              <styles.BankAccountDetailsText>
                {this.props.credentials.BankName}
              </styles.BankAccountDetailsText>
              <styles.BankAccountDetailsText>
                {this.props.credentials.BankAccountID}
              </styles.BankAccountDetailsText>
            </styles.AccountDetails>
            {this.props.accountDetails && (
              <styles.Balance>
                <styles.BankAccountDetailsTextLarge>Available Balance</styles.BankAccountDetailsTextLarge>
                <styles.BalanceAmountText>{`${this.props.credentials.BankInfo.NativeCurrency === 'INR' ? '₹' : '$'} ${this.props.accountDetails.Balance}`}</styles.BalanceAmountText>
              </styles.Balance>
            )}
          </styles.AccountInfo>
        </styles.DetailsHead>
        <styles.TransactionsList>
          { this.props.accountDetails && this.props.accountDetails.Transactions.length
            ? this.props.accountDetails.Transactions.reverse().map(transaction => (
              <styles.Transaction key={transaction.TxID}>
                <styles.TransactionDetails>
                  <styles.TransactionPeerText>
                    {transaction.Name}
                  </styles.TransactionPeerText>
                  <styles.TransactionTimeText>{`${(new Date(transaction.CreatedAt)).toUTCString()}`}</styles.TransactionTimeText>
                  <styles.TransactionIDText>{`TXN ID: ${transaction.TxID}`}</styles.TransactionIDText>
                </styles.TransactionDetails>
                <styles.TransactionAmount>
                  <styles.TransactionAmountText type={transaction.TransactionType}>
                    {transaction.TransactionType === 'debit' ? '-' : '+'}
                    {this.props.credentials.BankInfo.NativeCurrency === 'INR' ? '₹' : '$'}
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
  }
}
DetailsView.defaultProps = {
};
DetailsView.propTypes = {
};
export default DetailsView;
