import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Container, Content, Card, CardItem, Body, Button, Text } from 'native-base';
import BoxShadow from 'react-native-shadow';
import * as Progress from 'react-native-progress';
import PopupDialog, { DialogButton, SlideAnimation } from 'react-native-popup-dialog';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import QRCode from 'react-native-custom-qr-codes';
import Dimensions from 'Dimensions';
const {width, height} = Dimensions.get('window');

import Styles from './Styles/WalletStyles';

const shadowOpt = {
			width:(width - 30),
			height:150,
			color:"#ADD0C6",
			border:2,
			radius:15,
			opacity:0.4,
			x:0,
			y:3,
			style:{marginTop: 15, marginBottom: 25}
}

const ethers = require('ethers');
const wallet = ethers.Wallet.createRandom();
console.log(`wallet: ${wallet.address}`)
console.log(`Mnemonic wallet: ${wallet.mnemonic}`)


var calDates = {
     '2018-07-03': {startingDay: true, color: '#5FA390', textColor: '#fff'},
     '2018-07-04': {color: '#5FA390', textColor: '#ADD0C6'},
     '2018-07-05': {color: '#5FA390', textColor: '#ADD0C6'},
     '2018-07-06': {color: '#5FA390', textColor: '#ADD0C6'},
     '2018-07-07': {color: '#5FA390', textColor: '#ADD0C6'},
     '2018-07-08': {color: '#5FA390', textColor: '#ADD0C6'},
     '2018-07-09': {color: '#5FA390', textColor: '#ADD0C6'},
     '2018-07-10': {color: '#5FA390', textColor: '#ADD0C6'},
     '2018-07-11': {color: '#5FA390', textColor: '#ADD0C6'},
     '2018-07-12': {color: '#5FA390', textColor: '#ADD0C6'},
     '2018-07-13': {color: '#5FA390', textColor: '#ADD0C6'},
     '2018-07-14': {color: '#5FA390', textColor: '#ADD0C6'},
     '2018-07-15': {color: '#5FA390', textColor: '#ADD0C6'},
     '2018-07-16': {color: '#5FA390', textColor: '#ADD0C6'},
     '2018-07-17': {color: '#5FA390', textColor: '#ADD0C6', endingDay: true}
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
  }

  render() {
    return (
    <Container style={Styles.walletWraper}>
      <PopupDialog ref={(popupDialog) => { this.popupDialog = popupDialog; }} onShown={() => this.setState({showQR: true})} onDismissed={() => this.setState({showQR: false})} dialogAnimation={slideAnimation} width={260} height={260} overlayOpacity={0.3} containerStyle={Styles.popUp} dialogStyle={Styles.popUpDialog}>
        <View style={Styles.qrBody}>
          <QRCode color="#666666" backgroundColor="#fff" content={wallet.address} />
        </View>
      </PopupDialog>
      <Content>
        <Text style={Styles.bigText}>Your wallet</Text>
          <BoxShadow setting={shadowOpt}>
            <View style={Styles.idCard}>
                  <View style={Styles.passText}>
                    <Text style={Styles.idName}>Regular Fare</Text>
                    <Text style={Styles.validation}>VALID</Text>
                  </View>
                  <Text style={Styles.timestamp}>Validated 06/22/2018 01:00PM</Text>
                  <Progress.Bar progress={0.5} width={200} color={'#fff'} unfilledColor={'#ADD0C6'} borderWidth={2} borderColor={'#ADD0C6'} />
                  <Text style={Styles.verificationCode}>
                    <MaterialIcon size={145} name={`fingerprint`} style={Styles.verificationIcon}/>
                  </Text>
                  <Text style={Styles.verificationPhrase}>QR8SK</Text>
            </View>
        </BoxShadow>
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
          <CalendarList horizontal={true} pagingEnabled={true} calendarWidth={width - 30} minDate={current} monthFormat={'MMMM'} pastScrollRange={0} markedDates={calDates} markingType={'period'} />
        </View>
      </Content>
      { this.state.showQR ?
        <View style={Styles.dismissButtonWrapper}>
        <TouchableOpacity activeOpacity={0.7} style={Styles.dismissButton} onPress={() => this.popupDialog.dismiss()}>
          <MaterialIcon name="close" color="#fff" size={25} />
        </TouchableOpacity></View> : null
      }
    </Container>
    )
  }
}

export default Wallet;
