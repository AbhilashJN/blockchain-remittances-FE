import React from 'react';
import RegistrationView from '../../components/RegistrationView';

class Registration extends React.Component{
    static navigationOptions = {
        title: 'Registration',
      };

      doRegistration=()=>{
          fetch('http://10.0.2.2:8080/registration',{
              method:'POST',
              body:JSON.stringify({
                  phone:'123123',
                  bankName:'bankA',
                  acctNo:'9876543'
              })
          }).then(response=>response.text()).then(alert)
      }

    render(){
        return (
            <RegistrationView doRegistration={this.doRegistration}/>
        )
    }
}

export default Registration