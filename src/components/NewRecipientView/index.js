import React from 'react';
import * as styles from './style';

const NewRecipientView = props => (
  <styles.Container>
    <styles.Field>
      <styles.FieldName>Name</styles.FieldName>
      <styles.FieldInput
        placeholder="Name"
        placeholderTextColor="rgba(147, 148, 150,1)"
        onChangeText={props.updateField('name')}
        defaultValue={props.name}
      />
    </styles.Field>
    <styles.Field>
      <styles.FieldName>Phone Number</styles.FieldName>
      <styles.FieldInput
        placeholder="Phone Number"
        placeholderTextColor="rgba(147, 148, 150,1)"
        onChangeText={props.updateField('phoneNumber')}
        defaultValue={props.phoneNumber}
      />
    </styles.Field>
    <styles.ButtonOutline onPress={props.verifyRecipient}>
      <styles.ButtonOutlineText>Verify</styles.ButtonOutlineText>
    </styles.ButtonOutline>
    <styles.Button onPress={props.saveRecipient} enabled={props.isRecipientVerified}>
      <styles.ButtonText enabled={props.isRecipientVerified}>Save</styles.ButtonText>
    </styles.Button>
  </styles.Container>
);
NewRecipientView.defaultProps = {
};
NewRecipientView.propTypes = {
};
export default NewRecipientView;
