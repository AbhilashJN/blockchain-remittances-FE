import React from 'react';
import { ThemeProvider } from 'styled-components';
import PubNubReact from 'pubnub-react';
import HomeView from '../../components/HomeView';
import * as utils from '../../utils/common';

const PushNotification = require('react-native-push-notification');

class Home extends React.Component {
    static navigationOptions =({ navigation }) => ({
      title: navigation.getParam('userCredentials', { BankName: 'ALPHA' }).BankName,
      header: navigation.getParam('Header', undefined),
      headerLeft: null,
      headerStyle: {
        backgroundColor: navigation.getParam('theme').headerBackground,
      },
      headerTintColor: navigation.getParam('theme').headerText,
    });

    constructor(props) {
      super(props);
      this.publishKey = 'pub-c-6afff62e-d5f2-4369-9bed-5baabcf26564';
      this.subscribeKey = 'sub-c-302c34e4-d1c4-11e8-b41d-e643bd6bdd68';
      this.pubnub = new PubNubReact({
        publishKey: this.publishKey,
        subscribeKey: this.subscribeKey,
      });
      this.pubnub.init(this);
      PushNotification.configure({
        // Called when Token is generated.
        onRegister: async (token) => {
          const bankAccountID = props.navigation.getParam('userCredentials').BankAccountID;
          // alert(`bankAccountID: ${bankAccountID}`);
          // alert(`token.os: ${token.os}`);
          // const remURL = `http://pubsub.pubnub.com/v1/push/sub-key/${this.subscribeKey}/devices/${token.token}/remove?type=gcm`;
          // alert(`remURL: ${remURL}`);
          // fetch(`http://${utils.localhostURL}:8080/ping?Value=[ACC:${bankAccountID}----${remURL}]`).then(() => alert('pass 1')).catch(() => alert('fail 1'));
          // const respA = await fetch(remURL);
          // if (!respA.ok) {
          //   alert('disassociation of channels with device failed');
          // }
          // const addURL = `http://pubsub.pubnub.com/v1/push/sub-key/${this.subscribeKey}/devices/${token.token}?add=${bankAccountID}&type=gcm`;
          // alert(`addURL: ${addURL}`);
          // fetch(`http://${utils.localhostURL}:8080/ping?Value=[ACC:${bankAccountID}----${addURL}]`).then(() => alert('pass 2')).catch(() => alert('fail 2'));
          // const respB = await fetch(addURL);
          // if (!respB.ok) {
          //   alert(`association of ${bankAccountID} channel with device failed`);
          // }
          if (token.os === 'ios') {
            this.pubnub.push.addChannels(
              {
                channels: [bankAccountID],
                device: token.token,
                pushGateway: 'apns',
              },
            );
            // Send iOS Notification from debug console: {"pn_apns":{"aps":{"alert":"Hello World."}}}
          } else if (token.os === 'android') {
            alert('subing to notif channel');
            this.pubnub.push.addChannels(
              {
                channels: [bankAccountID],
                device: token.token,
                pushGateway: 'gcm', // apns, gcm, mpns
              },
            );
            // Send Android Notification from debug console: {"pn_gcm":{"data":{"message":"Hello World."}}}
          }
        },
        // Something not working?
        // See: https://support.pubnub.com/support/solutions/articles/14000043605-how-can-i-troubleshoot-my-push-notification-issues-
        // Called when a remote or local notification is opened or received.
        onNotification: (notification) => {
          alert('NOTIFICATION:');
          // Do something with the notification.
          // Required on iOS only (see fetchCompletionHandler docs: https://facebook.github.io/react-native/docs/pushnotificationios.html)
          // notification.finish(PushNotificationIOS.FetchResult.NoData);
        },
        // ANDROID: GCM or FCM Sender ID
        senderID: '300257186274',
      });
    }


    state={
      userCredentials: this.props.navigation.getParam('userCredentials'),
      accountDetails: null,
      loading: false,
    }

    componentDidMount() {
      this.getAccountDetails();
    }

    getAccountDetails=() => {
      this.setState({ loading: true });
      fetch(`http://${this.state.userCredentials.BankInfo.StellarAppURL.replace("localhost",utils.localhostURL)}/accountDetails?BankAccountID=${this.state.userCredentials.BankAccountID}`)       //eslint-disable-line
        .then(resp => resp.json())
        .then((data) => {
          this.setState({
            loading: false,
            accountDetails: data,
          });
        });
    }

    refreshAccountDetails=(v) => {
      if (v <= 150) {
        this.getAccountDetails();
      }
    }

    togglePageHeader=(v) => {
      if (v > 400) {
        this.props.navigation.setParams({ Header: null });
      } else {
        this.props.navigation.setParams({ Header: undefined });
      }
    }

    goToPage=pageName => () => this.props.navigation.navigate(pageName, { theme: this.props.navigation.getParam('theme') })


    render() {
      return (
        <ThemeProvider theme={this.props.navigation.getParam('theme')}>
          <HomeView
            goToPage={this.goToPage}
            togglePageHeader={this.togglePageHeader}
            getAccountDetails={this.getAccountDetails}
            refreshAccountDetails={this.refreshAccountDetails}
            userCredentials={this.state.userCredentials}
            accountDetails={this.state.accountDetails}
            loading={this.state.loading}
          />

        </ThemeProvider>
      );
    }
}

export default Home;
