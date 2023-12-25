import React from 'react';
import {View, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface Props {
  rating: number;
  size?: number;
  color?: string;
}

const StarRating = ({rating, size = 24, color = 'gold'}: Props) => {
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Ionicons key={`full_${i}`} name="star" size={size} color={color} />,
      );
    }

    if (hasHalfStar) {
      stars.push(
        <Ionicons key={`half`} name="star-half" size={size} color={color} />,
      );
    }

    const emptyStars = 5 - Math.ceil(rating); // Assuming a maximum of 5 stars
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Ionicons
          key={`empty_${i}`}
          name="star-outline"
          size={size}
          color={color}
        />,
      );
    }

    return stars;
  };

  return <View style={styles.container}>{renderStars()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default StarRating;
