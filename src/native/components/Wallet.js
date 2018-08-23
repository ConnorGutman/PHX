import React from 'react';
import { Modal, View, TouchableOpacity } from 'react-native';
import { Container, Content, Card, CardItem, Body, Button, Text } from 'native-base';
import BoxShadow from 'react-native-shadow';
import * as Progress from 'react-native-progress';
import { PopupDialog, DialogButton, SlideAnimation } from 'react-native-popup-dialog';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { QRCode } from 'react-native-custom-qr-codes';
import Dimensions from 'Dimensions';

//Fixes calendar swipe issues for some reason?
import 'core-js/es6/symbol';
import 'core-js/fn/symbol/iterator';

const {width, height} = Dimensions.get('window');

import Styles from './Styles/WalletStyles';

const ethers = require('ethers');
const wallet = ethers.Wallet.createRandom();
const qrContents = wallet.address.toString();
console.log(qrContents);
console.log(`wallet: ${wallet.address}`)
console.log(`Mnemonic wallet: ${wallet.mnemonic}`)


var calDates = {
     '2018-08-22': {startingDay: true, color: '#5FA390', textColor: '#fff'},
     '2018-08-23': {color: '#5FA390', textColor: '#ADD0C6'},
     '2018-08-24': {color: '#5FA390', textColor: '#ADD0C6'},
     '2018-08-25': {color: '#5FA390', textColor: '#ADD0C6'},
     '2018-08-26': {color: '#5FA390', textColor: '#ADD0C6'},
     '2018-08-27': {color: '#5FA390', textColor: '#ADD0C6'},
     '2018-08-28': {color: '#5FA390', textColor: '#ADD0C6'},
     '2018-08-29': {color: '#5FA390', textColor: '#ADD0C6'},
     '2018-08-30': {color: '#5FA390', textColor: '#ADD0C6'},
     '2018-08-31': {color: '#5FA390', textColor: '#ADD0C6'},
     '2018-09-01': {color: '#5FA390', textColor: '#ADD0C6'},
     '2018-09-02': {color: '#5FA390', textColor: '#ADD0C6'},
     '2018-09-03': {color: '#5FA390', textColor: '#ADD0C6'},
     '2018-09-04': {color: '#5FA390', textColor: '#ADD0C6'},
     '2018-09-05': {color: '#5FA390', textColor: '#ADD0C6', endingDay: true}
    }

var current = new Date();
for (i = 0; i < 7; i++) {
}
var followingDay = new Date(current.getTime() + 86400000);
var bufferDate = new Date(current.getTime() + 86400000*3);
followingDay.toLocaleDateString();

class Wallet extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showQR: false,
    }
    this.setModalVisible = this.setModalVisible.bind(this);
  }

  setModalVisible(visible) {
    this.setState({showQR: visible});
  }

  render() {
    return (
    <Container style={Styles.walletWraper}>
    <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.showQR}
          onRequestClose={() => this.setModalVisible(false)}>
          <View style={{marginTop: 175}}>
            <View style={Styles.qrBody}>
              <QRCode color="#666666" backgroundColor="#fff" content={qrContents} />
          <TouchableOpacity activeOpacity={0.7} style={Styles.dismissButton} onPress={() => {
                  this.setModalVisible(!this.state.showQR);
                }}>
          <MaterialIcon name="close" color="#fff" size={25} />
        </TouchableOpacity>
            </View>
          </View>
        </Modal>
      <Content>
        <Text style={Styles.bigText}>Your wallet</Text>
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
        <View style={Styles.actionButtons}>
          <Button borderRadius={15} androidRippleColorDark={'#000'} style={Styles.scanButton} onPress={() => {  this.setModalVisible(true); }}>
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
    </Container>
    )
  }
}

export default Wallet;
