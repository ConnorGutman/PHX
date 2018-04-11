import React from 'react';
import { Container, Content, Card, CardItem, Body, Text } from 'native-base';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { QRCode } from 'react-native-custom-qr-codes';

import Styles from './Styles/WalletStyles';

// Ethers
const ethers = require('ethers');
const wallet = ethers.Wallet.createRandom();
console.log(`wallet: ${wallet.address}`)
console.log(`Mnemonic wallet: ${wallet.mnemonic}`)

const Wallet = () => (
  <Container style={Styles.walletWraper}>
    <Content>
      <Card style={Styles.qrCard}>
        <CardItem>
          <Body style={Styles.qrBody}>
            <QRCode color="#696969" content={wallet.address}/>
          </Body>
        </CardItem>
      </Card>
      <Card transparent style={Styles.metaCard}>
        <CardItem>
          <Body style={Styles.metaBody}>
            <Text>04/05/2018</Text>
          </Body>
        </CardItem>
      </Card>
    </Content>
  </Container>
);

export default Wallet;
