import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import MapView from 'react-native-maps';
import { Container, Content, Text, H1, H2, H3, Button } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import AboutCallout from './AboutCallout';
import {calculateRegion} from '../../lib/MapHelpers';

import Styles from './Styles/AboutStyles'

class About extends React.Component {

  constructor(props) {
    super(props)
    /* ***********************************************************
    * STEP 1
    * Set the array of locations to be displayed on your map. You'll need to define at least
    * a latitude and longitude as well as any additional information you wish to display.
    *************************************************************/
    const locations = [
      {
        title: 'Location A',
        latitude: 37.78825,
        longitude: -122.4324
      }, {
        title: 'Location B',
        latitude: 37.75825,
        longitude: -122.4624
      }
    ]
    /* ***********************************************************
    * STEP 2
    * Set your initial region either by dynamically calculating from a list of locations (as below)
    * or as a fixed point, eg: { latitude: 123, longitude: 123, latitudeDelta: 0.1, longitudeDelta: 0.1}
    * You can generate a handy `calculateRegion` function with
    * `ignite generate map-utilities`
    *************************************************************/
    const region = calculateRegion(locations, {
      latPadding: 0.05,
      longPadding: 0.05
    })
    //const region = {latitude: 123, longitude: 123, latitudeDelta: 0.1, longitudeDelta: 0.1}
    this.state = {
      region,
      locations,
      showUserLocation: true,
      showsMyLocationButton: false
    }
    this.renderMapMarkers = this.renderMapMarkers.bind(this)
    this.onRegionChange = this.onRegionChange.bind(this)
    this._findMe = this._findMe.bind(this)
  }

  _findMe(){
  navigator.geolocation.getCurrentPosition(
    ({coords}) => {
      const {latitude, longitude} = coords
      this.setState({
        position: {
          latitude,
          longitude,
        },
        region: {
          latitude,
          longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.001,
        }
      })
      this._map.animateToRegion({
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.001
      })
    },
    (error) => alert(JSON.stringify(error)),
    {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
  )
}

  componentDidMount() {
      navigator.geolocation.getCurrentPosition(
        ({coords}) => {
          const {latitude, longitude} = coords
          this.setState({
            position: {
              latitude,
              longitude,
            },
            region: {
              latitude,
              longitude,
              latitudeDelta: 0.005,
              longitudeDelta: 0.001,
            }
          })
        },
        (error) => alert('Error: Are location services on?'),
        {enableHighAccuracy: true}
      );
      this.watchID = navigator.geolocation.watchPosition(
        ({coords}) => {
          const {lat, long} = coords
          this.setState({
            position: {
              lat,
              long
            }
          })
      },{},{});
    }
    componentWillUnmount() {
      navigator.geolocation.clearWatch(this.watchID);
    }

  componentWillReceiveProps(newProps) {
    /* ***********************************************************
    * STEP 3
    * If you wish to recenter the map on new locations any time the
    * props change, do something like this:
    *************************************************************/
    this.setState({
      region: calculateRegion(newProps.locations, {
        latPadding: 0.1,
        longPadding: 0.1
      })
    })
  }

  onRegionChange(newRegion) {
    /* ***********************************************************
    * STEP 4
    * If you wish to fetch new locations when the user changes the
    * currently visible region, do something like this:
    *************************************************************/
    // const searchRegion = {
    //   ne_lat: newRegion.latitude + newRegion.latitudeDelta / 2,
    //   ne_long: newRegion.longitude + newRegion.longitudeDelta / 2,
    //   sw_lat: newRegion.latitude - newRegion.latitudeDelta / 2,
    //   sw_long: newRegion.longitude - newRegion.longitudeDelta / 2
    // }
    // Fetch new data...
  }

  calloutPress(location) {
    /* ***********************************************************
    * STEP 5
    * Configure what will happen (if anything) when the user
    * presses your callout.
    *************************************************************/

    // console.tron.log(location)  Reactotron
  }

  renderMapMarkers(location) {
    /* ***********************************************************
    * STEP 6
    * Customize the appearance and location of the map marker.
    * Customize the callout in ./AboutCallout.js
    *************************************************************/

    return (
      <MapView.Marker key={location.title} coordinate={{
        latitude: location.latitude,
        longitude: location.longitude
      }}>
      <AboutCallout location={location} onPress={this.calloutPress}/>
    </MapView.Marker>
  )
  }

  render() {
    return (
      <View style={Styles.map}>
        <TouchableOpacity activeOpacity={0.7} style={Styles.mapButton} onPress={() => this._findMe()}>
          <Icon name="crosshairs-gps" color="#696969" size={25} />
        </TouchableOpacity>
        <MapView ref={component => {this._map = component;}} style={Styles.map} initialRegion={this.state.region}  onRegionChangeComplete={this.onRegionChange} showsUserLocation={this.state.showUserLocation} showsMyLocationButton={this.state.showsMyLocationButton} showsCompass={true}>
          {this.state.locations.map((location) => this.renderMapMarkers(location))}
        </MapView>
      </View>
    )}
}

export default About;
