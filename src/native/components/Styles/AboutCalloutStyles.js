import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  callout: {
  },
  container: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
  },
  bubble: {
    width: 140,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 2,
    borderColor: '#dedede',
    borderWidth: 2,
  },
  amount: {
    flex: 1,
  },
  arrow: {
    backgroundColor: 'transparent',
    borderWidth: 16,
    borderColor: 'transparent',
    borderTopColor: '#fff',
    alignSelf: 'center',
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderWidth: 16,
    borderColor: 'transparent',
    borderTopColor: '#fff',
    alignSelf: 'center',
    marginTop: -0.5,
  },
  vehicleTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  vehicleDetails: {
    textAlign: 'center'
  }
})
