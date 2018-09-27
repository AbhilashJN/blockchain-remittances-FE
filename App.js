import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Home from './src/pages/Home';
import Registration from './src/pages/Registration';
import Payments from './src/pages/Payments';
import Details from './src/pages/Details';
import Login from './src/pages/Login';


const RootStack = createStackNavigator(
  {
    Home,
    Details,
    Payments,
    Registration,
    Login,
  },
  {
    initialRouteName: 'Login',
    cardStyle: { backgroundColor: '#e6f0f7' },
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#011f4b',
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
