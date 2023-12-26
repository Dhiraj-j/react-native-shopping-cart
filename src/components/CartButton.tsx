import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {COLORS} from '../theme/Colors';
import {useNavigation} from '@react-navigation/native';

type Props = {
  count: number;
  color: string;
};

const CartButton = ({count, color = COLORS.BLACK1}: Props) => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.navigate('Cart')}>
      <SimpleLineIcons color={color} size={25} name="handbag" />
      {count > 0 ? (
        <View style={[styles.badgeCount, {borderColor: color}]}>
          <Text>{count}</Text>
        </View>
      ) : null}
    </Pressable>
  );
};

export default CartButton;

const styles = StyleSheet.create({
  badgeCount: {
    height: 25,
    width: 25,
    borderRadius: 15,
    backgroundColor: COLORS.SECONDARY,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,

    position: 'absolute',
    right: -9,
    top: -7,
  },
});
