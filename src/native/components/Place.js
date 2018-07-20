import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Badge } from 'native-base';
import {BoxShadow} from 'react-native-shadow';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Styles from './Styles/PlaceStyles';
import Dimensions from 'Dimensions';
const {width, height} = Dimensions.get('window');

const shadowOpt = {
			width:(width*0.45)-20,
			height:195,
			color:"#D7E1DB",
			border:2,
			radius:5,
			opacity:0.4,
			x:0,
			y:3,
			style:{marginLeft: 15,}
}

const imageShadow = {
			width:(width*0.36),
			height:75,
			color:"#D7E1DB",
			border:2,
			radius:3,
			opacity:0.4,
			x:0,
			y:3,
			style:{}
}

export default class Place extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <TouchableOpacity>
        <View style={Styles.carouselItemWrapper}>
          <BoxShadow setting={shadowOpt}>
            <View style={Styles.carouselItem}>
              <Text style={Styles.carouselTitle}>{this.props.title}</Text>
              <Text style={Styles.carouselDistance}>{this.props.distance}</Text>
              <TouchableOpacity activeOpacity={0.7} style={Styles.favorite}>
                <Icon name="heart" color="#d5dce3" size={25} />
              </TouchableOpacity>
            </View>
          </BoxShadow>
					<View style={Styles.carouselImageWrapper}>
					<BoxShadow setting={imageShadow}>
          	<Image source={{uri: this.props.thumbnail}} style={Styles.carouselImage}/>
					</BoxShadow>
					</View>
					<View style={Styles.placeIndicatorWrapper}>
		      	<Badge style={Styles.placeIndicator}>
							<Text style={Styles.placeIndicatorText}>Cafe</Text>
		          <Icon name={this.props.type} color="#fff" size={15} style={Styles.placeIndicatorIcon} />
		        </Badge>
					</View>
        </View>
      </TouchableOpacity>
    )
  }
}
