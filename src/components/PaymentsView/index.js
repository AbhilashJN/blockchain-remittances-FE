import React from 'react';
import { Dropdown } from 'react-native-material-dropdown';
import * as styles from './style';
import userVerifiedIcon from '../../assets/user.png';
import contactsIcon from '../../assets/contacts.png';
import numpadIcon from '../../assets/numpad.png';
import paymentIcon from '../../assets/payment.png';

const PaymentsView = props => (
  <styles.Container>
    <styles.PageInfo>
      <styles.PageIcon source={paymentIcon} />
      <styles.PageInfoText>
      Please help us with bank details of your recipient
      which are required to help you make transactions.
      </styles.PageInfoText>
    </styles.PageInfo>
    <styles.Field>
      <styles.FieldName>Recipient Phone number</styles.FieldName>
      {props.receiverMode === 'numpad' ? (
        <styles.FieldBody>
          <styles.FieldInput
            onChangeText={props.update('receiverPhone')}
            keyboardType="phone-pad"
          />
        </styles.FieldBody>
      )
        : (
          <styles.FieldBody>
            <Dropdown
              {...styles.DropdownStyles}
              data={props.contacts}
              label="Select contact"
              onChangeText={(value) => { props.update('receiverPhone')(value); }}
              labelExtractor={({ Name }) => Name}
              valueExtractor={({ PhoneNumber }) => PhoneNumber}
            />
            <styles.FieldButton onPress={props.switchReceiverMode('numpad')}>
              <styles.FieldIcon source={numpadIcon} />
            </styles.FieldButton>
          </styles.FieldBody>
        )}
    </styles.Field>
    {!props.isReceiverVerified && (
    <styles.ButtonOutline onPress={props.verifyReceiver}>
      <styles.ButtonOutlineText>VERIFY</styles.ButtonOutlineText>
    </styles.ButtonOutline>
    )}
    { props.isReceiverVerified && (
      <>
        <styles.ReceiverInfoCard>
          <styles.ReceiverName>{props.receiverName}</styles.ReceiverName>
          <styles.ReceiverBankName>{props.receiverBankName}</styles.ReceiverBankName>
          <styles.ReceiverBankAccount>{props.receiverBankAccountID}</styles.ReceiverBankAccount>
        </styles.ReceiverInfoCard>
        <styles.Field>
          <styles.FieldName>Enter Amount</styles.FieldName>
          <styles.FieldBody>
            <styles.FieldCurrency>{props.senderCurrency}</styles.FieldCurrency>
            <styles.FieldInput onChangeText={props.update('Amount')} editable={props.isReceiverVerified} keyboardType="number-pad" />
          </styles.FieldBody>
          <styles.ConversionRate>{`Conv Rate : 1 ${props.senderCurrency} = ${props.exchangeRate} ${props.receiverCurrency}`}</styles.ConversionRate>
        </styles.Field>
    </>
    )}
    <styles.Button onPress={props.makePayment} enabled={props.isReceiverVerified}>
      <styles.ButtonText enabled={props.isReceiverVerified}>Make Payment</styles.ButtonText>
    </styles.Button>
  </styles.Container>
);


export default PaymentsView;
