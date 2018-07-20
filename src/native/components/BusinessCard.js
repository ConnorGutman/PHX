import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { Container, Content, Card, CardItem, Body, Button, Text } from 'native-base';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {BoxShadow} from 'react-native-shadow';
import Dimensions from 'Dimensions';
const {width, height} = Dimensions.get('window');

import Styles from './Styles/BusinessCardStyles';

const shadowOpt = {
			width:width*0.92,
			height:250,
			color:"#D7E1DB",
			border:2,
			radius:3,
			opacity:0.4,
			x:0,
			y:3,
			style:{top: 20, left: '2%'}
}

const shadowOpt2 = {
			width:width*0.4,
			height:150,
			color:"#D7E1DB",
			border:2,
			radius:3,
			opacity:0.4,
			x:0,
			y:3,
			style:{}
}

class BusinessCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <View style={Styles.businessCardOuterWrapper}>
        <BoxShadow setting={shadowOpt}>
          <View style={Styles.businessCardInnerWrapper}>
						<View style={Styles.businessInfo}>
            <View style={Styles.whitespace}></View>
						<View style={Styles.businessMeta}>
							<Text style={Styles.title}>{this.props.title}</Text>
							<Text style={Styles.rating}>Stars</Text>
						</View>
						</View>
            <Text style={Styles.bio}>{this.props.bio}</Text>
          </View>
        </BoxShadow>
          <View style={Styles.businessCardImageWrapper}>
            <BoxShadow setting={shadowOpt2}>
              <Image source={{uri: this.props.image}} style={Styles.businessCardImage} />
            </BoxShadow>
          </View>
      </View>
    )
  }
}

export default BusinessCard;
