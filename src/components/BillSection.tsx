import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../theme/Colors';
import Button from './Button';
import {FONTFAMILY, FONTSIZE} from '../theme/FontStyle';

type Props = {};

const BillSection = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <View style={styles.row}>
          <Text style={styles.label}>BillSection</Text>
          <Text style={styles.totalValue}>$37.96</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>BillSection</Text>
          <Text style={styles.totalValue}>$37.96</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>BillSection</Text>
          <Text style={styles.totalValue}>$37.96</Text>
        </View>
      </View>
      <Button label="Proceed To checkout" />
    </View>
  );
};

export default BillSection;

const styles = StyleSheet.create({
  container: {
    width: '95%',
    backgroundColor: COLORS.BLACK1,
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
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
