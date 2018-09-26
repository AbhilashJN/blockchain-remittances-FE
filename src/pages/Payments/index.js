import React from 'react';
import PaymentsView from '../../components/PaymentsView';

class Payments extends React.Component{
    static navigationOptions = {
        title: 'Payments',
      };

    state={
        to:"",
        amount:0
    }

    updateState=()=>{
        
    }

    makePayment=()=>{
        fetch('http://10.0.2.2:8080/sendPayment', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            firstParam: 'yourValue',
            secondParam: 'yourOtherValue',
        }),
    }).then((response)=>response.text()).then(alert);
}

    render(){
        return (
            <PaymentsView makePayment={this.makePayment}/>
        )
    }
}

export default Payments