import React from 'react';
import * as styles from './style';
import loader from '../../assets/loader128px.gif';

const Loader = props => (
  <styles.Container theme={props.theme}>
    <styles.LoaderIcon source={loader} />
  </styles.Container>
);
Loader
  .defaultProps = {
  };
Loader
  .propTypes = {
  };
export default Loader;
