import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  description: {
    fontWeight: 'bold'
  },
  predefinedPlacesDescription: {
    color: '#696969',
  },
  listView: {
    position: 'absolute',
    top: 145,
    left: 0,
    width: '100%',
    height: 250,
    backgroundColor: 'red',
    borderTopColor: '#E9E9EF',
    borderTopWidth: 5,
    zIndex: 11
  },
  searchButton: {
    width: '16%',
    height: '100%',
    backgroundColor: '#ADD0C6', // OLD #85B3F8
    borderWidth: 0,
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
