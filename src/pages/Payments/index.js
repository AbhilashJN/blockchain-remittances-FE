import React from 'react';
import PaymentsView from '../../components/PaymentsView';
import * as utils from '../../utils/common';

class Payments extends React.Component{
    static navigationOptions = {
        title: 'Payments',
      };

    state={
        isReceiverVerified:false,
        receiverPhone:"",
        Amount:"",
        senderPhone:null,
        senderBankAccountID:null,
        senderName:null,
        receiverBankName:null,
        receiverName:null,
        receiverBankAccountID:null
    }
    componentDidMount(){
        this.getSenderPhone()
    }

    updateField=(fieldName)=>(fieldValue)=>{
        this.setState({[fieldName]:fieldValue})
    }

    getSenderPhone=()=>{
        utils.retrieveData("credentials")
        .then(JSON.parse).then(creds=>{
            this.setState({senderPhone:creds.PhoneNumber,senderName:creds.CustomerName,senderBankAccountID:creds.BankAccountID})
        })
    }

    verifyReceiver=()=>{
        fetch("http://10.0.2.2:8080/getReceiverInfo?PhoneNumber="+this.state.receiverPhone)
        .then(resp=>resp.json()).then(data=>{
                this.setState({
                    receiverName:data.CustomerName,
                    receiverBankName:data.BankName,
                    receiverBankAccountID:data.BankAccountID,
                    isReceiverVerified:true
                })
                alert(data.CustomerName+" "+data.BankName+" "+data.BankAccountID)
        })
    }
    
    makePayment=()=>{
        if(!this.state.isReceiverVerified){
            alert("Verify receiver before making payment")
            return
        }
        const payload={
            Amount:this.state.Amount,
            senderName:this.state.senderName,
            senderBankAccountID: this.state.senderBankAccountID,
            receiverBankAccountID:this.state.receiverBankAccountID,
            receiverBankName:this.state.receiverBankName,
            receiverName:this.state.receiverName
        }
        let formBody = [];
        for (let property in payload) {
        const encodedKey = encodeURIComponent(property);
        const encodedValue = encodeURIComponent(this.state[property]);
        formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");
        alert(formBody)
        fetch('http://10.0.2.2:8080/sendPayment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
          },
        body: formBody,
    }).then((response)=>response.text()).then(alert).then(()=>{this.props.navigation.navigate("Home")});
}

    render(){
        return (
            <PaymentsView makePayment={this.makePayment} update={this.updateField} verifyReceiver={this.verifyReceiver} isReceiverVerified={this.state.isReceiverVerified}/>
        )
    }
}

export default Payments