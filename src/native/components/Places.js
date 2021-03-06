import React from 'react';
import PropTypes from 'prop-types';
import { Dimensions, View, FlatList, TouchableOpacity, RefreshControl, Image, Text } from 'react-native';
import MapView, { ProviderPropType, Marker, AnimatedRegion } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { Container, Content, Card, CardItem, Body, Button } from 'native-base';
import Carousel from 'react-native-snap-carousel';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {calculateRegion} from '../../lib/MapHelpers';

import modernTriangleIcon from '../../images/modernTriangleGreen.png';
import arrowIcon from '../../images/arrow.png';
import dotIcon from '../../images/dot.png';

import Loading from './Loading';
import Error from './Error';
import Header from './Header';
import Search from './Search';
import Spacer from './Spacer';
import Place from './Place';

import Styles from './Styles/AboutStyles';

const origin = 'Desoto Market';
const GOOGLE_MAPS_APIKEY = 'AIzaSyBKRwVucW38SzlhVysF0wzq0TATsR03_9I';

const mapStyles = [
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "lightness": "-10"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#a0a4a5"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#62838e"
            }
        ]
    },
    {
    'featureType': 'all',
    'elementType': 'geometry',
    'stylers': [{
      'color': '#ecf6ff'
    }, {
      'visibility': 'on'
    }]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ecf6ff"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#3f4a51"
            },
            {
                "weight": "0.30"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "poi.attraction",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.government",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#b1dfc8"
            }
        ]
    },
    {
        "featureType": "poi.place_of_worship",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.school",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.sports_complex",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "-100"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#bbcacf"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "lightness": "0"
            },
            {
                "color": "#bbcacf"
            },
            {
                "weight": "0.50"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#a9b4b8"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "invert_lightness": true
            },
            {
                "saturation": "-7"
            },
            {
                "lightness": "3"
            },
            {
                "gamma": "1.80"
            },
            {
                "weight": "0.01"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit.station",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit.station",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit.station",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#b3e0fa"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    }
];

const entries = [
    {
        title: 'Royal Coffee Bar',
        address: '502 S College Ave, Tempe, AZ 85281',
        type: 'coffee',
        distance: '0.2 Mi away',
        thumbnail: 'https://raillife.com/wp-content/uploads/2014/09/Royal-Coffee-Tempe.jpg?x74949',
        lat: 33.4374644,
        lng: -112.0705272
    },
    {
        title: 'Cartel Coffee Lab',
        address: '225 W University Dr #101, Tempe, AZ 85281',
        type: 'coffee',
        distance: '1 Mi away',
        thumbnail: 'https://media.bizj.us/view/img/9615002/cartelchemex-servicemed-res*750xx2808-1583-0-96.jpg',
        lat: 33.421133,
        lng: -111.9447876,
    },
    {
        title: 'Infusion',
        address: '1301 E University Dr, Tempe, AZ 85281',
        type: 'coffee',
        distance: '1.25 Mi away',
        thumbnail: 'https://awarelabs-lq5s8w62.s3.amazonaws.com/gallery/lCO59BsD.jpg',
        lat: 33.419531,
        lng: -111.9192487,
    },
    {
        title: 'Be Coffee',
        address: '214 E Roosevelt St, Phoenix, AZ 85004',
        type: 'coffee',
        distance: '4 Mi away',
        thumbnail: 'https://media-cdn.tripadvisor.com/media/photo-w/12/74/18/29/front-entrance-off-of.jpg',
        lat: 33.4587937,
        lng: -112.0727027,
    },
    {
        title: 'Fair Trade Cafe',
        address: '1020 N 1st Ave, Phoenix, AZ 85003',
        type: 'coffee',
        distance: '4 Mi away',
        thumbnail: 'http://flourishphx.com/wp-content/uploads/2014/10/fairtrade3.jpg',
        lat: 33.4593921,
        lng: -112.0765234
    },
    {
        title: 'Lux Central',
        address: '4402 N Central Ave, Phoenix, AZ 85012',
        type: 'coffee',
        distance: '6 Mi Away',
        thumbnail: 'https://i2.wp.com/endoedibles.com/wp-content/uploads/2017/01/DSC01107.jpg',
        lat: 33.500484,
        lng: -112.0762647
    }
];

