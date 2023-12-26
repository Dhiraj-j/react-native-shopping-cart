import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../theme/Colors';
import Button from './Button';
import {FONTFAMILY, FONTSIZE} from '../theme/FontStyle';
import {emptyCart} from '../store/cartSlice';
import {useAppDispatch} from '../store/hooks';

type Props = {
  subtotal: number;
};

const BillSection = (props: Props) => {
  const dispatch = useAppDispatch();
  const handleCheckout = () => {
    dispatch(emptyCart());
  };
  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <View style={styles.row}>
          <Text style={styles.label}>Subtotal</Text>
          <Text style={styles.totalValue}>$ {props.subtotal}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Delivery</Text>
          <Text style={styles.totalValue}>$2.00</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Total</Text>
          <Text style={styles.totalValue}>${props.subtotal + 2}</Text>
        </View>
      </View>
      <Button onPress={handleCheckout} label="Proceed To checkout" />
    </View>
  );
};

export default BillSection;

const styles = StyleSheet.create({
  container: {
    width: '95%',
    alignSelf: 'center',
    backgroundColor: COLORS.BLACK1,
    padding: 10,
  },
  row: {
    paddingVertical: 5,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  labelContainer: {
    width: '90%',
    alignSelf: 'center',
    marginVertical: 10,
    marginBottom: 25,
  },
  label: {
    fontFamily: FONTFAMILY.manrope400,
    color: COLORS.GRAY,
    fontSize: FONTSIZE.label,
  },
  totalValue: {
    fontFamily: FONTFAMILY.manrope600,
    color: COLORS.GRAY3,
    fontSize: FONTSIZE.label,
  },
});
