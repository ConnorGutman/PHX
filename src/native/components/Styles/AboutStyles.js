import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  mapWraper: {
    // For Android :/
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1
  },
  mapButton: {
   position: 'absolute',
   bottom: 25,
   right: 15,
   width: 55,
   height: 55,
   borderRadius: 85/2,
   backgroundColor: '#fff',
   justifyContent: 'center',
   alignItems: 'center',
   shadowColor: 'black',
   shadowRadius: 8,
   shadowOpacity: 0.12,
   opacity: 1,
   zIndex: 10,
}
})
