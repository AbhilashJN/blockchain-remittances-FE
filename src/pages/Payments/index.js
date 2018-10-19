import React from 'react';
import { StackActions, NavigationActions } from 'react-navigation';
import { ThemeProvider } from 'styled-components';
import PaymentsView from '../../components/PaymentsView';
import Loader from '../../components/Loader';
import * as utils from '../../utils/common';
import contacts from './data';
import OperationResultView from '../../components/OperationResultView';

class Payments extends React.Component {
    static navigationOptions = ({ navigation }) => ({
      title: 'Payments',
      headerStyle: {
        backgroundColor: navigation.getParam('theme').headerBackground,
      },
    });

    state={
      isReceiverVerified: false,
      receiverPhone: '',
      Amount: '',
      senderBankAccountID: '',
      senderCurrency: '',
      senderName: '',
      senderBankUrl: '',
      receiverBankName: '',
      receiverName: '',
      receiverBankAccountID: '',
      receiverCurrency: '',
      loading: false,
      receiverMode: 'numpad',
      exchangeRate: 80,
      operationResult: null,
    }

    componentDidMount() {
      this.getCredentials();
    }

    updateField=fieldName => (fieldValue) => {
      this.setState({ [fieldName]: fieldValue });
    }

    switchReceiverMode=mode => () => {
      this.setState({ receiverMode: mode });
    }

    goToHomePage=() => {
      const popAction = StackActions.pop();
      this.props.navigation.dispatch(popAction);
    }

    getCredentials=() => {
      utils.retrieveData('credentials')
        .then(JSON.parse).then((creds) => {
          this.setState({
            senderName: creds.Name,
            senderBankAccountID: creds.BankAccountID,
            senderBankUrl: creds.BankInfo.StellarAppURL,
            senderCurrency: creds.BankInfo.NativeCurrency,
          });
        });
    }

    getExchangeRate=(senderCurrency, receiverCurrency) => {
      if (senderCurrency === receiverCurrency) {
        return 1;
      }
      if (senderCurrency === 'INR') {
        return 1 / 80;
      }

      return 80;
    }

    verifyReceiver=() => {
      if (this.state.receiverPhone.length < 10) {
        alert('Enter valid phone number and try again');                                      //eslint-disable-line
        return;
      }
      fetch(`http://${utils.localhostURL}:8080/getUserInfo?PhoneNumber=${this.state.receiverPhone}`)   //eslint-disable-line
        .then(resp => resp.json()).then((data) => {
          this.setState({
            receiverName: data.Name,
            receiverBankName: data.BankName,
            receiverBankAccountID: data.BankAccountID,
            receiverBankStellarAddress: data.BankInfo.DistributorAddress,
            receiverCurrency: data.BankInfo.NativeCurrency,
            isReceiverVerified: true,
            exchangeRate: this.getExchangeRate(this.state.senderCurrency, data.BankInfo.NativeCurrency),        //eslint-disable-line
          });
        })
        .catch(() => {
          alert('Unable to verify receiver');                                             //eslint-disable-line
          this.setState({
            receiverName: '',
            receiverBankName: '',
            receiverBankAccountID: '',
            receiverBankStellarAddress: '',
            isReceiverVerified: false,
          });
        });
    }

    makePayment=() => {
      if (!this.state.isReceiverVerified) {
        alert('Verify receiver before making payment');                                    //eslint-disable-line
        return;
      }
      if (this.state.Amount.length === 0) {
        alert('Enter valid amount');                                                      //eslint-disable-line
        return;
      }
      this.setState({ loading: true });

      const payload = {
        Amount: this.state.Amount,
        SenderName: this.state.senderName,
        SenderBankAccountID: this.state.senderBankAccountID,
        ReceiverName: this.state.receiverName,
        ReceiverBankAccountID: this.state.receiverBankAccountID,
        ReceiverBankStellarDistributorAddress: this.state.receiverBankStellarAddress,
      };
      fetch(`http://${this.state.senderBankUrl.replace("localhost",utils.localhostURL)}/sendPayment`, {                                       //eslint-disable-line
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
        body: utils.transformPOSTpayload(payload),
      }).then(response => response.text())
        .then((responseText) => {
          let messages;
          let result = '';
          let resultText = '';
          if (responseText === 'success') {
            result = 'success';
            resultText = 'Payment Successful!';
            messages = [`Amount debited from your account : ${this.state.senderCurrency} ${this.state.Amount}`,
              `Amount credited to ${this.state.receiverName}'s account : ${this.state.receiverCurrency} ${this.state.exchangeRate * this.state.Amount}`];
          } else {
            result = 'failure';
            resultText = `Payment Failed! ${responseText}`;
          }
          this.setState({
            operationResult: {
              result,
              resultText,
              messages,
            },
            loading: false,
          });
        });
    }

    render() {
      if (this.state.loading) {
        return (
          <ThemeProvider theme={this.props.navigation.getParam('theme')}>
            <Loader />
          </ThemeProvider>
        );
      }
      if (this.state.operationResult) {
        return (
          <ThemeProvider theme={this.props.navigation.getParam('theme')}>
            <OperationResultView
              {...this.state.operationResult}
              goToPage={this.goToHomePage}
            />
          </ThemeProvider>
        );
      }
      return (
        <ThemeProvider theme={this.props.navigation.getParam('theme')}>
          <PaymentsView
            makePayment={this.makePayment}
            update={this.updateField}
            verifyReceiver={this.verifyReceiver}
            isReceiverVerified={this.state.isReceiverVerified}
            receiverName={this.state.receiverName}
            receiverBankName={this.state.receiverBankName}
            receiverPhone={this.state.receiverPhone}
            contacts={contacts}
            receiverMode={this.state.receiverMode}
            switchReceiverMode={this.switchReceiverMode}
            exchangeRate={this.state.exchangeRate}
            senderCurrency={this.state.senderCurrency}
            receiverCurrency={this.state.receiverCurrency}
          />
        </ThemeProvider>

      );
    }
}

export default Payments;
