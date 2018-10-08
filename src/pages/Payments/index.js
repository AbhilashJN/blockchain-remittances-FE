import React from 'react';
import { StackActions, NavigationActions } from 'react-navigation';
import PaymentsView from '../../components/PaymentsView';
import Loader from '../../components/Loader';
import * as utils from '../../utils/common';
import contacts from './data';

class Payments extends React.Component {
    static navigationOptions = {
      title: 'Payments',
    };

    state={
      isReceiverVerified: false,
      receiverPhone: '',
      Amount: '',
      senderBankAccountID: null,
      senderName: null,
      senderBankUrl: '',
      receiverBankName: null,
      receiverName: null,
      receiverBankAccountID: null,
      loading: false,
      receiverMode: 'numpad',
    }

    componentDidMount() {
      this.getSenderPhone();
    }

    updateField=fieldName => (fieldValue) => {
      this.setState({ [fieldName]: fieldValue });
    }

    switchReceiverMode=mode => () => {
      this.setState({ receiverMode: mode });
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

    getSenderPhone=() => {
      utils.retrieveData('credentials')
        .then(JSON.parse).then((creds) => {
          this.setState({
            senderName: creds.Name,
            senderBankAccountID: creds.BankAccountID,
            senderBankUrl: creds.BankInfo.StellarAppURL,
          });
        });
    }

    verifyReceiver=() => {
      if (this.state.receiverPhone.length < 10) {
        alert('Enter valid phone number and try again');                                      //eslint-disable-line
        return;
      }
      fetch(`http://10.0.2.2:8080/getUserInfo?PhoneNumber=${this.state.receiverPhone}`)   //eslint-disable-line
        .then(resp => resp.json()).then((data) => {
          this.setState({
            receiverName: data.Name,
            receiverBankName: data.BankName,
            receiverBankAccountID: data.BankAccountID,
            receiverBankStellarAddress: data.BankInfo.DistributorAddress,
            isReceiverVerified: true,
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
      fetch(`http://${this.state.senderBankUrl.replace("localhost","10.0.2.2")}/sendPayment`, {                                       //eslint-disable-line
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
        body: utils.transformPOSTpayload(payload),
      }).then(response => response.text())
        .then((responseText) => { this.clearStackAndGoToPage('OperationResult', { type: 'Payment', result: responseText }); });
    }

    render() {
      return (
        this.state.loading
          ? <Loader />
          : (
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
            />
          )
      );
    }
}

export default Payments;
