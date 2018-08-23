import React from 'react';
import { View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Badge, Container, Content, Card, CardItem, Body, Button, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Carousel from 'react-native-snap-carousel';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Dimensions from 'Dimensions';
const {width, height} = Dimensions.get('window');


import Styles from './Styles/BusinessPageStyles';

// Ethers
const ethers = require('ethers');
const wallet = ethers.Wallet.createRandom();
console.log(`wallet: ${wallet.address}`)
console.log(`Mnemonic wallet: ${wallet.mnemonic}`)

const photos = [
    {
        thumbnail: 'https://raillife.com/wp-content/uploads/2014/09/Royal-Coffee-Tempe.jpg?x74949',
        caption: 'Stumptown Interior'
    },
    {
        thumbnail: 'https://raillife.com/wp-content/uploads/2014/09/Royal-Coffee-Tempe.jpg?x74949',
        caption: 'Stumptown Interior'
    },
    {
        thumbnail: 'https://raillife.com/wp-content/uploads/2014/09/Royal-Coffee-Tempe.jpg?x74949',
        caption: 'Stumptown Interior'
    }
];

const details = [
  {
    icon: 'wifi',
    caption: 'WiFi',
    val: 'yes'
  },
  {
    icon: 'bike',
    caption: 'Bike Rack',
    val: 'yes'
  },
  {
    icon: 'wheelchair-accessibility',
    caption: 'Handicap',
    val: 'yes'
  },
  {
    icon: 'smoking-off',
    caption: 'Smoking',
    val: 'no'
  },
  {
    icon: 'leaf',
    caption: 'Vegan Options',
    val: 'yes'
  },
];

class BusinessPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Royal Coffee Bar',
      address: '502 S College Ave, Tempe, AZ 85281',
      type: 'coffee',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet efficitur ligula, non varius justo. Mauris non augue et libero finibus molestie. Maecenas arcu enim, volutpat blandit iaculis nec, dignissim ut velit. Vestibulum est velit, ultricies quis dictum et, mattis in erat. Quisque varius aliquet tortor ac cursus. Duis ut porta felis, ut suscipit ipsum. Quisque tempus sagittis libero vitae molestie. Proin suscipit, ligula eget mollis pharetra, augue purus finibus turpis, et egestas ex sapien nec dui. Integer nec libero urna. Vestibulum ut arcu ac dui dictum posuere ac a elit. Pellentesque luctus vitae nulla in tempor. Suspendisse potenti. Proin id leo porta, hendrerit eros non, venenatis ex. Nulla in tincidunt mauris, quis feugiat nunc.'
    }

    this._renderImage = this._renderImage.bind(this);
    this._renderDetail = this._renderDetail.bind(this);
  }

  _renderImage ({item, index}) {
    return (
        <Image source={{uri: item.thumbnail}} style={Styles.carouselImage} />
    );
  }

  _renderDetail ({item, index}) {
    return (
      <View style={Styles.detailCard} elevation={5}>
        <MaterialIcon name={item.icon} color="#5fa390" size={32} style={Styles.detailIcon} />
        <Text style={Styles.detailCaption}>{item.caption}</Text>
        <Text style={Styles.detailVal}>{item.val}</Text>
      </View>
    );
  }

  render() {
    return (
    <Container style={Styles.businessPageWrapper}>
      <Content>
      <ScrollView style={{height: (height - 75)}}>
          <Carousel
            layout={'default'}
            data={photos}
            renderItem={this._renderImage}
            sliderWidth={width}
            itemWidth={width}
            inactiveSlideScale={0.95}
            inactiveSlideOpacity={1}
            enableMomentum={true}
            activeSlideAlignment={'start'}
            activeAnimationType={'spring'}
            activeAnimationOptions={{
              friction: 4,
              tension: 30
            }}
            containerCustomStyle={Styles.photosCarouselContainer}
            contentContainerCustomStyle={Styles.photosCarouselContentContainer}
          />
          <View style={Styles.basicInfo}>
            <Text style={Styles.businessTitle}>{this.state.title}</Text>
            <Text style={Styles.businessAddress}>{this.state.address}</Text>
            <View style={Styles.placeIndicatorWrapper}>
              <MaterialIcon name='clock' color="#fff" size={16} style={Styles.placeIndicatorIcon} />
    					<Text style={Styles.placeIndicatorText}>Open now</Text>
    				</View>
          </View>
          <View style={Styles.placeDetails}>
            <Text style={Styles.detailsHeading}>Details</Text>
            <Carousel
              layout={'default'}
              data={details}
              renderItem={this._renderDetail}
              sliderWidth={width}
              itemWidth={width*0.33}
              inactiveSlideScale={0.95}
              inactiveSlideOpacity={1}
              enableMomentum={true}
              activeSlideAlignment={'start'}
              activeAnimationType={'spring'}
              activeAnimationOptions={{
                friction: 4,
                tension: 30
              }}
              containerCustomStyle={Styles.detailsCarouselContainer}
              contentContainerCustomStyle={Styles.detailsCarouselContentContainer}
              />
          </View>
          <View style={Styles.placeHours}>
            <Text style={Styles.hoursHeading}>Hours</Text>
            <Grid>
              <Row>
                <Col>
                  <Text style={{fontWeight: 'bold', color: '#5fa390'}}>Sunday</Text>
                </Col>
                <Col>
                  <Text style={{fontWeight: 'bold', color: '#5fa390', textAlign: 'right'}}>6:00AM - 10:00PM</Text>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Text>Monday</Text>
                </Col>
                <Col>
                  <Text style={Styles.hours}>6:00AM - 10:00PM</Text>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Text>Tuesday</Text>
                </Col>
                <Col>
                  <Text style={Styles.hours}>6:00AM - 10:00PM</Text>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Text>Wednesday</Text>
                </Col>
                <Col>
                  <Text style={Styles.hours}>6:00AM - 10:00PM</Text>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Text>Thursday</Text>
                </Col>
                <Col>
                  <Text style={Styles.hours}>6:00AM - 10:00PM</Text>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Text>Friday</Text>
                </Col>
                <Col>
                  <Text style={Styles.hours}>6:00AM - 10:00PM</Text>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Text>Saturday</Text>
                </Col>
                <Col>
                  <Text style={Styles.hours}>6:00AM - 10:00PM</Text>
                </Col>
              </Row>
            </Grid>
          </View>
        <View style={Styles.placeDescription}>
          <Text style={Styles.descriptionHeading}>Description</Text>
          <Text selectable style={Styles.bio}>{this.state.bio}</Text>
        </View>
        <View style={Styles.reviews}>
        </View>
      </ScrollView>
      <Button style={Styles.navigationButton}>
        <Text style={Styles.navigationButtonText}>Get directions</Text>
      </Button>
      </Content>
    </Container>
    )
  }
}

export default BusinessPage;
