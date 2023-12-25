import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FONTFAMILY, FONTSIZE} from '../theme/FontStyle';
import {COLORS} from '../theme/Colors';
import IconButton from './IconButton';

type Props = {};

const CartCard = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/placeholder.png')}
        />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Bananas</Text>
        <Text style={[styles.label, {fontFamily: FONTFAMILY.manrope400}]}>
          $7.90
        </Text>
      </View>
      <View style={styles.quantityContainer}>
        <IconButton
          backgroundColor={COLORS.BLACK1}
          color={COLORS.GRAY4}
          label="remove"
          iconStyle={{padding: 5}}
          size={25}
        />
        <Text style={styles.label}>1</Text>
        <IconButton
          backgroundColor={COLORS.BLACK1}
          color={COLORS.GRAY4}
          label="add"
          iconStyle={{padding: 5}}
          size={25}
        />
      </View>
    </View>
  );
};

export default CartCard;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.BORDER,
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 2,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  detailsContainer: {
    flex: 5,
    paddingLeft: 15,
  },
  quantityContainer: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  label: {
    fontFamily: FONTFAMILY.manrope500,
    fontSize: FONTSIZE.label,
    color: COLORS.GRAY,
  },
});
