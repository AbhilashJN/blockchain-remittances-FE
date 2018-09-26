import React from 'react';
import * as styles from './style'


 const HomeView = (props) => 
      (<styles.Container>
          <styles.Button onPress={props.goToPage('Payments')}>
            <styles.ButtonText>
             Payment page
            </styles.ButtonText>
        </styles.Button>
        <styles.Button  onPress={props.goToPage('Details')}>
            <styles.ButtonText>
              Details page
            </styles.ButtonText>
        </styles.Button>
        <styles.Button onPress={props.goToPage('Registration')}>
            <styles.ButtonText>
              Registration page
            </styles.ButtonText>
        </styles.Button>
        </styles.Container>
           );


export default HomeView;