import React from 'react';
import { ThemeProvider } from 'styled-components';
import RegistrationView from '../../components/RegistrationView';
import Loader from '../../components/Loader';
import OperationResultView from '../../components/OperationResultView';
import * as utils from '../../utils/common';
import { themeA } from '../../utils/themes';

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
        bankNames: [],
        loading: false,
        operationResult: null,
      }

      componentDidMount() {
        fetch(`http://${utils.localhostURL}:8080/getBanksList`)                               //eslint-disable-line
          .then(resp => resp.json())
          .then(allBanks => allBanks.map(bankname => ({ value: bankname })))
          .then(allBankNames => this.setState({ bankNames: allBankNames }));
      }

      updateField=fieldName => (fieldValue) => {
        this.setState({ [fieldName]: fieldValue });
      }

      goToAuth=() => {
        this.props.navigation.navigate('AuthLoad');
      }

      doRegistration=() => {
        this.setState({ loading: true });
        const payload = {
          BankName: this.state.BankName,
          PhoneNumber: this.state.PhoneNumber,
          BankAccountID: this.state.BankAccountID,
        };
        fetch(`http://${utils.localhostURL}:8080/registerNewUser`, {                               //eslint-disable-line
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          },
          body: utils.transformPOSTpayload(payload),
        }).then((resp) => {
          if (resp.status === 201) {
            return resp.json();
          }
          alert(resp.status);                                                    //eslint-disable-line
          throw new Error('Registration failed');
        }).then((respJson) => { utils.storeData('credentials', { ...respJson }); })
          .then(() => {
            this.setState({
              loading: false,
              operationResult: {
                result: 'success',
                resultText: 'Registration Successful!',
              },
            });
          })
          .catch(() => {
            alert('Registration failed! Please try again');                 //eslint-disable-line
            this.setState({ loading: false });
          });
      }

      render() {
        if (this.state.loading) {
          return (
            <ThemeProvider theme={themeA}>
              <Loader />
            </ThemeProvider>
          );
        }
        if (this.state.operationResult) {
          return (
            <ThemeProvider theme={themeA}>
              <OperationResultView
                {...this.state.operationResult}
                goToPage={this.goToAuth}
              />
            </ThemeProvider>
          );
        }
        return (
          <RegistrationView
            doRegistration={this.doRegistration}
            update={this.updateField}
            CustomerName={this.state.CustomerName}
            PhoneNumber={this.state.PhoneNumber}
            BankName={this.state.BankName}
            BankAccountID={this.state.BankAccountID}
            bankNames={this.state.bankNames}
          />
        );
      }
}

export default Registration;
