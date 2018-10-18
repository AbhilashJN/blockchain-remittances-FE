import React from 'react';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import Home from './src/pages/Home';
import Registration from './src/pages/Registration';
import Payments from './src/pages/Payments';
import Details from './src/pages/Details';
import Login from './src/pages/Login';
import NewRecipient from './src/pages/NewRecipient';
import WithdrawDeposit from './src/pages/WithdrawDeposit';

const AppStack = createStackNavigator(
  {
    Home,
    Details,
    Payments,
    NewRecipient,
    WithdrawDeposit,
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerTintColor: '#e6f0f7',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

const AuthLoad = createStackNavigator({
  Login,
},
{
  initialRouteName: 'Login',
  cardStyle: { backgroundColor: 'rgb(0, 122, 183);' },
  navigationOptions: {
    headerStyle: {
      backgroundColor: 'rgb(0, 68, 102)',
    },
    headerTintColor: '#e6f0f7',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
});


const RegistrationPage = createStackNavigator({
  Registration,
},
{
  initialRouteName: 'Registration',
  cardStyle: { backgroundColor: 'rgb(0, 122, 183);' },
  navigationOptions: {
    headerStyle: {
      backgroundColor: 'rgb(0, 68, 102)',
    },
    headerTintColor: '#e6f0f7',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
});

const StackSwitch = createSwitchNavigator({
  AuthLoad,
  RegistrationPage,
  AppStack,
},
{
  initialRouteName: 'AuthLoad',
});

const App = () => <StackSwitch />;

export default App;
