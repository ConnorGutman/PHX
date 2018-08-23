import React from 'react';
import { StatusBar, Platform } from 'react-native';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router, Stack } from 'react-native-router-flux';
import { PersistGate } from 'redux-persist/es/integration/react';

import { StyleProvider } from 'native-base';

// symbol polyfills
global.Symbol = require('core-js/es6/symbol');
require('core-js/fn/symbol/iterator');

// collection fn polyfills
require('core-js/fn/map');
require('core-js/fn/set');
require('core-js/fn/array/find');

import getTheme from '../../native-base-theme/components';
import theme from '../../native-base-theme/variables/commonColor';

import Routes from './routes/index';
import Loading from './components/Loading';

// Hide StatusBar on Android as it overlaps tabs
//if (Platform.OS === 'android') StatusBar.setHidden(false);
StatusBar.setBarStyle('dark-content');
StatusBar.setTranslucent(true);
StatusBar.setBackgroundColor('rgba(0,0,0,0)');

// Hide annoying timer warning
console.ignoredYellowBox = ['Setting a timer'];

const Root = ({ store, persistor }) => (
  <Provider store={store}>
    <PersistGate
      loading={<Loading />}
      persistor={persistor}
    >
      <StyleProvider style={getTheme(theme)}>
        <Router headerMode="none">
          <Stack key="root">
            {Routes}
          </Stack>
        </Router>
      </StyleProvider>
    </PersistGate>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.shape({}).isRequired,
  persistor: PropTypes.shape({}).isRequired,
};

export default Root;
