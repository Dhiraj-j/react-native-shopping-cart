import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../theme/Colors';
import {FONTSIZE} from '../theme/FontStyle';
import Button from '../components/Button';
import ProductCard from '../components/ProductCard';
import products from '../mockData/products';
import OfferCard from '../components/OfferCard';
import HomeHeader from '../components/HomeHeader';
import {SCREEN_WIDTH} from '../theme/Screen';

type Props = {};

const Home = (props: Props) => {
  return (
    <View style={styles.container}>
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
              <OfferCard />
            </ScrollView>
          </View>
        }
        numColumns={2}
        columnWrapperStyle={{columnGap: 15}}
        contentContainerStyle={{width: SCREEN_WIDTH, alignItems: 'center'}}
        data={products}
        renderItem={({item}) => <ProductCard {...item} key={item} />}
      />
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
