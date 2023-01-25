import { StyleSheet } from 'react-native';
import { COLORS } from '../../../common/style/Colors';
import BaseStyle from '../../../common/style/BaseStyle';
import { FONTS } from '../../../common/style/Fonts';

export default styles = StyleSheet.create({

    leftIconStyle: {
        justifyContent: "center",
        alignItems: 'flex-end',
        width: (BaseStyle.WIDTH / 100) * 10,
        alignSelf: "center"
    },
    rightIconStyle: {
        justifyContent: "center",
        alignItems: 'flex-start',
        width: (BaseStyle.WIDTH / 100) * 10,
        alignSelf: "center"
    },
    inputView: {
        flexDirection: 'row',
        width: (BaseStyle.WIDTH / 100) * 85,
        height: 50,
        justifyContent: 'center',
        alignItems: "center",
    },
    // input: {
    //     fontSize: 14,
    //     fontStyle: FONTS.Popins_Black
    // }
});
