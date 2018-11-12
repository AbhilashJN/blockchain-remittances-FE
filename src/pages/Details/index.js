import React from 'react';
import { ThemeProvider } from 'styled-components';
import DetailsView from '../../components/DetailsView';
import * as utils from '../../utils/common';

class Details extends React.Component {
    static navigationOptions =({ navigation }) => ({
      title: 'Details',
      headerStyle: {
        backgroundColor: navigation.getParam('theme').headerBackground,
      },
    });

    state={
      credentials: {},
      accountDetails: null,
    }

    componentDidMount() {
      this.getTransactionDetails();
    }

    getCredentials=() => utils.retrieveData('credentials')

    getTransactionDetails=() => {
      this.getCredentials()
        .then((creds) => {
          fetch(`http://${creds.BankInfo.StellarAppURL.replace("localhost",utils.localhostURL)}/accountDetails?BankAccountID=${creds.BankAccountID}`)       //eslint-disable-line
            .then(resp => resp.json())
            .then((data) => {
              this.setState({
                accountDetails: data,
                credentials: creds,
              });
            });
        });
    }

    render() {
      return (
        <ThemeProvider theme={this.props.navigation.getParam('theme')}>
          <DetailsView
            credentials={this.state.credentials}
            accountDetails={this.state.accountDetails}
          />
        </ThemeProvider>
      );
    }
}

export default Details;
