import React from 'react';
import SlideUpPanel from 'rn-sliding-up-panel';
import AccountDetailsView from '../DetailsView';
import Loader from '../Loader';
import * as styles from './style';
import placeholderIcon from '../../assets/64x64ph.png';

const HomeView = props => (
  <styles.Container>
    <styles.BankName>{props.userCredentials.BankName}</styles.BankName>
    <styles.MenuOption onPress={props.goToPage('Payments')}>
      <styles.MenuOptionIcon source={placeholderIcon} />
      <styles.MenuOptionName>Make Payment</styles.MenuOptionName>
    </styles.MenuOption>
    <styles.MenuOption onPress={props.goToPage('Details')}>
      <styles.MenuOptionIcon source={placeholderIcon} />
      <styles.MenuOptionName>Details</styles.MenuOptionName>
    </styles.MenuOption>
    <styles.MenuOption onPress={props.goToPage('WithdrawDeposit')}>
      <styles.MenuOptionIcon source={placeholderIcon} />
      <styles.MenuOptionName>New Recipient</styles.MenuOptionName>
    </styles.MenuOption>
    <SlideUpPanel
      {...styles.SlideUpPanelStyles}
      onDrag={props.togglePageHeader}
      onDragStart={props.refreshAccountDetails}
    >
      {props.loading ? (
        <styles.BottomTabPlaceholder theme={props.theme}>
          <styles.BottomTabPlaceholderText>
            Loading Account Details...
          </styles.BottomTabPlaceholderText>
          <Loader theme={props.theme} />
        </styles.BottomTabPlaceholder>
      )
        : (
          <AccountDetailsView
            credentials={props.userCredentials}
            accountDetails={props.accountDetails}
          />
        )}
    </SlideUpPanel>
    {/* <styles.Button onPress={props.goToPage('Payments')}>
      <styles.ButtonText>
             Make a Payment
      </styles.ButtonText>
    </styles.Button>
    <styles.Button onPress={props.goToPage('Details')}>
      <styles.ButtonText>
              View Transaction Details
      </styles.ButtonText>
    </styles.Button>
    <styles.Button onPress={props.goToPage('WithdrawDeposit')}>
      <styles.ButtonText>
              Withdraw/Deposit
      </styles.ButtonText>
    </styles.Button> */}
    {/* <styles.Button onPress={props.goToPage('NewRecipient')}>
      <styles.ButtonText>
              New Recipient
      </styles.ButtonText>
    </styles.Button> */}
  </styles.Container>
);


export default HomeView;
