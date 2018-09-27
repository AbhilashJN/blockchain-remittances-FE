import React from 'react';
import PaymentsView from '../../components/PaymentsView';
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
    }

    componentDidMount() {
      this.getSenderPhone();
    }

    updateField=fieldName => (fieldValue) => {
      this.setState({ [fieldName]: fieldValue });
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
      fetch(`http://10.0.2.2:8080/getReceiverInfo?PhoneNumber=${this.state.receiverPhone}`)   //eslint-disable-line
        .then(resp => resp.json()).then((data) => {
          this.setState({
            receiverName: data.CustomerName,
            receiverBankName: data.BankName,
            receiverBankAccountID: data.BankAccountID,
            isReceiverVerified: true,
          });
          alert(`ReceiverName: ${data.CustomerName} \nReceiverBank: ${data.BankName} \nReceiverBankAccount: ${data.BankAccountID}`);             //eslint-disable-line
        });
    }

    makePayment=() => {
      if (!this.state.isReceiverVerified) {
        alert('Verify receiver before making payment');                                    //eslint-disable-line
        return;
      }
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
      }).then(response => response.text()).then(alert).then(() => { this.props.navigation.navigate('Home'); });   //eslint-disable-line
    }

    render() {
      return (
        <PaymentsView
          makePayment={this.makePayment}
          update={this.updateField}
          verifyReceiver={this.verifyReceiver}
          isReceiverVerified={this.state.isReceiverVerified}
        />
      );
    }
}

export default Payments;
