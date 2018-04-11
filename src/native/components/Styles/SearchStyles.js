import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  description: {
    fontWeight: 'bold'
  },
  predefinedPlacesDescription: {
    color: '#696969'
  },
  listView: {
    position: 'absolute',
    top: 105,
    left: 0,
    width: '100%',
    height: 250,
    backgroundColor: '#fff',
    zIndex: 11
  },
  separator: {
    backgroundColor: 'transparent',
    height: 10
  },
  searchButton: {
    width: '16%',
    height: '100%',
    backgroundColor: '#85B3F8',
    borderWidth: 0,
    borderRadius: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
