import React from 'react';
import { View, Text , AsyncStorage} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Home from './src/pages/Home';
import Registration from './src/pages/Registration';
import Payments from './src/pages/Payments';
import Login from './src/pages/Login'

class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Details',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: Home,
    Details: DetailsScreen,
    Payments: Payments,
    Registration: Registration,
    Login:Login
  },
  {
    initialRouteName: 'Login',
    cardStyle: { backgroundColor: '#e6f0f7'},
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#011f4b',
      },
      headerTintColor: '#e6f0f7',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}