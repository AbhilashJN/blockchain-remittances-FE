import React from 'react';
import { StackActions, NavigationActions } from 'react-navigation';
import PaymentsView from '../../components/PaymentsView';
import Loader from '../../components/Loader';
import * as utils from '../../utils/common';

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
      receiverBankName: null,
      receiverName: null,
      receiverBankAccountID: null,
      loading: false,
    }

    componentDidMount() {
      this.getSenderPhone();
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

    getSenderPhone=() => {
      utils.retrieveData('credentials')
        .then(JSON.parse).then((creds) => {
          this.setState({
            senderName: creds.CustomerName,
            senderBankAccountID: creds.BankAccountID,
          });
        });
    }

    verifyReceiver=() => {
      if (this.state.receiverPhone.length < 10) {
        alert('Enter valid phone number and try again');                                      //eslint-disable-line
        return;
      }

      fetch(`http://10.0.2.2:8080/getReceiverInfo?PhoneNumber=${this.state.receiverPhone}`)   //eslint-disable-line
        .then(resp => resp.json()).then((data) => {
          this.setState({
            receiverName: data.CustomerName,
            receiverBankName: data.BankName,
            receiverBankAccountID: data.BankAccountID,
            isReceiverVerified: true,
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
        senderName: this.state.senderName,
        senderBankAccountID: this.state.senderBankAccountID,
        receiverBankAccountID: this.state.receiverBankAccountID,
        receiverBankName: this.state.receiverBankName,
        receiverName: this.state.receiverName,
      };

      fetch('http://10.0.2.2:8080/sendPayment', {                                       //eslint-disable-line
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
            />
          )
      );
    }
}

export default Payments;
