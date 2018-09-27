import React from 'react';
import DetailsView from '../../components/DetailsView';


class Details extends React.Component {
    static navigationOptions = {
      title: 'Details',
    };

    render() {
      return (
        <DetailsView />
      );
    }
}

export default Details;
