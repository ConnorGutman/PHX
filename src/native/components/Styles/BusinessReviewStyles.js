import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  businessCardOuterWrapper: {
    top: 65,
    left: '2%',
    width: "96%",
    height: 340,
  },
  businessCardInnerWrapper: {
    backgroundColor: '#fff',
    width: '100%',
    height: 250,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  businessInfo: {
    flexDirection: 'row',
  },
  businessCardImage: {
    width: '100%',
    height: 150,
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 5,
  },
  title: {
    color: '#262626',
  },
  bio: {
    color: '#ababab',
  }
})
