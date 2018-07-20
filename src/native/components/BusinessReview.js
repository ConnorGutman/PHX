import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { Container, Content, Card, CardItem, Body, Button, Text } from 'native-base';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {BoxShadow} from 'react-native-shadow';
import Dimensions from 'Dimensions';
const {width, height} = Dimensions.get('window');

import Styles from './Styles/BusinessReviewStyles';

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

class BusinessReview extends React.Component {
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
						<View style={Styles.businessMeta}>
							<Text style={Styles.title}>{this.props.title}Name</Text>
							<Text style={Styles.rating}>Date</Text>
						</View>
						<Text>Stars</Text>
						<Text>Avatar</Text>
						</View>
            <Text style={Styles.bio}>Review{this.props.bio}</Text>
          </View>
        </BoxShadow>
      </View>
    )
  }
}

export default BusinessReview;
