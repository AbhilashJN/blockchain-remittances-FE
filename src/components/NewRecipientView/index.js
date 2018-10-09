import React from 'react';
import * as styles from './style';

const NewRecipientView = () => (
  <styles.Container>
    <styles.SectionHeader>
      <styles.SectionHeaderText>
              BENEFICIARY DETAILS
      </styles.SectionHeaderText>
    </styles.SectionHeader>
    <styles.Field>
      <styles.FieldName>First Name</styles.FieldName>
      <styles.FieldInput placeholder="First Name" placeholderTextColor="rgba(147, 148, 150,1)" />
    </styles.Field>
    <styles.Field>
      <styles.FieldName>Last Name</styles.FieldName>
      <styles.FieldInput placeholder="Last Name" />
    </styles.Field>
    <styles.Field>
      <styles.FieldName>Address</styles.FieldName>
      <styles.FieldInput placeholder="Address" />
    </styles.Field>
    <styles.Field>
      <styles.FieldName>City</styles.FieldName>
      <styles.FieldInput placeholder="City" />
    </styles.Field>
    <styles.Field>
      <styles.FieldName>State</styles.FieldName>
      <styles.FieldInput placeholder="State" />
    </styles.Field>
    <styles.Field>
      <styles.FieldName>Zip</styles.FieldName>
      <styles.FieldInput placeholder="Zip" />
    </styles.Field>
    <styles.SectionHeader>
      <styles.SectionHeaderText>
              BENEFICIARY BANK DETAILS
      </styles.SectionHeaderText>
    </styles.SectionHeader>
    <styles.Field>
      <styles.FieldName>Bank</styles.FieldName>
      <styles.FieldInput placeholder="Bank Name" />
    </styles.Field>
    <styles.Field>
      <styles.FieldName>Account #</styles.FieldName>
      <styles.FieldInput placeholder="Account Number" />
    </styles.Field>
  </styles.Container>
);
NewRecipientView.defaultProps = {
};
NewRecipientView.propTypes = {
};
export default NewRecipientView;
