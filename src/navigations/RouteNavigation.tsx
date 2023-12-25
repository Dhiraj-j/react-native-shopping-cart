import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabs from './BottomTabs';
import Product from '../screens/Product';
import Cart from '../screens/Cart';

type Props = {};
const {Screen, Navigator} = createNativeStackNavigator();

const RouteNavigation = (props: Props) => {
  return (
    <Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="BottomTab">
      <Screen name="BottomTab" component={BottomTabs} />
      <Screen name="Product" component={Product} />
      <Screen name="Cart" component={Cart} />
    </Navigator>
  );
};

export default RouteNavigation;

const styles = StyleSheet.create({});
