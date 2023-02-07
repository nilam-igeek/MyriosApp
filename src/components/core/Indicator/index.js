import React from 'react';
import { ActivityIndicator,View} from 'react-native';
import { COLORS } from '../../../common/style/Colors';
import styles from './styles';

const Indicator = ({animate, isLoader}) => {
  
  if (isLoader) {
    if (!animate) {
      return null;
    }
  }
  return (
      <View style={styles.container}>
      <ActivityIndicator
        animating={isLoader}
        color={COLORS.cornflowerblue}
        size={'large'}
        style={styles.indicator}
      />
    </View>
  );
};
export default Indicator;
