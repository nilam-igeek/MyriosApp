import { StyleSheet } from 'react-native';
import { COLORS } from '../../../common/style/Colors';
import BaseStyle from '../../../common/style/BaseStyle';
import { FONTS } from '../../../common/style/Fonts';

export default styles = StyleSheet.create({
    textStyle: {
        fontFamily:FONTS.Poppins_Regular
        // fontStyle: FONTS.Poppins_SemiBold,
    },
    btnStyle: {
        justifyContent: 'center',
        alignItems: 'center',
      // shadowColor: COLORS.black,
      //   shadowOffset: {
      //     width: 0,
      //     height: 4,
      //   },
      //   shadowOpacity: 0.25,
      //   shadowRadius: 2.84,
      //   elevation: 3,
    }

});
