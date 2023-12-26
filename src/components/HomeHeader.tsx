import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../theme/Screen';
import {COLORS} from '../theme/Colors';
import {FONTFAMILY, FONTSIZE} from '../theme/FontStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CartButton from './CartButton';

type Props = {};

const HomeHeader = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.name}>Hey, Rahul</Text>
        <CartButton />
      </View>
      <View style={styles.searchBarContainer}>
        <Ionicons name={'search'} color={COLORS.BLACK1} size={25} />
        <TextInput
          placeholder="Search Products or store"
          placeholderTextColor={COLORS.BLACK45}
          style={styles.searchInput}
        />
      </View>
      <View style={styles.row}>
        <View>
          <Text style={styles.title}>Delivery to</Text>
          <View style={styles.row}>
            <Text style={styles.details}>Green Way 3000, Sylhet </Text>
            <Ionicons name={'chevron-down-outline'} />
          </View>
        </View>
        <View>
          <Text style={styles.title}>Within</Text>
          <View style={styles.row}>
            <Text style={styles.details}>1 Hour </Text>
            <Ionicons name={'chevron-down-outline'} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: SCREEN_WIDTH * 0.7,
    backgroundColor: COLORS.PRIMARYTINT,
    justifyContent: 'space-between',
    marginBottom: 10,
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontFamily: FONTFAMILY.manrope600,
    fontSize: FONTSIZE.h3,
    color: COLORS.BLACK1,
    marginTop: 15,
  },
  title: {
    fontFamily: FONTFAMILY.manrope700,
    fontSize: FONTSIZE.label,
    color: COLORS.BLACK1,
    opacity: 0.5,
  },
  details: {
    fontFamily: FONTFAMILY.manrope500,
    fontSize: FONTSIZE.label,
    color: COLORS.BLACK1,
  },
  searchBarContainer: {
    width: '100%',
    height: 60,
    backgroundColor: COLORS.PRIMARY,
    borderRadius: 28,
    paddingHorizontal: 25,
    alignItems: 'center',
    flexDirection: 'row',
  },
  searchInput: {
    flex: 1,
    paddingLeft: 10,
  },
});
