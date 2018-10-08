import React from 'react';
import NewRecipientView from '../../components/NewRecipientView';
import * as styles from './style';

class NewRecipient extends React.Component {
    static navigationOptions = ({ navigation }) => ({
      headerStyle: {
        backgroundColor: 'white',
      },
      headerTintColor: 'black',
      title: 'New recipient',
      headerRight: (
        <styles.HeaderBtn onPress={navigation.getParam('saveRecipient')}>
          <styles.HeaderBtnText>Save</styles.HeaderBtnText>
        </styles.HeaderBtn>),
    });


    componentDidMount() {
      this.props.navigation.setParams({ saveRecipient: this.saveRecipient });
    }

    saveRecipient=(recipientData) => {
      alert(recipientData);                                                      // eslint-disable-line
    }

    render() {
      return (
        <NewRecipientView />
      );
    }
}


export default NewRecipient;
