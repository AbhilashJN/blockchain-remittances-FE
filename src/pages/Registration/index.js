import React from 'react';
import { StackActions, NavigationActions } from 'react-navigation';
import RegistrationView from '../../components/RegistrationView';
import Loader from '../../components/Loader';
import * as utils from '../../utils/common';

class Registration extends React.Component {
    static navigationOptions = {
      title: 'Registration',
      headerLeft: null,
      loading: false,
    };

      state={
        CustomerName: '',
        PhoneNumber: '',
        BankName: '',
        BankAccountID: '',
        bankNames: [],
      }

      componentDidMount() {
        fetch('http://10.0.2.2:8080/getBanksList')                           //eslint-disable-line
          .then(resp => resp.json())
          .then(allBanks => allBanks.map(bankname => ({ value: bankname })))
          .then(allBankNames => this.setState({ bankNames: allBankNames }));
      }

      updateField=fieldName => (fieldValue) => {
        this.setState({ [fieldName]: fieldValue });
      }

      clearStackAndGoToPage=(pageName, params) => {
        const resetAction = StackActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: pageName, params }),
          ],
        });
        this.props.navigation.dispatch(resetAction);
      }

      doRegistration=() => {
        this.setState({ loading: true });
        const payload = {
          BankName: this.state.BankName,
          PhoneNumber: this.state.PhoneNumber,
          BankAccountID: this.state.BankAccountID,
        };
        fetch('http://10.0.2.2:8080/registerNewUser', {                               //eslint-disable-line
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          },
          body: utils.transformPOSTpayload(payload),
        }).then((resp) => {
          if (resp.status === 201) {
            return resp.json();
          }
          alert(resp.status);                                                     //eslint-disable-line
          throw new Error('Registration failed');
        }).then((respJson) => { utils.storeData('credentials', { ...respJson }); })
          .then(() => {                                                           //eslint-disable-line
            this.clearStackAndGoToPage('OperationResult', {
              type: 'Registration',
              result: 'success',
            });
          })
          .catch((err) => { alert(err); });                                       //eslint-disable-line
      }

      render() {
        return (
          this.state.loading
            ? <Loader />
            : (
              <RegistrationView
                doRegistration={this.doRegistration}
                update={this.updateField}
                CustomerName={this.state.CustomerName}
                PhoneNumber={this.state.PhoneNumber}
                BankName={this.state.BankName}
                BankAccountID={this.state.BankAccountID}
                bankNames={this.state.bankNames}
              />
            )
        );
      }
}

export default Registration;
