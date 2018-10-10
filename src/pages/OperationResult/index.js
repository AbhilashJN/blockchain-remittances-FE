import React from 'react';
import OperationResultView from '../../components/OperationResultView';

class OperationResult extends React.Component {
    static navigationOptions = {
      title: '',
      header: null,
    };


    goToPage=pageName => () => this.props.navigation.navigate(pageName)

    render() {
      return (
        <OperationResultView type={this.props.navigation.getParam('type')} result={this.props.navigation.getParam('result')} messages={this.props.navigation.getParam('messages')} goToPage={this.goToPage} />
      );
    }
}

export default OperationResult;
