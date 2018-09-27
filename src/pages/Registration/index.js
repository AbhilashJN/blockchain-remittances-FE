import React from 'react';
import RegistrationView from '../../components/RegistrationView';
import * as utils from '../../utils/common';

class Registration extends React.Component {
    static navigationOptions = {
      title: 'Registration',
      headerLeft: null,
    };

      state={
        CustomerName: '',
        PhoneNumber: '',
        BankName: '',
        BankAccountID: '',
      }

      updateField=fieldName => (fieldValue) => {
        this.setState({ [fieldName]: fieldValue });
      }

      doRegistration=() => {
        fetch('http://10.0.2.2:8080/registration', {                                //eslint-disable-line
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          },
          body: utils.transformPOSTpayload(this.state),
        }).then((resp) => {
          if (resp.status === 201) {
            return resp.json();
          }
          return {};
        }).then(respJson => utils.storeData('credentials', { ...respJson, PhoneNumber: this.state.PhoneNumber }))
          .then(() => {
            alert('success');                                                   //eslint-disable-line
            this.props.navigation.navigate('Home');
          })
          .catch((err) => { alert(err); });                                         //eslint-disable-line
      }

      render() {
        return (
          <RegistrationView
            doRegistration={this.doRegistration}
            update={this.updateField}
            CustomerName={this.state.CustomerName}
            PhoneNumber={this.state.PhoneNumber}
            BankName={this.state.BankName}
            BankAccountID={this.state.BankAccountID}
          />
        );
      }
}

export default Registration;
