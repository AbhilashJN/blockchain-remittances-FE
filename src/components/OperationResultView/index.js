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
    <styles.Button onPress={props.goToPage('Home')}>
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
