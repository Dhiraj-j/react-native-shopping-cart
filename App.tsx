import {StatusBar, StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RouteNavigation from './src/navigations/RouteNavigation';
import {Provider} from 'react-redux';
import {store} from './src/store/store';

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <StatusBar hidden />
        <RouteNavigation />
      </Provider>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
