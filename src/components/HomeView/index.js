import React from 'react';
import SlideUpPanel from 'rn-sliding-up-panel';
import AccountDetailsView from '../DetailsView';
import Loader from '../Loader';
import * as styles from './style';
import paymentIcon from '../../assets/menuPayment.png';
import newRecipientIcon from '../../assets/menuNewRecipient.png';

const HomeView = props => (
  <styles.Container>
    <styles.BankName>{props.userCredentials.BankName}</styles.BankName>
    <styles.MenuOption onPress={props.goToPage('Payments')}>
      <styles.MenuOptionIcon source={paymentIcon} />
      <styles.MenuOptionName>Make Payment</styles.MenuOptionName>
    </styles.MenuOption>
    <styles.MenuOption onPress={props.goToPage('WithdrawDeposit')}>
      <styles.MenuOptionIcon source={newRecipientIcon} />
      <styles.MenuOptionName>Withdraw/Deposit</styles.MenuOptionName>
    </styles.MenuOption>
    <styles.MenuOption onPress={props.goToPage('NewRecipient')}>
      <styles.MenuOptionIcon source={newRecipientIcon} />
      <styles.MenuOptionName>Add New Recipient</styles.MenuOptionName>
    </styles.MenuOption>
    <SlideUpPanel
      {...styles.SlideUpPanelStyles}
      onDrag={props.togglePageHeader}
      onDragStart={props.refreshAccountDetails}
      ref={props.setSliderRef}
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
  </styles.Container>
);


export default HomeView;
