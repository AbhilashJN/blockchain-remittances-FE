import React from 'react';
import RegistrationView from '../../components/RegistrationView';
import * as utils from '../../utils/common'
class Registration extends React.Component{
    static navigationOptions = {
        title: 'Registration',
        headerLeft:null
      };

      state={
          CustomerName:'',
          PhoneNumber:'',
          BankName:'',
          BankAccountID:''
      }
      updateField=(fieldName)=>(fieldValue)=>{
          this.setState({[fieldName]:fieldValue})
      }

      doRegistration=()=>{
        let formBody = [];
        for (let property in this.state) {
        const encodedKey = encodeURIComponent(property);
        const encodedValue = encodeURIComponent(this.state[property]);
        formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");

        fetch('http://10.0.2.2:8080/registration', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body: formBody
          }).then(resp=>{
              if(resp.status===201){
                  return resp.json()
              }
          }).then(respJson=>utils.storeData("credentials",{...respJson,PhoneNumber:this.state.PhoneNumber}))
          .then(()=>{
              alert("success")
              this.props.navigation.navigate("Home")
        })
          .catch((e)=>{alert(e)})
      }

    render(){
        return (
            <RegistrationView doRegistration={this.doRegistration} update={this.updateField}
             CustomerName={this.state.CustomerName} 
             PhoneNumber={this.state.PhoneNumber}
             BankName={this.state.BankName}
             BankAccountID={this.state.BankAccountID}
             />
        )
    }
}

export default Registration 