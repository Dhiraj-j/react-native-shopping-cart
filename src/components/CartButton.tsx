import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {COLORS} from '../theme/Colors';
import {useNavigation} from '@react-navigation/native';
import {useAppSelector} from '../store/hooks';
import {cartSelector} from '../store/cartSlice';

type Props = {
  color?: string;
};

const CartButton = ({color = COLORS.BLACK1}: Props) => {
  const navigation = useNavigation();
  const cartdata = useAppSelector(cartSelector);
  const count = cartdata.length;
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
