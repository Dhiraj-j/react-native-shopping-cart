import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../theme/Screen';
import {COLORS} from '../theme/Colors';
import {FONTFAMILY, FONTSIZE} from '../theme/FontStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {useNavigation} from '@react-navigation/native';

type Props = {};

const HomeHeader = (props: Props) => {
  const navigation = useNavigation();
  console.log(props);
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.name}>Hey, Rahul</Text>
        <Pressable onPress={() => navigation.navigate('Cart')}>
          <SimpleLineIcons color={COLORS.BLACK1} size={25} name="handbag" />
          <View style={styles.badgeCount}>
            <Text>3</Text>
          </View>
        </Pressable>
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
          <Text style={styles.details}>
            Green Way 3000, Sylhet
            <View>
              <Ionicons name={'chevron-down-outline'} />
            </View>
          </Text>
        </View>
        <View>
          <Text style={styles.title}>Within</Text>
          <Text style={styles.details}>1 Hour</Text>
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
  badgeCount: {
    height: 25,
    width: 25,
    borderRadius: 15,
    backgroundColor: COLORS.SECONDARY,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: COLORS.PRIMARYTINT,
    position: 'absolute',
    right: -9,
    top: -7,
  },
});
