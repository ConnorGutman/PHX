import React, {Component} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {Button} from 'native-base';
import {BoxShadow} from 'react-native-shadow';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Dimensions from 'Dimensions';
const {width, height} = Dimensions.get('window');

import Styles from './Styles/SearchStyles';

const shadowOpt = {
			width:width*0.92,
			height:55,
			color:"#D7E1DB",
			radius:3,
			opacity:0.4,
			x:0,
			y:3,
			style:{top: 80, left: '4%'}
}

const collapsedSearch = {
  textInputContainer: {
    //position: 'absolute',
    //top: 50,
    //left: '2%',
    width: '100%',
    height: 55,
    backgroundColor: '#fff',
    borderWidth: 0,
    borderColor: '#fff',
    borderRadius: 2,
  },
  textInput: {
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    color: '#696969',
    height: 55,
    fontSize: 17,
    borderWidth: 1,
    borderColor: '#fff',
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 2,
    borderTopLeftRadius: 2,
    backgroundColor: '#fff',
  },
}

export default class Search extends Component {

  constructor(props) {
    super(props)

    this.state = {
      inputFocused: false,
    }

    this._focusInput = this._focusInput.bind(this);
    this._selectResult = this._selectResult.bind(this);
  }

  _focusInput() {
    //Actions.searchPlaces()
    //this.setState({
      //inputFocused: true,
    //})
  }

  _selectResult(data, details) {
    //console.log(data);
    //console.log(details);
    console.log(details.formatted_address)
    this.props.goTo(details.formatted_address)
  }

  render() {
    return (
      <BoxShadow setting={shadowOpt}>
      <View style={{position: 'relative', width: '100%', height: 55, borderColor: 'transparent', borderWidth: 1, borderRadius: 2, backgroundColor: '#fff'}}>
				<TouchableOpacity>
				<Text style={{width: '84%', margin: 0, paddingLeft: 15, color: '#696969', height: 55, lineHeight: 55, fontSize: 17, borderWidth: 1, borderColor: '#fff', borderTopRightRadius: 0, borderBottomRightRadius: 0, borderBottomLeftRadius: 2, borderBottomRightRadius: 2,}}>Where would you like to go?</Text>
				</TouchableOpacity>
				<Button style={Styles.searchButton}>
					<MaterialIcon size={26} name={`bus-articulated-front`} style={{ color: '#fff' }}/>
				</Button>
      </View>
    </BoxShadow>
    );
  }
}
