import React from 'react';
import * as styles from './style';
import tickIcon from '../../assets/checked.png';
import crossIcon from '../../assets/cancel.png';


const OperationResultView = props => (
  <styles.Container>
    <styles.ResultIcon source={props.result === 'success' ? tickIcon : crossIcon} />
    <styles.ResultText>
      {`${props.type} ${props.result}!`}
    </styles.ResultText>
    {props.messages && (
    <styles.Message>
      {
        props.messages.map(msg => <styles.MessageText key={msg}>{msg}</styles.MessageText>)
      }
    </styles.Message>
    )}
    <styles.Button onPress={props.goToPage('Home', { theme: props.theme })}>
      <styles.ButtonText>
              Home
      </styles.ButtonText>
    </styles.Button>
  </styles.Container>
);
OperationResultView.defaultProps = {
};
OperationResultView.propTypes = {
};
export default OperationResultView;
