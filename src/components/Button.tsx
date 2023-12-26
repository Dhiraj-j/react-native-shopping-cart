import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {FONTFAMILY, FONTSIZE} from '../theme/FontStyle';
import {COLORS} from '../theme/Colors';

type Props = {
  label: string;
  onPress: () => void;
  disabled?: boolean;
  style?: any;
  textStyle?: any;
  containerStyle?: object;
  mode?: 'outline' | 'fill';
};

const Button = ({
  label,
  onPress,
  disabled,
  textStyle,
  containerStyle,
  mode = 'fill',
}: Props) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.container,
        containerStyle,
        {
          backgroundColor: mode === 'fill' ? COLORS.PRIMARYTINT : 'transparent',
        },
      ]}>
      <Text
        style={[
          textStyle,
          styles.buttonText,
          {color: mode === 'fill' ? COLORS.BG : COLORS.PRIMARYTINT},
        ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: COLORS.PRIMARYTINT,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: FONTSIZE.button1,
    fontFamily: FONTFAMILY.manrope600,
  },
});
