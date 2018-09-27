import React from 'react';
import * as styles from './style';

const RegistrationView = props => (
  <styles.Container>
    <styles.Field>
      <styles.FieldName>To</styles.FieldName>
      <styles.FieldInput onChangeText={props.update('receiverPhone')} />
    </styles.Field>
    <styles.Button onPress={props.verifyReceiver} enabled>
      <styles.ButtonText>Verify</styles.ButtonText>
    </styles.Button>
    <styles.Field>
      <styles.FieldName>Amount</styles.FieldName>
      <styles.FieldInput onChangeText={props.update('Amount')} editable={props.isReceiverVerified} />
    </styles.Field>
    <styles.Button onPress={props.makePayment} enabled={props.isReceiverVerified}>
      <styles.ButtonText>Confirm</styles.ButtonText>
    </styles.Button>
  </styles.Container>
);


export default RegistrationView;
