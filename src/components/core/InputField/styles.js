import { StyleSheet } from 'react-native';
import { COLORS } from '../../../common/style/Colors';
import BaseStyle from '../../../common/style/BaseStyle';
import { FONTS } from '../../../common/style/Fonts';

export default styles = StyleSheet.create({

    inputView: {
        flexDirection: 'row',
        width: (BaseStyle.WIDTH / 100) * 85,
        height: 45,
        justifyContent: 'center',
        alignItems: "center",
    },
    titleText: {
        fontSize: 14,
        // fontStyle: FONTS.Popins_Black,
        alignSelf: 'center'
    }

});
