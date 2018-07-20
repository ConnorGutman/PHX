import React from 'react';
import {
  Scene,
  Overlay,
  Tabs,
  Modal,
  Stack,
  Lightbox,
} from 'react-native-router-flux';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';

import DefaultProps from '../constants/navigation';
import AppConfig from '../../constants/config';

import MetroElementsContainer from '../../containers/Metro';
import MetroElementsComponent from '../components/Metro';
//import MetroViewComponent from '../components/MetroElement';

import PlacesElementsContainer from '../../containers/Places';
import PlacesElementsComponent from '../components/Places';

import BusinessPageComponent from '../components/BusinessPage';

import RecipesContainer from '../../containers/Recipes';
import RecipesComponent from '../components/Recipes';
import RecipeViewComponent from '../components/Recipe';

import WalletComponent from '../components/Wallet';
import SearchComponent from '../components/Search';
import SearchPlacesComponent from '../components/SearchPlaces';

import SignUpContainer from '../../containers/SignUp';
import SignUpComponent from '../components/SignUp';

import LoginContainer from '../../containers/Login';
import LoginComponent from '../components/Login';

import ForgotPasswordContainer from '../../containers/ForgotPassword';
import ForgotPasswordComponent from '../components/ForgotPassword';

import UpdateProfileContainer from '../../containers/UpdateProfile';
import UpdateProfileComponent from '../components/UpdateProfile';

import MemberContainer from '../../containers/Member';
import ProfileComponent from '../components/Profile';

import AboutComponent from '../components/About';

const Index = (
  <Stack>
    <Scene>
      <Tabs
        key="tabbar"
        swipeEnabled
        type="replace"
        showLabel={false}
        {...DefaultProps.tabProps}
      >

        <Stack
          key="metroElements"
          title="METRO ELEMENTS"
          icon={({ focused }) => (
            <MaterialIcon
                size={24}
                style={focused ? DefaultProps.activeIcon : DefaultProps.inactiveIcon}
                name={`google-maps`}
            />
          )}
          {...DefaultProps.navbarProps}
        >
          <Scene key="metroElements" component={MetroElementsContainer} Layout={MetroElementsComponent} />
        </Stack>

        <Stack
          key="placesElements"
          icon={({ focused }) => (
            <MaterialIcon
                size={24}
                style={focused ? DefaultProps.activeIcon : DefaultProps.inactiveIcon}
                name={`store`}
            />
          )}
          {...DefaultProps.navbarProps}
        >
          <Scene key="placesElements" component={PlacesElementsContainer} Layout={PlacesElementsComponent} />
        </Stack>

        <Stack
          key="wallet"
          title="WALLET"
          icon={({ focused }) => (
            <MaterialIcon
                size={24}
                style={focused ? DefaultProps.activeIcon : DefaultProps.inactiveIcon}
                name={`qrcode`}
            />
          )}
          {...DefaultProps.navbarProps}
        >
          <Scene key="wallet" component={WalletComponent} />
        </Stack>

        <Stack
          key="profile"
          title="PROFILE"
          icon={({ focused }) => (
            <MaterialIcon
                size={24}
                style={focused ? DefaultProps.activeIcon : DefaultProps.inactiveIcon}
                name={`tune`}
            />
          )}
          {...DefaultProps.navbarProps}
        >
          <Scene key="profileHome" component={MemberContainer} Layout={ProfileComponent} />
          <Scene
            back
            key="signUp"
            title="SIGN UP"
            {...DefaultProps.navbarProps}
            component={SignUpContainer}
            Layout={SignUpComponent}
          />
          <Scene
            back
            key="login"
            title="LOGIN"
            {...DefaultProps.navbarProps}
            component={LoginContainer}
            Layout={LoginComponent}
          />
          <Scene
            back
            key="forgotPassword"
            title="FORGOT PASSWORD"
            {...DefaultProps.navbarProps}
            component={ForgotPasswordContainer}
            Layout={ForgotPasswordComponent}
          />
          <Scene
            back
            key="updateProfile"
            title="UPDATE PROFILE"
            {...DefaultProps.navbarProps}
            component={UpdateProfileContainer}
            Layout={UpdateProfileComponent}
          />
        </Stack>
      </Tabs>
    </Scene>
    <Scene
      key="businessPage"
      title="businessPage"
      component={BusinessPageComponent}
      hideNavBar={true}
      back
    />
    <Scene
      key="searchPlaces"
      title="searchPlaces"
      component={SearchPlacesComponent}
      hideNavBar={true}
      back
    />

    <Scene
      back
      clone
      key="recipe"
      title="RECIPE"
      {...DefaultProps.navbarProps}
      component={RecipesContainer}
      Layout={RecipeViewComponent}
    />
  </Stack>
);

export default Index;
