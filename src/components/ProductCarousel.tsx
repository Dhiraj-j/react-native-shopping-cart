import {FlatList, Image, Pressable, StyleSheet, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {COLORS} from '../theme/Colors';

type Props = {
  images: Array<string>;
  width: number;
  height: number;
};
const ProductCarousel = ({images, width, height}: Props) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const flatListRef = useRef<FlatList>(null);

  const renderIndicator = (index: number) => {
    return (
      <View
        style={[
          styles.indicator,
          index === currentIndex ? styles.highlight : null,
        ]}
        key={index}
      />
    );
  };

  const scrollToIndex = (index: number) => {
    setCurrentIndex(index);
    flatListRef?.current?.scrollToIndex({index, animated: true});
  };

  return (
    <View style={[styles.imageContainer, {width: width, height: height}]}>
      <FlatList
        ref={flatListRef}
        data={images}
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
          <View style={[styles.imageContainer, {width: width, height: height}]}>
            <Image style={styles.image} source={{uri: `${item}`}} />
          </View>
        )}
      />
      <View style={styles.indicatorContainer}>
        {images.map((_, index) => (
          <Pressable key={index} onPress={() => scrollToIndex(index)}>
            {renderIndicator(index)}
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default ProductCarousel;

const styles = StyleSheet.create({
  imageContainer: {
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
});
