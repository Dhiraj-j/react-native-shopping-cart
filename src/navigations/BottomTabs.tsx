import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Categories from '../screens/Categories';
import Favourite from '../screens/Favourite';
import More from '../screens/More';
import AnimatedTabBar from '../components/AnimatedTabBar';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../theme/Colors';
type Props = {};

const {Navigator, Screen, Group} = createBottomTabNavigator();
const BottomTabs = (props: Props) => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <AnimatedTabBar {...props} />}>
      <Screen
        name="Home"
        options={{
          tabBarIcon: active => (
            <Ionicons
              name={active ? 'home' : 'home-outline'}
              color={active ? COLORS.SECONDARY : 'black'}
              size={30}
            />
          ),
        }}
        component={Home}
      />
      <Screen
        name="Categories"
        options={{
          tabBarIcon: active => (
            <MaterialCommunityIcons
              style={styles.categoryIcon}
              name={active ? 'gamepad-circle' : 'gamepad-circle-outline'}
              color={active ? COLORS.SECONDARY : 'black'}
              size={30}
            />
          ),
        }}
        component={Categories}
      />
      <Screen
        name="Favourite"
        options={{
          tabBarIcon: active => (
            <Ionicons
              name={active ? 'heart' : 'heart-outline'}
              color={active ? COLORS.SECONDARY : 'black'}
              size={30}
            />
          ),
        }}
        component={Favourite}
      />
      <Screen
        name="More"
        options={{
          tabBarIcon: active => (
            <MaterialCommunityIcons
              name="dots-vertical"
              color={active ? COLORS.SECONDARY : 'black'}
              size={30}
            />
          ),
        }}
        component={More}
      />
    </Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  categoryIcon: {
    transform: [{rotate: '45deg'}],
  },
});
