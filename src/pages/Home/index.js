import React from 'react';
import { ThemeProvider } from 'styled-components';
import HomeView from '../../components/HomeView';

class Home extends React.Component {
    static navigationOptions =({ navigation }) => ({
      title: navigation.getParam('BankName', 'Home'),
      headerLeft: null,
      headerStyle: {
        backgroundColor: navigation.getParam('theme').headerBackground,
      },
      headerTintColor: navigation.getParam('theme').headerText,
    });

    goToPage=pageName => () => this.props.navigation.navigate(pageName, { theme: this.props.navigation.getParam('theme') })

    render() {
      return (
        <ThemeProvider theme={this.props.navigation.getParam('theme')}><HomeView goToPage={this.goToPage} bankName={this.props.navigation.getParam('BankName')} /></ThemeProvider>
      );
    }
}

export default Home;
