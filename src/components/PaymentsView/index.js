import React from 'react';
import * as styles from './style';
import userVerifiedIcon from '../../assets/user.png';

const PaymentsView = props => (
  <styles.Container>
    <styles.Field>
      <styles.FieldName>To</styles.FieldName>
      <styles.FieldInput
        onChangeText={props.update('receiverPhone')}
        keyboardType="phone-pad"
        placeholder={"Enter receipient's phone number"}
        placeholderTextColor="rgba(229, 229, 229, 0.6)"
      />
    </styles.Field>
    <styles.Button onPress={props.verifyReceiver} enabled>
      <styles.ButtonText>Verify</styles.ButtonText>
    </styles.Button>
    { props.isReceiverVerified && (
    <styles.ReceiverInfoCard>
      <styles.UserVerifiedIcon source={userVerifiedIcon} />
      <styles.ReceiverInfo>
        <styles.ReceiverName>{props.receiverName}</styles.ReceiverName>
        <styles.ReceiverBankName>{props.receiverBankName}</styles.ReceiverBankName>
        <styles.ReceiverBankName>{props.receiverPhone}</styles.ReceiverBankName>
      </styles.ReceiverInfo>

    </styles.ReceiverInfoCard>
    )}
    <styles.Field>
      <styles.FieldName>Amount</styles.FieldName>
      <styles.FieldInput onChangeText={props.update('Amount')} editable={props.isReceiverVerified} keyboardType="number-pad" />
    </styles.Field>
    <styles.Button onPress={props.makePayment} enabled={props.isReceiverVerified}>
      <styles.ButtonText>Confirm</styles.ButtonText>
    </styles.Button>
  </styles.Container>
);


export default PaymentsView;
