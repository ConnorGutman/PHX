import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { Callout } from 'react-native-maps'
import busIcon from '../../images/bus.png'
import airportIcon from '../../images/places/airplane.png'
import Styles from './Styles/AboutCalloutStyles'

export default class AboutCallout extends React.Component {
  constructor (props) {
    super(props)
    this.onPress = this.props.onPress.bind(this, this.props.location)
  }

  render () {
    /* ***********************************************************
    * Customize the appearance of the callout that opens when the user interacts with a marker.
    * Note: if you don't want your callout surrounded by the default tooltip, pass `tooltip={true}` to `Callout`
    *************************************************************/
    const { location } = this.props
    return (
      <Callout tooltip={true} style={Styles.callout}>
        <View style={Styles.container}>
        <View style={Styles.bubble}>
          <View style={Styles.amount}>
            <TouchableOpacity onPress={this.onPress}>
              <Text style={Styles.vehicleTitle}>Vehicle Info</Text>
              <Text style={Styles.vehicleDetails}>Route: {location.route}</Text>
              <Text style={Styles.vehicleDetails}>License Plate: {location.licensePlate}</Text>
              <Text style={Styles.vehicleDetails}>Speed: {location.speed}MPH</Text>
            </TouchableOpacity>
          </View>
          </View>
       </View>
       <View style={Styles.arrowBorder} />
       <View style={Styles.arrow} />
      </Callout>
    )
  }
}
