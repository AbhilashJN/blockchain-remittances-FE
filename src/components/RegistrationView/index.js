import React from 'react';
import * as styles from './style'
const RegistrationView = (props) => (
  <styles.Container>
      <styles.Field>
          <styles.FieldName>Phone</styles.FieldName>
          <styles.FieldInput/>
      </styles.Field>
      <styles.Field>
          <styles.FieldName>Bank Name</styles.FieldName>
          <styles.FieldInput/>
      </styles.Field>
      <styles.Field>
          <styles.FieldName>Bank Account Number</styles.FieldName>
          <styles.FieldInput/>
      </styles.Field>
      <styles.Button>
          <styles.ButtonText onPress={props.doRegistration}>Confirm</styles.ButtonText>
      </styles.Button>
  </styles.Container>
);



export default RegistrationView