import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useCallback} from 'react';
import {SCREEN_WIDTH} from '../theme/Screen';
import {COLORS} from '../theme/Colors';
import {FONTFAMILY, FONTSIZE} from '../theme/FontStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconButton from './IconButton';
import {useNavigation} from '@react-navigation/native';
import {ProductType} from '../types/productType';
import {useAppDispatch} from '../store/hooks';
import {toggleFavorite} from '../store/productSlice';
import {add} from '../store/cartSlice';

const ProductCard = (props: ProductType) => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const productId = props.id;
  const handleFavorite = useCallback(() => {
    dispatch(toggleFavorite({productId}));
  }, [props.id]);
  const handleAdd = useCallback(() => {
    dispatch(add(props));
  }, [props.id]);
  console.log(props);
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <View style={styles.favIcon}>
          <Pressable onPress={handleFavorite} style={{zIndex: 10}}>
            <Ionicons
              name={props.favorite ? 'heart' : 'heart-outline'}
              color={props.favorite ? COLORS.RED : COLORS.BLACK100}
              size={25}
            />
          </Pressable>
        </View>
        <Image style={styles.image} source={{uri: `${props.thumbnail}`}} />
      </View>
      <Pressable
        onPress={() => navigation.navigate('Product', props)}
        style={styles.details}>
        <Text style={styles.price}>${props.price}</Text>
        <Text style={styles.title}>{props.title}</Text>
        <IconButton
          onPress={handleAdd}
          containerStyle={styles.addToCart}
          label="add"
        />
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
