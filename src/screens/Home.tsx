import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS} from '../theme/Colors';
import ProductCard from '../components/ProductCard';
import OfferCard from '../components/OfferCard';
import HomeHeader from '../components/HomeHeader';
import {SCREEN_WIDTH} from '../theme/Screen';
import axios from 'axios';
import {useAppDispatch, useAppSelector} from '../store/hooks';
import {productsSelector, setProducts} from '../store/productSlice';

const Home = () => {
  const products = useAppSelector(productsSelector);
  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();
  //fetching API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        dispatch(setProducts(response.data.products));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color={COLORS.PRIMARY} />
      ) : (
        <FlatList
          ListHeaderComponent={
            <View style={{width: SCREEN_WIDTH}}>
              <HomeHeader />
              <ScrollView
                contentContainerStyle={{
                  marginVertical: 10,
                  columnGap: 15,
                  paddingHorizontal: 10,
                }}
                showsHorizontalScrollIndicator={false}
                horizontal>
                <OfferCard />
                <OfferCard />
              </ScrollView>
            </View>
          }
          numColumns={2}
          columnWrapperStyle={{columnGap: 15}}
          contentContainerStyle={{width: SCREEN_WIDTH, alignItems: 'center'}}
          data={products}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <ProductCard {...item} key={item.id} />}
        />
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BG,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
