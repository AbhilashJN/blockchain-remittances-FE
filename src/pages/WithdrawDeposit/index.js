import React from 'react';
import { StackActions, NavigationActions } from 'react-navigation';
import { ThemeProvider } from 'styled-components';
import WithdrawDepositView from '../../components/WithdrawDepositView';
import Loader from '../../components/Loader';
import OperationResultView from '../../components/OperationResultView';
import * as utils from '../../utils/common';

class WithdrawDeposit extends React.Component {
    static navigationOptions =({ navigation }) => ({
      title: 'Withdraw/Deposit',
      headerStyle: {
        backgroundColor: navigation.getParam('theme').headerBackground,
      },
    });

    state={
      Amount: '',
      credentials: { BankInfo: { NativeCurrency: 'INR' } },
      operationResult: null,
      loading: false,
    }

    componentDidMount() {
      this.getAccountID();
    }

    clearStackAndGoToPage=(pageName, pageParams) => () => {
      const resetAction = StackActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({
            routeName: pageName,
            params: { ...pageParams, BankName: this.state.credentials.BankName },
          }),
        ],
      });
      this.props.navigation.dispatch(resetAction);
    }

    getAccountID=() => utils.retrieveData('credentials').then(JSON.parse).then((creds) => { this.setState({ credentials: creds }); })

    updateAmount=(amount) => {
      this.setState({ Amount: amount });
    }


    doAction=actionType => () => {
      this.setState({ loading: true });
      if (this.state.Amount === '') {
        alert('Enter valid amount');                    //eslint-disable-line
        return;
      }
      const payload = {
        Amount: this.state.Amount,
        AccountID: this.state.credentials.BankAccountID,
      };
      const endpoint = actionType === 'Withdraw' ? 'withdrawAmount' : 'depositAmount';
      fetch(`http://${this.state.credentials.BankInfo.StellarAppURL.replace('localhost', utils.localhostURL)}/${endpoint}`,         //eslint-disable-line
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          },
          body: utils.transformPOSTpayload(payload),
        })
        .then(resp => resp.text())
        .then((responseText) => {
          let resultText = '';
          let result = '';
          if (responseText === 'success') {
            resultText = `${actionType} Successful!`;
            result = 'success';
          } else {
            resultText = `${actionType} Failed! ${responseText}`;
            result = 'failure';
          }
          this.setState({
            loading: false,
            operationResult: {
              resultText,
              result,
            },
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
              goToPage={this.clearStackAndGoToPage('Home', { theme: this.props.navigation.getParam('theme') })}
            />
          </ThemeProvider>
        );
      }
      return (
        <ThemeProvider theme={this.props.navigation.getParam('theme')}>
          <WithdrawDepositView
            updateAmount={this.updateAmount}
            doAction={this.doAction}
            currency={this.state.credentials.BankInfo.NativeCurrency}
          />
        </ThemeProvider>
      );
    }
}
WithdrawDeposit.defaultProps = {
};
WithdrawDeposit.propTypes = {
};
export default WithdrawDeposit;
