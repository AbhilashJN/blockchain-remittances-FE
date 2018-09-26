import React from 'react';
import HomeView from '../../components/HomeView';

class Home extends React.Component {
    static navigationOptions = {
      title: 'Home',
    };

    goToPage=(pageName)=>() => this.props.navigation.navigate(pageName)

    render() {
      return (
        <HomeView goToPage={this.goToPage}/>
      );
    }
  }

  export default Home