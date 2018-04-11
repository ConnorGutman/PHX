import Colors from '../../../native-base-theme/variables/commonColor';

export default {
  navbarProps: {
    titleStyle: {
      color: Colors.textColor,
      alignSelf: 'center',
      letterSpacing: 2,
      fontSize: Colors.fontSizeBase,
    },
    backButtonTintColor: Colors.textColor,
    tabBarVisible: true, //False to hide
  },

  tabProps: {
    swipeEnabled: true,
    inactiveBackgroundColor: 'transparent',
    tabBarStyle: {
      backgroundColor: '#fff',
      borderTopColor: 'transparent'
    },
    tabBarPosition: 'bottom',
  },

  icons: {},

  activeIcon: {
    color: '#85B3F8',
  },

  inactiveIcon: {
    color: '#696969',
  },
};
