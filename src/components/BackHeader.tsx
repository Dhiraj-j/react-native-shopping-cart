import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import IconButton from './IconButton';
import {COLORS} from '../theme/Colors';
import {FONTFAMILY, FONTSIZE} from '../theme/FontStyle';
import CartButton from './CartButton';
import {useNavigation} from '@react-navigation/native';

type Props = {
  cartShow?: boolean;
  title?: string;
};

const BackHeader = ({cartShow = true, title}: Props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {navigation.canGoBack() ? (
          <IconButton
            onPress={() => navigation.goBack()}
            backgroundColor={COLORS.BLACK1}
            color={COLORS.GRAY4}
            label="chevron-back"
            iconStyle={{padding: 5}}
            size={25}
          />
        ) : null}
        <Text style={styles.label}>{title}</Text>
      </View>
      {cartShow ? <CartButton color={COLORS.GRAY3} count={5} /> : null}
    </View>
  );
};

export default BackHeader;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    paddingLeft: 20,
    color: COLORS.GRAY3,
    fontFamily: FONTFAMILY.manrope400,
    fontSize: FONTSIZE.body1,
  },
});
