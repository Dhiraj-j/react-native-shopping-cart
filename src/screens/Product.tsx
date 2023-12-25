import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {FONTFAMILY, FONTSIZE} from '../theme/FontStyle';
import {COLORS} from '../theme/Colors';
import {SCREEN_WIDTH} from '../theme/Screen';
import Button from '../components/Button';
import StarRating from '../components/StarRating';
type Props = {};

const imgString = '../assets/images/placeholder.png';
const imgArray = [imgString, imgString, imgString, imgString];
const Product = (props: Props) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const flatListRef = useRef<FlatList>(null);

  const renderIndicator = (index: number) => {
    return (
      <View
        style={[styles.indicator, index === currentIndex && styles.highlight]}
        key={index}
      />
    );
  };

  const scrollToIndex = (index: number) => {
    setCurrentIndex(index);
    flatListRef?.current?.scrollToIndex({index, animated: true});
  };

  return (
    <View style={styles.container}>
      <View style={styles.paddingContainer}>
        <Text style={[styles.heading, {fontFamily: FONTFAMILY.manrope300}]}>
          Thin Choise
        </Text>
        <Text style={[styles.heading, {fontFamily: FONTFAMILY.manrope800}]}>
          Top Orange
        </Text>
        <View style={[styles.priceRow, {marginVertical: 10}]}>
          <StarRating rating={2.5} />
          <Text style={styles.desc}>110 Reviews</Text>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <FlatList
          ref={flatListRef}
          data={imgArray}
          horizontal
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={event => {
            const newIndex = Math.floor(
              event.nativeEvent.contentOffset.x /
                event.nativeEvent.layoutMeasurement.width,
            );
            setCurrentIndex(newIndex);
          }}
          pagingEnabled
          renderItem={({item}) => (
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={require(imgString)} />
            </View>
          )}
        />
        <View style={styles.indicatorContainer}>
          {imgArray.map((item, index) => (
            <Pressable key={index} onPress={() => scrollToIndex(index)}>
              {renderIndicator(index)}
            </Pressable>
          ))}
        </View>
      </View>
      <View style={styles.paddingContainer}>
        <View style={styles.priceRow}>
          <Text style={styles.price}>$34.70/KG</Text>
          <Text style={styles.discount}>$22.04 OFF</Text>
        </View>
        <View style={styles.buttonRow}>
          <Button mode="outline" label="Add To Cart" />
          <Button label="Buy Now" />
        </View>
        <Text style={styles.detail}>Details</Text>
        <Text style={styles.desc}>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
          Nullam quis risus eget urna mollis ornare vel eu leo.
        </Text>
      </View>
    </View>
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
  imageContainer: {
    width: SCREEN_WIDTH,
    height: SCREEN_WIDTH * 0.6,
    backgroundColor: COLORS.BLACK1,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  indicatorContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  indicator: {
    width: 30,
    marginLeft: 5,
    borderRadius: 10,
    height: 7,
    backgroundColor: COLORS.BLACK20,
  },
  highlight: {
    backgroundColor: COLORS.SECONDARY,
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
