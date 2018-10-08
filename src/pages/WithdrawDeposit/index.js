import React from 'react';
import { StackActions, NavigationActions } from 'react-navigation';
import WithdrawDepositView from '../../components/WithdrawDepositView';
import * as utils from '../../utils/common';

class WithdrawDeposit extends React.Component {
    static navigationOptions = {
      title: 'Withdraw/Deposit',
    };

    state={
      Amount: '',
      credentials: {},
    }

    componentDidMount() {
      this.getAccountID();
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

    getAccountID=() => utils.retrieveData('credentials').then(JSON.parse).then((creds) => { this.setState({ credentials: creds }); })

    updateAmount=(amount) => {
      this.setState({ Amount: amount });
    }


    doAction=actionType => () => {
      if (this.state.Amount === '') {
        alert('Enter valid amount');                    //eslint-disable-line
        return;
      }
      const payload = {
        Amount: this.state.Amount,
        AccountID: this.state.credentials.BankAccountID,
      };
      const endpoint = actionType === 'Withdraw' ? 'withdrawAmount' : 'depositAmount';
      fetch(`http://${this.state.credentials.BankInfo.StellarAppURL.replace('localhost', '10.0.2.2')}/${endpoint}`,         //eslint-disable-line
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          },
          body: utils.transformPOSTpayload(payload),
        })
        .then(resp => resp.text())
        .then((responseText) => { this.clearStackAndGoToPage('OperationResult', { type: actionType, result: responseText }); });
    }

    render() {
      return (
        <WithdrawDepositView updateAmount={this.updateAmount} doAction={this.doAction} />
      );
    }
}
WithdrawDeposit.defaultProps = {
};
WithdrawDeposit.propTypes = {
};
export default WithdrawDeposit;
