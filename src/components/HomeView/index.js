import React from 'react';
import * as styles from './style';

const HomeView = props => (
  <styles.Container>
    <styles.BankName>{props.bankName}</styles.BankName>
    <styles.Button onPress={props.goToPage('Payments')}>
      <styles.ButtonText>
             Make a Payment
      </styles.ButtonText>
    </styles.Button>
    <styles.Button onPress={props.goToPage('Details')}>
      <styles.ButtonText>
              View Transaction Details
      </styles.ButtonText>
    </styles.Button>
    <styles.Button onPress={props.goToPage('WithdrawDeposit')}>
      <styles.ButtonText>
              Withdraw/Deposit
      </styles.ButtonText>
    </styles.Button>
    {/* <styles.Button onPress={props.goToPage('NewRecipient')}>
      <styles.ButtonText>
              New Recipient
      </styles.ButtonText>
    </styles.Button> */}
  </styles.Container>
);


export default HomeView;
