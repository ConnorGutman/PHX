import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Container, Content, Card, CardItem, Body, Button, Text } from 'native-base';
import * as Progress from 'react-native-progress';
import PopupDialog, { DialogButton, SlideAnimation } from 'react-native-popup-dialog';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { QRCode } from 'react-native-custom-qr-codes';

import Styles from './Styles/WalletStyles';

// Ethers
const ethers = require('ethers');
const wallet = ethers.Wallet.createRandom();
console.log(`wallet: ${wallet.address}`)
console.log(`Mnemonic wallet: ${wallet.mnemonic}`)


var calDates = {'2012-05-20': {textColor: 'green'},
     '2012-05-22': {startingDay: true, color: 'green'},
     '2012-05-23': {selected: true, endingDay: true, color: 'green', textColor: 'gray'},
     '2012-05-04': {disabled: true, startingDay: true, color: 'green', endingDay: true}
    }

var current = new Date();
for (i = 0; i < 7; i++) {
}
var followingDay = new Date(current.getTime() + 86400000);
var bufferDate = new Date(current.getTime() + 86400000*3);
followingDay.toLocaleDateString();

const slideAnimation = new SlideAnimation({
  slideFrom: 'bottom',
});

class Wallet extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showQR: false,
    }
    //this.animate = this.animate.bind(this)
  }

  render() {
    return (
    <Container style={Styles.walletWraper}>
      <PopupDialog ref={(popupDialog) => { this.popupDialog = popupDialog; }} onShown={() => this.setState({showQR: true})} onDismissed={() => this.setState({showQR: false})} dialogAnimation={slideAnimation} width={0.9} overlayOpacity={0.6} containerStyle={Styles.popUp} dialogStyle={Styles.popUpDialog}>
        <View style={Styles.qrBody}>
          <QRCode color="#666666" backgroundColor="#fff" content={wallet.address} />
        </View>
      </PopupDialog>
      <Content>
        <Text style={Styles.bigText}>Your wallet</Text>
          <View style={Styles.idCard}>
                <View style={Styles.passText}>
                  <Text style={Styles.idName}>Regular Fare</Text>
                  <Text style={Styles.validation}>VALID</Text>
                </View>
                <Text style={Styles.timestamp}>Validated 06/22/2018 01:00PM</Text>
                <Progress.Bar progress={0.5} width={200} color={'#fff'} unfilledColor={'#8097ff'} borderWidth={2} borderColor={'#8097ff'} />
                <Text style={Styles.verificationCode}>
                  <MaterialIcon size={145} name={`fingerprint`} style={Styles.verificationIcon}/>
                </Text>
                <Text style={Styles.verificationPhrase}>QR8SK</Text>
          </View>
        <View style={Styles.actionButtons}>
          <Button borderRadius={15} androidRippleColorDark={'#000'} style={Styles.scanButton} onPress={() => { this.popupDialog.show(); }}>
            <MaterialIcon size={26} name={`qrcode`} style={{ color: '#383c4d' }}/>
            <Text style={Styles.buttonText}>Scan pass</Text>
          </Button>
          <Button borderRadius={15} style={Styles.addValueButton}>
            <MaterialIcon size={26} name={`credit-card-plus`} style={{ color: '#383c4d' }}/>
            <Text style={Styles.buttonText}>Add value</Text>
          </Button>
        </View>
        <View style={Styles.calendarCard}>
          <CalendarList horizontal={true} minDate={current} monthFormat={'MMMM'} markedDates={calDates} markingType={'period'} style={{backgroundColor: '#000'}} />
        </View>
      </Content>
      <TouchableOpacity activeOpacity={0.7} style={Styles.dismissButton} onPress={() => this.popupDialog.dismiss()}>
        <MaterialIcon name="close" color="#fff" size={25} />
      </TouchableOpacity>
    </Container>
    )
  }
}

export default Wallet;
