import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useMemo} from 'react';
import CartCard from '../components/CartCard';
import BillSection from '../components/BillSection';
import {COLORS} from '../theme/Colors';
import BackHeader from '../components/BackHeader';
import {useAppSelector} from '../store/hooks';
import {cartSelector} from '../store/cartSlice';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../theme/Screen';
import {FONTFAMILY, FONTSIZE} from '../theme/FontStyle';
import Animated, {SlideOutLeft} from 'react-native-reanimated';
const Cart = () => {
  const cartdata = useAppSelector(cartSelector);
  const cartQty = cartdata.length;
  const subtotal = useMemo(() => {
    return cartdata.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }, [cartdata]);
  return (
    <View style={styles.container}>
      <BackHeader title={`Shopping Cart (${cartQty})`} cartShow={false} />
      {cartQty === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.text}>No item in cart</Text>
        </View>
      ) : (
        <FlatList
          data={cartdata}
          contentContainerStyle={{
            width: SCREEN_WIDTH,
            minHeight: SCREEN_HEIGHT * 0.9,
            paddingBottom: SCREEN_WIDTH / 2,
          }}
          ListFooterComponentStyle={{
            position: 'absolute',
            bottom: 0,
            width: SCREEN_WIDTH,
          }}
          ListFooterComponent={<BillSection subtotal={subtotal} />}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <Animated.View exiting={SlideOutLeft}>
              <CartCard {...item} />
            </Animated.View>
          )}
        />
      )}
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
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: FONTSIZE.h3,
    color: COLORS.GRAY3,
    fontFamily: FONTFAMILY.manrope500,
  },
});
