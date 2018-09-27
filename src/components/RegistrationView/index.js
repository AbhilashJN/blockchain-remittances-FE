import React from 'react';
import * as styles from './style'

const RegistrationView = (props) => (
  <styles.Container>
            <styles.Field>
          <styles.FieldName>Name</styles.FieldName>
          <styles.FieldInput onChangeText={props.update("CustomerName")} defaultValue={props.CustomerName}/>
      </styles.Field>
      <styles.Field>
          <styles.FieldName>Phone</styles.FieldName>
          <styles.FieldInput onChangeText={props.update("PhoneNumber")} defaultValue={props.PhoneNumber}/>
      </styles.Field>
      <styles.Field>
          <styles.FieldName>Bank Name</styles.FieldName>
          <styles.FieldInput onChangeText={props.update("BankName")} defaultValue={props.BankName}/>
      </styles.Field>
      <styles.Field>
          <styles.FieldName>Bank Account Number</styles.FieldName>
          <styles.FieldInput onChangeText={props.update("BankAccountID")} defaultValue={props.BankAccountID}/>
      </styles.Field>
      <styles.Button>
          <styles.ButtonText onPress={props.doRegistration}>Confirm</styles.ButtonText>
      </styles.Button>
  </styles.Container>
);



export default RegistrationView