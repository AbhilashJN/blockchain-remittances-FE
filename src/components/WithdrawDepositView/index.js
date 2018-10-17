import React from 'react';
import * as styles from './style';

const WithdrawDepositView = props => (
  <styles.Container>
    <styles.Field>
      <styles.FieldName>Amount</styles.FieldName>
      <styles.FieldBody>
        <styles.FieldCurrency>{props.currency}</styles.FieldCurrency>
        <styles.FieldInput keyboardType="number-pad" onChangeText={props.updateAmount} />
      </styles.FieldBody>
    </styles.Field>
    <styles.ActionRow>
      <styles.Button onPress={props.doAction('Withdraw')}><styles.ButtonText>Withdraw</styles.ButtonText></styles.Button>
      <styles.Button onPress={props.doAction('Deposit')}><styles.ButtonText>Deposit</styles.ButtonText></styles.Button>
    </styles.ActionRow>
  </styles.Container>
);

export default WithdrawDepositView;
