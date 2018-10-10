import React from 'react';
import DetailsView from '../../components/DetailsView';
import * as utils from '../../utils/common';

class Details extends React.Component {
    static navigationOptions = {
      title: 'Details',
    };

    state={
      credentials: {},
      accountDetails: null,
    }

    componentDidMount() {
      this.getTransactionDetails();
    }

    getCredentials=() => utils.retrieveData('credentials').then(JSON.parse)

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
        <DetailsView
          credentials={this.state.credentials}
          accountDetails={this.state.accountDetails}
        />
      );
    }
}

export default Details;
