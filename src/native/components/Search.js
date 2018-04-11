import React, {Component} from 'react';
import { View } from 'react-native';
import {Button} from 'native-base';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Dimensions from 'Dimensions';
const {width, height} = Dimensions.get('window');

import Styles from './Styles/SearchStyles';

const shadowExpanded = {
  position: 'absolute',
  top: 0,
  right: 0,
  left: 0,
  width: width,
  height: 145,
  backgroundColor: '#fff',
}

const shadowCollapsed = {

}

const expandedSearch = {
  textInputContainer: {
    position: 'absolute',
    top: 80,
    left: '3%',
    width: '94%',
    height: 45,
    backgroundColor: '#E9E9EF',
    borderWidth: 0,
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
  },
  textInput: {
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    color: '#696969',
    backgroundColor: '#E9E9EF',
    height: 45,
    fontSize: 17
  },
}

const collapsedSearch = {
  textInputContainer: {
    position: 'absolute',
    top: 50,
    left: '4%',
    width: '92%',
    height: 55,
    backgroundColor: '#fff',
    borderWidth: 0,
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent'
  },
  textInput: {
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    color: '#696969',
    height: 55,
    fontSize: 17
  },
}

const fromContainerCollapsed = {
  textInputContainer: {
    position: 'absolute',
    top: 50,
    left: '4%',
    width: '92%',
    height: 55,
    backgroundColor: '#fff',
    borderWidth: 0,
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent'
  },
  textInput: {
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    color: '#696969',
    height: 55,
    fontSize: 17
  },
}

const fromContainerExpanded = {
  textInputContainer: {
    position: 'absolute',
    top: 0,
    left: '3%',
    width: '94%',
    height: 70,
    backgroundColor: '#E9E9EF',
    borderWidth: 0,
    borderTopWidth: 25,
    borderTopColor: '#fff',
    borderBottomColor: 'transparent'
  },
  textInput: {
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    color: '#696969',
    backgroundColor: '#E9E9EF',
    height: 45,
    fontSize: 17
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
    this.setState({
      inputFocused: true,
    })
  }

  _selectResult(data, details) {
    //console.log(data);
    //console.log(details);
    console.log(details.formatted_address)
    this.props.goTo(details.formatted_address)
  }

  render() {
    return (
      <View>
        <View style={this.state.inputFocused ? shadowExpanded : shadowCollapsed}></View>
        <GooglePlacesAutocomplete
          placeholder='Current address'
          placeholderTextColor="#696969"
          minLength={2}
          textInputProps={{onFocus: () => this._focusInput()}}
          autoFocus={false}
          fetchDetails={true}
          onPress={(data, details = null) => this._selectResult(data, details)}
          getDefaultValue={ () => {return '';} }
          query={{ key: 'AIzaSyDBQMpybqLH8L7Ffbf0nmtQ-ZXr2sIndOA', language: 'en', }}
          styles={{...Styles, ...this.state.inputFocused ? fromContainerExpanded : fromContainerCollapsed,}}
          nearbyPlacesAPI='GooglePlacesSearch'
          GooglePlacesSearchQuery={{ rankby: 'distance', types: 'food' }}
          filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']}
          predefinedPlacesAlwaysVisible={true}
          />
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
            <Button style={Styles.searchButton}>
              <MaterialIcon size={26} name={`bus-articulated-front`} style={{ color: '#fff' }}/>
            </Button>
          }/>
      </View>
    );
  }
}
