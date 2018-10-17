import React from 'react';
import { View, Text } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import * as utils from '../../utils/common';
import { themeA, themeB } from '../../utils/themes';

class Login extends React.Component {
  static navigationOptions = {
    title: 'Login',
  };

  componentDidMount() {
    this.verifyCredentials();
  }


  verifyCredentials=() => {
    utils.retrieveData('credentials')
      .then(resp => JSON.parse(resp))
      .then((data) => {
        if (data !== null) {
          this.clearStackAndGoToPage('Home', { BankName: data.BankName, theme: data.BankName === 'ALPHA' ? themeA : themeB });
        } else {
          this.clearStackAndGoToPage('Registration');
        }
      });
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


  render() {
    return (
      <View><Text>Fetching Credentials</Text></View>
    );
  }
}

export default Login;
