import {
  StyleSheet,
  StyleSheetProperties,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {COLORS} from '../theme/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
type Props = {
  label: string;
  onPress: () => void;
  disabled?: boolean;
  style?: any;
  containerStyle?: object;
  size: number;
  backgroundColor?: string;
  color?: string;
  iconStyle?: object;
};

const IconButton = ({
  onPress,
  disabled,
  containerStyle,
  label,
  size = 30,
  backgroundColor = COLORS.PRIMARYTINT,
  color = COLORS.BG,
  iconStyle,
}: Props) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[containerStyle]}>
      {label ? (
        <Ionicons
          style={[
            styles.icon,
            {borderRadius: size, backgroundColor: backgroundColor},
            iconStyle,
          ]}
          name={label}
          color={color}
          size={size}
        />
      ) : (
        <Text>?</Text>
      )}
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  icon: {
    borderRadius: 15,
  },
});
