import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SCREEN_WIDTH} from '../theme/Screen';
import {COLORS} from '../theme/Colors';
import Carousel from '../assets/images/Carousel.png';

type Props = {};

const OfferCard = (props: Props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={Carousel} />
    </View>
  );
};

export default OfferCard;

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH * 0.8,
    height: SCREEN_WIDTH * 0.35,
    backgroundColor: COLORS.SECONDARY,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
