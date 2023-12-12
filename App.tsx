/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {Provider} from 'react-redux';
import store from './src/redux/store';
import {RootNavigation} from './src/navigation/RootNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {LogBox} from 'react-native';
LogBox.ignoreAllLogs();
function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
