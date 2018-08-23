import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { Container, Content, Card, CardItem, Body, Button, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {BoxShadow} from 'react-native-shadow';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Dimensions from 'Dimensions';
const {width, height} = Dimensions.get('window');

import Styles from './Styles/SearchPlacesStyles';

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

class SearchPlaces extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
    <Container style={Styles.searchPlacesWraper}>
      <Content>
        <View style={Styles.searchBar}>

        </View>
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
          styles={{...collapsedSearch,}}
          nearbyPlacesAPI='GooglePlacesSearch'
          GooglePlacesSearchQuery={{ rankby: 'distance', types: 'food' }}
          filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']}
          predefinedPlacesAlwaysVisible={true}
          renderRightButton={() =>
            <Button style={Styles.searchButton} onPress={() => Actions.searchPlaces()}>
              <MaterialIcon size={26} name={`bus-articulated-front`} style={{ color: '#fff' }}/>
            </Button>
          }/>
        <Text style={Styles.bigText}>Popular Searches</Text>
          <View style={Styles.popularSearches}>
          </View>
          <Text style={Styles.bigText}>Other Searches</Text>
            <View style={Styles.otherSearches}>

            </View>
      </Content>
    </Container>
    )
  }
}

export default SearchPlaces;
