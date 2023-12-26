import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabs from './BottomTabs';
import Product from '../screens/Product';
import Cart from '../screens/Cart';
import {ProductType} from '../types/productType';

export type RootStackParamList = {
  BottomTab: undefined;
  Product: undefined;
  Cart: undefined;
};
const {Screen, Navigator} = createNativeStackNavigator<RootStackParamList>();

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
