import React from 'react';
import {View,Text} from 'react-native';
import * as utils from '../../utils/common';
import { StackActions, NavigationActions } from 'react-navigation';

class Login extends React.Component {
    static navigationOptions = {
      title: 'Login',
    };

     componentDidMount(){
        this.verifyCredentials()
     }

     
       verifyCredentials=()=>{
         utils.retrieveData("credentials").then(data=>{
           if(data!==null)
           {
             this.clearStackAndGoToPage('Home')
           }
           else{
            this.clearStackAndGoToPage('Registration')
           }
         })
       }
     

       clearStackAndGoToPage=(pageName)=>{
        const resetAction = StackActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: pageName }),
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

  export default Login