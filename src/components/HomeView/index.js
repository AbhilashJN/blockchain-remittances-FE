import React from 'react';
import * as styles from './style';

const HomeView = props => (
  <styles.Container>
    <styles.Button onPress={props.goToPage('Payments')}>
      <styles.ButtonText>
             Payment
      </styles.ButtonText>
    </styles.Button>
    <styles.Button onPress={props.goToPage('Details')}>
      <styles.ButtonText>
              Details
      </styles.ButtonText>
    </styles.Button>
    <styles.Button onPress={props.goToPage('Withdraw/Deposit')}>
      <styles.ButtonText>
              Withdraw/Deposit
      </styles.ButtonText>
    </styles.Button>
  </styles.Container>
);


export default HomeView;
