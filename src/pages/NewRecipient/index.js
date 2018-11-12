import React from 'react';
import { ThemeProvider } from 'styled-components';
import NewRecipientView from '../../components/NewRecipientView';
import * as utils from '../../utils/common';

class NewRecipient extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Add New Recipient',
    headerStyle: {
      backgroundColor: navigation.getParam('theme').headerBackground,
    },
    headerTintColor: navigation.getParam('theme').headerText,
  });

    state={
      name: '',
      phoneNumber: '',
      isRecipientVerified: false,
    }

    updateField=fieldName => (fieldValue) => {
      this.setState({
        [fieldName]: fieldValue,
      });
    }

    verifyRecipient=() => {
      if (this.state.phoneNumber.length < 10) {
        alert('Enter valid phone number and try again');                                      //eslint-disable-line
        return;
      }
      fetch(`http://${utils.localhostURL}:8080/getUserInfo?PhoneNumber=${this.state.phoneNumber}`)   //eslint-disable-line
        .then(resp => resp.json()).then(() => {
          this.setState({
            isRecipientVerified: true,
          });
          alert('Verified');
        })
        .catch(() => {
          alert('Unable to verify receiver');                                             //eslint-disable-line
          this.setState({
            isRecipientVerified: false,
          });
        });
    }

    saveRecipient=() => {
      if (!this.state.isRecipientVerified) {
        alert('Verify recipient first');                                              //eslint-disable-line
        return;
      }
      const recipientData = { name: this.state.name, phoneNumber: this.state.phoneNumber };
      utils.retrieveData('recipients')
        .then((recipientsList) => {
          if (recipientsList !== null) {
            return [...recipientsList].concat(recipientData);
          }
          return [recipientData];
        })
        .then((updatedList) => {
          utils.storeData('recipients', updatedList);
        })
        .then(() => {
          alert('Recipient Saved');                                                               //eslint-disable-line
        })
        .then(() => {
          this.setState({
            name: '',
            phoneNumber: '',
            isRecipientVerified: false,
          });
        });
    }

    render() {
      return (
        <ThemeProvider theme={this.props.navigation.getParam('theme')}>
          <NewRecipientView
            updateField={this.updateField}
            verifyRecipient={this.verifyRecipient}
            saveRecipient={this.saveRecipient}
            isRecipientVerified={this.state.isRecipientVerified}
            name={this.state.name}
            phoneNumber={this.state.phoneNumber}
          />
        </ThemeProvider>
      );
    }
}


export default NewRecipient;
