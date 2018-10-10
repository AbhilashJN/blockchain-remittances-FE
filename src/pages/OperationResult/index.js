import React from 'react';
import { ThemeProvider } from 'styled-components';
import OperationResultView from '../../components/OperationResultView';

class OperationResult extends React.Component {
    static navigationOptions =({ navigation }) => ({
      title: '',
      header: null,
      headerStyle: {
        backgroundColor: navigation.getParam('theme').headerBackground,
      },
    });


    goToPage=(pageName, params) => () => this.props.navigation.navigate(pageName, { ...params, BankName: this.props.navigation.getParam('BankName') })

    render() {
      return (
        <ThemeProvider theme={this.props.navigation.getParam('theme')}>
          <OperationResultView
            type={this.props.navigation.getParam('type')}
            result={this.props.navigation.getParam('result')}
            messages={this.props.navigation.getParam('messages')}
            theme={this.props.navigation.getParam('theme')}
            goToPage={this.goToPage}
          />
        </ThemeProvider>
      );
    }
}

export default OperationResult;
