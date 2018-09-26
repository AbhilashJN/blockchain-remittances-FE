import React from 'react';
import * as styles from './style'
const RegistrationView = (props) => (
  <styles.Container>
      <styles.Field>
          <styles.FieldName>To</styles.FieldName>
          <styles.FieldInput/>
      </styles.Field>
      <styles.Field>
          <styles.FieldName>Amount</styles.FieldName>
          <styles.FieldInput/>
      </styles.Field>
      <styles.Button>
          <styles.ButtonText onPress={props.makePayment}>Confirm</styles.ButtonText>
      </styles.Button>
  </styles.Container>
);



export default RegistrationView