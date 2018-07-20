import {
  StyleSheet
} from 'react-native'

export default StyleSheet.create({
  carouselItemWrapper: {
    marginHorizontal: 5,

  },
  carouselItem: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingTop: 90,
    paddingBottom: 10,
    overflow: 'hidden',
  },
  carouselImageWrapper: {
    position: 'absolute',
    top: 15,
    left: 0,
    width: '80%',
    height: 80,
  },
  carouselImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 75,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5,
  },
  carouselTitle: {
    fontWeight: 'bold',
    color: '#93a5b8',
  },
  carouselDistance: {
    color: '#dae0e6',
    paddingBottom: 50,
  },
  placeIndicatorWrapper: {
    position: 'absolute',
    top: 55,
    right: 5,
    borderRadius: 5,
  },
  placeIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5fa390',
    borderRadius: 5,
  },
  placeIndicatorIcon: {
    lineHeight: 20,
  },
  placeIndicatorText: {
    color: '#fff',
    lineHeight: 20,
    fontWeight: 'bold',
  },
  favorite: {
    position: 'absolute',
    bottom: 5,
    right: 5,
  }
})
