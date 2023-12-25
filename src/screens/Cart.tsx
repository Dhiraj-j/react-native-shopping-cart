import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CartCard from '../components/CartCard';
import BillSection from '../components/BillSection';
import {COLORS} from '../theme/Colors';

type Props = {};

const Cart = (props: Props) => {
  return (
    <View style={styles.container}>
      <CartCard />
      <CartCard />
      <CartCard />
      <CartCard />
      <CartCard />
      <CartCard />
      <BillSection />
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.BG,
  },
});
