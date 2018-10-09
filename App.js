import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Home from './src/pages/Home';
import Registration from './src/pages/Registration';
import Payments from './src/pages/Payments';
import Details from './src/pages/Details';
import Login from './src/pages/Login';
import OperationResult from './src/pages/OperationResult';
import NewRecipient from './src/pages/NewRecipient';
import WithdrawDeposit from './src/pages/WithdrawDeposit';

const RootStack = createStackNavigator(
  {
    Home,
    Details,
    Payments,
    Registration,
    Login,
    OperationResult,
    NewRecipient,
    WithdrawDeposit,
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
  },
);

const App = () => <RootStack />;

export default App;
