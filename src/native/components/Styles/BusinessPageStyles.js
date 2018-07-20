import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  businessPageWrapper: {
  },
  carouselContainer: {
  },
  carouselImage: {
    width: '100%',
    height: 225,
  },
  basicInfo: {
    marginTop: 40,
    marginBottom: 35,
  },
  businessTitle: {
    marginBottom: 5,
    paddingHorizontal: 20,
    fontSize: 26,
    fontWeight: 'bold',
    color: '#272a3b',
  },
  businessAddress: {
    fontSize: 16,
    paddingHorizontal: 20,
    color: '#afbccc',
  },
  placeIndicatorWrapper: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    top: 5,
    bottom: 5,
    right: 0,
    paddingHorizontal: 10,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    backgroundColor: '#5fa390',
  },
  placeIndicatorIcon: {
    marginRight: 5,
  },
  placeIndicatorText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  placeIndicatorPrice: {
    color: '#fff',
    fontWeight: 'bold',
  },
  placeDetails: {
    paddingHorizontal: 20,
  },
  detailsHeading: {
    marginBottom: 10,
    fontSize: 20,
    color: '#6d88a1',
  },
  detailsCarouselContentContainer: {
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginRight: 35,
  },
  detailCard: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 100,
    padding: 5,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#afbccc',
    borderRadius: 5,
  },
  detailIcon: {

  },
  detailCaption: {
    color: '#272a3b',
  },
  detailVal: {
    color: '#afbccc',
  },
  hoursHeading: {
    marginBottom: 10,
    fontSize: 20,
    color: '#6d88a1',
  },
  placeHours: {
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  hours: {
    textAlign: 'right',
  },
  placeDescription: {
    paddingHorizontal: 20,
    paddingBottom: 25,
  },
  descriptionHeading: {
    marginBottom: 10,
    fontSize: 20,
    color: '#6d88a1',
  },
  bio: {
    textAlign: 'justify',
    fontSize: 16,
    letterSpacing: 36,
    lineHeight: 32,
    color: '#6d88a1',
  },
  reviews: {
    paddingHorizontal: 20,
  },
  navigationButton: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 75,
    backgroundColor: '#5fa390',
  },
  navigationButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  }
})