class PlacesElementListing extends React.Component {
  constructor(props) {
    super(props)
    /* ***********************************************************
    * STEP 1
    * Set the array of locations to be displayed on your map. You'll need to define at least
    * a latitude and longitude as well as any additional information you wish to display.
    *************************************************************/
    const locations = this.props.placesElements;
    /* ***********************************************************
    * STEP 2
    * Set your initial region either by dynamically calculating from a list of locations (as below)
    * or as a fixed point, eg: { latitude: 123, longitude: 123, latitudeDelta: 0.1, longitudeDelta: 0.1}
    * You can generate a handy `calculateRegion` function with
    * `ignite generate map-utilities`
    *************************************************************/
    /*const region = calculateRegion(this.props.metroElements, {
      latPadding: 0.05,
      longPadding: 0.05
    })*/
    const region = {latitude: 33.4521356, longitude: -112.0764201, latitudeDelta: 0.1, longitudeDelta: 0.1}
    this.state = {
      region,
      locations,
      showUserLocation: true,
      showsMyLocationButton: false,
      startTransition: 1,
      endTransition: 4,
      destination: 'Royal Coffee Bar'
    }
    this.renderMapMarkers = this.renderMapMarkers.bind(this)
    this.onRegionChange = this.onRegionChange.bind(this)
    this._findMe = this._findMe.bind(this)
    this._goTo = this._goTo.bind(this)
    this._focusLocation = this._focusLocation.bind(this)
    //this.animate = this.animate.bind(this)
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
          latitudeDelta: 0.01,
          longitudeDelta: 0.01
      })
    },
    (error) => alert(JSON.stringify(error)),
    {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
  )
}

_goTo(location) {
  alert(location)
  console.log(location)
}

/*animate() {
  const {startTransition, endTransition} = this.state;
  if(startTransition < endTransition){
    let currentTransition = startTransition + 1;
    this.setState({startTransition: currentTransition});
  } else {
    this.setState({startTransition: 1});
  }
  let x = setTimeout(()=>{
    this.animate()
  }, 5);
} */

/*renderImg(imgTrans) {
  if(imgTrans === 1) {
    return require('../../images/triangle.png');
  }
  if(imgTrans === 2) {
    return require('../../images/triangle.png');
  }
  if(imgTrans === 3) {
    return require('../../images/triangle.png');
  }
  if(imgTrans === 4) {
    return require('../../images/triangle.png');
  }
} */

componentDidMount() {
    //this.animate();
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

    this._findMe();
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  componentWillReceiveProps(newProps) {
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

    // Start indicator animation
    const {startTransition} = this.state;

    return (
      <MapView.Marker key={location.id} image={modernTriangleIcon} optimized={false} coordinate={{
        latitude: location.latitude,
        longitude: location.longitude
      }} style={{transform: [{rotate: `${location.bearing}deg`}]}}>
    </MapView.Marker>
  )
  }

  _renderItem ({item, index}) {
    return (
        <Place title={item.title} type={item.type} distance={item.distance} thumbnail={item.thumbnail}/>
    );
  }

  _focusLocation (place) {
    this.setState({
      destination: entries[place].address,
    })
    {/*this._map.animateToRegion({
        latitude: entries[place].lat,
        longitude: entries[place].lng,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
    })*/}
  }

  render() {
  // Loading
  if (this.props.loading) return <Loading />;

  // Error
  if (this.props.error) return <Error content={error} />;

  const keyExtractor = item => item.id;

  const onPress = item => Actions.placesElement({ match: { params: { id: String(item.id) } } });

  return (
    <View style={Styles.mapWraper}>
      <TouchableOpacity activeOpacity={0.7} style={Styles.mapButton2} onPress={() => this._findMe()}>
        <Icon name="crosshairs-gps" color="#696969" size={25} />
      </TouchableOpacity>
      <Search goTo={() => this._goTo()} />
      <View style={Styles.carouselWrapper}>
        <Carousel
                  layout={'default'}
                  data={entries}
                  renderItem={this._renderItem}
                  sliderWidth={Dimensions.get('window').width}
                  itemWidth={(Dimensions.get('window').width)*0.45}
                  inactiveSlideScale={0.95}
                  inactiveSlideOpacity={1}
                  enableMomentum={true}
                  onSnapToItem={(place) => this._focusLocation(place) }
                  activeSlideAlignment={'start'}
                  activeAnimationType={'spring'}
                  activeAnimationOptions={{
                      friction: 4,
                      tension: 40
                  }}
                  containerCustomStyle={Styles.carouselContainer}
                  contentContainerCustomStyle={Styles.carouselContentContainer}
                />
              </View>
      <MapView ref={component => {this._map = component;}} style={Styles.map} customMapStyle={mapStyles} initialRegion={this.state.region}  onRegionChangeComplete={this.onRegionChange} showsUserLocation={this.state.showUserLocation} showsMyLocationButton={this.state.showsMyLocationButton} showsCompass={true}>
        <MapViewDirections
    mode="transit"
    origin={this.state.region}
    destination={this.state.destination}
    apikey={GOOGLE_MAPS_APIKEY}
    strokeWidth={5}
    strokeColor='#AACFD5'
    lineCap="round"
    lineJoin="round"
  />
      </MapView>
    </View>
  );
}
}

PlacesElementListing.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  placesElements: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  reFetch: PropTypes.func,
};

PlacesElementListing.defaultProps = {
  error: null,
  reFetch: null,
};

export default PlacesElementListing;
