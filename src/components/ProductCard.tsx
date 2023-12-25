import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SCREEN_WIDTH} from '../theme/Screen';
import {COLORS} from '../theme/Colors';
import ImgPlaceholder from '../assets/images/placeholder.png';
import {FONTFAMILY, FONTSIZE} from '../theme/FontStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconButton from './IconButton';
import {useNavigation} from '@react-navigation/native';
type Props = {
  price: string;
  title: string;
  fav: boolean;
  image: string;
  id: string;
};

const ProductCard = (props: Props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <View style={styles.favIcon}>
          <Pressable>
            <Ionicons
              name={props.fav ? 'heart' : 'heart-outline'}
              color={COLORS.BLACK100}
              size={25}
            />
          </Pressable>
        </View>
        <Image style={styles.image} source={ImgPlaceholder} />
      </View>
      <Pressable
        onPress={() => navigation.navigate('Product')}
        style={styles.details}>
        <Text style={styles.price}>{props.price}</Text>
        <Text style={styles.title}>{props.title}</Text>
        <IconButton containerStyle={styles.addToCart} label="add" />
      </Pressable>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH / 2.2,
    height: SCREEN_WIDTH / 1.8,
    backgroundColor: COLORS.BLACK1,
    marginTop: 15,
    borderRadius: 12,
  },
  imageContainer: {
    flex: 4,
    width: '100%',
    alignSelf: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  details: {
    flex: 1,
    padding: 15,
  },
  price: {
    fontFamily: FONTFAMILY.manrope600,
    fontSize: FONTSIZE.body2,
    color: COLORS.GRAY3,
  },
  title: {
    fontFamily: FONTFAMILY.manrope400,
    fontSize: FONTSIZE.label,
    color: COLORS.GRAY,
    marginTop: 5,
  },
  favIcon: {
    position: 'absolute',
    left: 10,
    top: 10,
  },
  addToCart: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  addIcon: {
    backgroundColor: COLORS.PRIMARYTINT,
    borderRadius: 15,
  },
});
