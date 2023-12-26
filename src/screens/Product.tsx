import {
  BackHandler,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';
import React, {FC, useEffect, useMemo} from 'react';
import {FONTFAMILY, FONTSIZE} from '../theme/FontStyle';
import {COLORS} from '../theme/Colors';
import {SCREEN_WIDTH} from '../theme/Screen';
import Button from '../components/Button';
import StarRating from '../components/StarRating';
import ProductCarousel from '../components/ProductCarousel';
import BackHeader from '../components/BackHeader';
import {useRoute} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useAppDispatch, useAppSelector} from '../store/hooks';
import {productsSelector, toggleFavorite} from '../store/productSlice';
import {add, cartSelector} from '../store/cartSlice';

const Product = ({navigation}) => {
  const route = useRoute();
  const {id} = route.params;
  const products = useAppSelector(productsSelector);
  const singleProduct = products.filter(item => item.id === id)[0];
  const {
    title,
    price,
    discountPercentage,
    description,
    rating,
    images,
    favorite,
  } = singleProduct;

  const dispatch = useAppDispatch();
  const handleFavorite = () => {
    dispatch(toggleFavorite({productId: id}));
  };
  const handleAdd = () => {
    dispatch(add(singleProduct));
  };
  const handleBuy = () => {
    dispatch(add(singleProduct));
    navigation.navigate('Cart');
  };
  return (
    <ScrollView style={styles.container}>
      <BackHeader />
      <View style={styles.paddingContainer}>
        <Text style={[styles.heading, {fontFamily: FONTFAMILY.manrope300}]}>
          {title}
        </Text>
        {/* <Text style={[styles.heading, {fontFamily: FONTFAMILY.manrope800}]}>
          Top Orange
        </Text> */}
        <View style={[styles.priceRow, {marginVertical: 10}]}>
          <StarRating rating={rating} />
          <Text style={styles.desc}>{(rating * 100).toFixed(0)} Reviews</Text>
        </View>
      </View>
      <View>
        <ProductCarousel
          width={SCREEN_WIDTH}
          height={SCREEN_WIDTH * 0.6}
          images={images}
        />
        <Pressable onPress={handleFavorite} style={styles.likeButton}>
          <Ionicons
            name={favorite ? 'heart' : 'heart-outline'}
            color={favorite ? COLORS.RED : COLORS.BLACK100}
            size={25}
          />
        </Pressable>
      </View>
      <View style={styles.paddingContainer}>
        <View style={styles.priceRow}>
          <Text style={styles.price}>${price}</Text>
          <Text style={styles.discount}>{discountPercentage}% OFF</Text>
        </View>
        <View style={styles.buttonRow}>
          <Button onPress={handleAdd} mode="outline" label="Add To Cart" />
          <Button onPress={handleBuy} label="Buy Now" />
        </View>
        <Text style={styles.detail}>Details</Text>
        <Text style={styles.desc}>{description}</Text>
      </View>
    </ScrollView>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BG,
  },
  paddingContainer: {
    padding: 20,
    width: '100%',
  },
  heading: {
    fontSize: FONTSIZE.h2 * 2,
    color: COLORS.GRAY3,
    lineHeight: FONTSIZE.h2 * 2.5,
  },
  likeButton: {
    position: 'absolute',
    zIndex: 10,
    right: 20,
    top: 20,
    backgroundColor: COLORS.BG,
    padding: 12,
    borderRadius: 20,
  },
  priceRow: {
    flexDirection: 'row',
    columnGap: 10,
    alignItems: 'center',
  },
  price: {
    color: COLORS.PRIMARYTINT,
    fontFamily: FONTFAMILY.manrope400,
    fontSize: FONTSIZE.button2,
  },
  discount: {
    color: COLORS.BLACK1,
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    backgroundColor: COLORS.PRIMARYTINT,
    fontFamily: FONTFAMILY.manrope400,
    fontSize: FONTSIZE.button2,
  },
  buttonRow: {
    flexDirection: 'row',
    columnGap: 30,
    marginVertical: 30,
  },
  detail: {
    fontSize: FONTSIZE.body1,
    fontFamily: FONTFAMILY.manrope400,
    color: COLORS.GRAY3,
    paddingBottom: 5,
  },
  desc: {
    fontSize: FONTSIZE.body1,
    fontFamily: FONTFAMILY.manrope400,
    color: COLORS.GRAY2,
  },
});
