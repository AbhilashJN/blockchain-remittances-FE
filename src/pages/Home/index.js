import React from 'react';
import { ThemeProvider } from 'styled-components';
import HomeView from '../../components/HomeView';
import * as utils from '../../utils/common';

class Home extends React.Component {
    static navigationOptions =({ navigation }) => ({
      title: navigation.getParam('userCredentials', { BankName: 'ALPHA' }).BankName,
      header: navigation.getParam('Header', undefined),
      headerLeft: null,
      headerStyle: {
        backgroundColor: navigation.getParam('theme').headerBackground,
      },
      headerTintColor: navigation.getParam('theme').headerText,
    });

    state={
      userCredentials: this.props.navigation.getParam('userCredentials'),
      accountDetails: null,
      loading: false,
    }

    componentDidMount() {
      this.getAccountDetails();
    }

    getAccountDetails=() => {
      this.setState({ loading: true });
      fetch(`http://${this.state.userCredentials.BankInfo.StellarAppURL.replace("localhost",utils.localhostURL)}/accountDetails?BankAccountID=${this.state.userCredentials.BankAccountID}`)       //eslint-disable-line
        .then(resp => resp.json())
        .then((data) => {
          this.setState({
            loading: false,
            accountDetails: data,
          });
        });
    }

    refreshAccountDetails=(v) => {
      if (v <= 150) {
        this.getAccountDetails();
      }
    }

    togglePageHeader=(v) => {
      if (v > 400) {
        this.props.navigation.setParams({ Header: null });
      } else {
        this.props.navigation.setParams({ Header: undefined });
      }
    }

    goToPage=pageName => () => this.props.navigation.navigate(pageName, { theme: this.props.navigation.getParam('theme') })


    render() {
      return (
        <ThemeProvider theme={this.props.navigation.getParam('theme')}>
          <HomeView
            goToPage={this.goToPage}
            togglePageHeader={this.togglePageHeader}
            getAccountDetails={this.getAccountDetails}
            refreshAccountDetails={this.refreshAccountDetails}
            userCredentials={this.state.userCredentials}
            accountDetails={this.state.accountDetails}
            loading={this.state.loading}
          />

        </ThemeProvider>
      );
    }
}

export default Home;
