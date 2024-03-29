import React from 'react';
import { Dropdown } from 'react-native-material-dropdown';
import * as styles from './style';
import regIcon from '../../assets/registration.png';

const RegistrationView = props => (
  <styles.Container>
    <styles.PageInfo>
      <styles.PageIcon source={regIcon} />
      <styles.PageInfoText>
        Please help us with your bank details which are required to help you make transactions.
      </styles.PageInfoText>
    </styles.PageInfo>
    <Dropdown {...styles.DropdownStyles} data={props.bankNames} label="Select your bank" onChangeText={(value) => { props.update('BankName')(value); }} />
    <styles.Field>
      <styles.FieldName>Phone</styles.FieldName>
      <styles.FieldInput onChangeText={props.update('PhoneNumber')} defaultValue={props.PhoneNumber} />
    </styles.Field>
    <styles.Field>
      <styles.FieldName>Please Enter Your Bank Account Number</styles.FieldName>
      <styles.FieldInput onChangeText={props.update('BankAccountID')} defaultValue={props.BankAccountID} />
    </styles.Field>
    <styles.Button onPress={props.doRegistration}>
      <styles.ButtonText>Add Account</styles.ButtonText>
    </styles.Button>
  </styles.Container>
);


export default RegistrationView;
