import React from 'react';
import { Dropdown } from 'react-native-material-dropdown';
import * as styles from './style';
import userVerifiedIcon from '../../assets/user.png';
import contactsIcon from '../../assets/contacts.png';
import numpadIcon from '../../assets/numpad.png';

const PaymentsView = props => (
  <styles.Container>
    <styles.Field>
      <styles.FieldName>To</styles.FieldName>
      {props.receiverMode === 'numpad' ? (
        <styles.FieldBody>
          <styles.FieldInput
            onChangeText={props.update('receiverPhone')}
            keyboardType="phone-pad"
            placeholder={"Enter receipient's phone number"}
            placeholderTextColor="rgba(229, 229, 229, 0.6)"
          />
          <styles.FieldButton onPress={props.switchReceiverMode('contacts')}>
            <styles.FieldIcon source={contactsIcon} />
          </styles.FieldButton>
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
    )
    }
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
