import React from 'react';
import { View, Text } from 'react-native';
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
      .then((data) => {
        if (data !== null) {
          this.props.navigation.navigate('Home', { userCredentials: data, theme: data.BankName === 'ALPHA' ? themeA : themeB });
        } else {
          this.props.navigation.navigate('RegistrationPage');
        }
      });
  }

  render() {
    return (
      <View><Text>Fetching Credentials</Text></View>
    );
  }
}

export default Login;
