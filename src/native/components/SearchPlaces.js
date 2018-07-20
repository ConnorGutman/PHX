import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { Container, Content, Card, CardItem, Body, Button, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import Styles from './Styles/SearchPlacesStyles';

import airportIcon from '../../images/places/airplane.png';
import atmIcon from '../../images/places/atm.png';
import bankIcon from '../../images/places/bank.png';
import parkIcon from '../../images/places/bench.png';
import busStopIcon from '../../images/places/bus-stop.png';
import cafeIcon from '../../images/places/coffee-shop.png';
import hospitalIcon from '../../images/places/hospital.png';
import hotelIcon from '../../images/places/hotel.png';
import libraryIcon from '../../images/places/library.png';
import mailboxIcon from '../../images/places/mailbox.png';
import mallIcon from '../../images/places/mall.png';
import museumIcon from '../../images/places/museum.png';
import pharmacyIcon from '../../images/places/pharmacy.png';
import policeIcon from '../../images/places/police-station.png';
import nightLifeIcon from '../../images/places/pub.png';
import restaurantIcon from '../../images/places/restaurant.png';
import trainIcon from '../../images/places/tram.png';
import universityIcon from '../../images/places/university.png';

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
        <Text style={Styles.bigText}>Popular Searches</Text>
          <View style={Styles.popularSearches}>
            <Grid>
              <Row>
                <Col style={Styles.popularItem}>
                  <Image source={busStopIcon} style={Styles.popularIcon}/>
                  <Text style={Styles.popularText}>Stations</Text>
                </Col>
                <Col style={Styles.popularItem}>
                  <Image source={airportIcon} style={Styles.popularIcon}/>
                  <Text style={Styles.popularText}>Airport</Text>
                </Col>
                <Col style={Styles.popularItem}>
                  <Image source={hospitalIcon} style={Styles.popularIcon}/>
                  <Text style={Styles.popularText}>Hospitals</Text>
                </Col>
                <Col style={Styles.popularItem}>
                  <Image source={universityIcon} style={Styles.popularIcon}/>
                  <Text style={Styles.popularText}>Public Services</Text>
                </Col>
              </Row>
              <Row>
                <Col style={Styles.popularItem}>
                  <Image source={restaurantIcon} style={Styles.popularIcon}/>
                  <Text style={Styles.popularText}>Food & Bars</Text>
                </Col>
                <Col style={Styles.popularItem}>
                  <Image source={cafeIcon} style={Styles.popularIcon}/>
                  <Text style={Styles.popularText}>Cafes</Text>
                </Col>
                <Col style={Styles.popularItem}>
                  <Image source={mallIcon} style={Styles.popularIcon}/>
                  <Text style={Styles.popularText}>Shopping</Text>
                </Col>
                <Col style={Styles.popularItem}>
                  <Image source={parkIcon} style={Styles.popularIcon}/>
                  <Text style={Styles.popularText}>Parks</Text>
                </Col>
              </Row>
            </Grid>
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
