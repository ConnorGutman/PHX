import React, {Component} from 'react';
import { View } from 'react-native';
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
			border:2,
			radius:3,
			opacity:0.4,
			x:0,
			y:3,
			style:{top: 80, left: '4%'}
}

const expandedSearch = {
  textInputContainer: {
    //left: '8%',
    //width: '84%',
    height: 45,
    //backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#fff',
  },
  textInput: {
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    color: '#696969',
    backgroundColor: 'yellow',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#fff',
    height: 45,
    fontSize: 17
  },
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
    Actions.searchPlaces()
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
      <View style={{position: 'relative', width: '100%', height: 55}}>
        <GooglePlacesAutocomplete
          placeholder='Where would you like to go?'
          placeholderTextColor="#696969"
          minLength={2}
          textInputProps={{onFocus: () => this._focusInput()}}
          autoFocus={false}
          fetchDetails={true}
          onPress={(data, details = null) => this._selectResult(data, details)}
          getDefaultValue={ () => {return '';} }
          query={{ key: 'AIzaSyDBQMpybqLH8L7Ffbf0nmtQ-ZXr2sIndOA', language: 'en', }}
          styles={{...Styles, ...this.state.inputFocused ? expandedSearch : collapsedSearch,}}
          nearbyPlacesAPI='GooglePlacesSearch'
          GooglePlacesSearchQuery={{ rankby: 'distance', types: 'food' }}
          filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']}
          predefinedPlacesAlwaysVisible={true}
          renderRightButton={() =>
            <Button style={Styles.searchButton} onPress={() => Actions.searchPlaces()}>
              <MaterialIcon size={26} name={`bus-articulated-front`} style={{ color: '#fff' }}/>
            </Button>
          }/>
      </View>
    </BoxShadow>
    );
  }
}
