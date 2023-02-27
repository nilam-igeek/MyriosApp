import { StyleSheet } from 'react-native';
import { COLORS } from '../../../common/style/Colors';
import BaseStyle from '../../../common/style/BaseStyle';
import { FONTS } from '../../../common/style/Fonts';

export default styles = StyleSheet.create({

    mainContainer: {
        backgroundColor: COLORS.white,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: COLORS.grey,
        width: (BaseStyle.WIDTH / 100) * 80,
        alignSelf: 'center'
    },
    countryText: {
        fontFamily: FONTS.Poppins_Regular,
        padding: 12,
        color: COLORS.black,
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        // flex: 1
    },
    titleText: {
        fontFamily: FONTS.Poppins_Regular,
        color: COLORS.black,
        padding: 12,
        fontSize: 14
    },
    blurView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0,0.6)',
    },
    blurSubView: {
        backgroundColor: COLORS.white,
        width: (BaseStyle.WIDTH / 100) * 80,
        height: (BaseStyle.HEIGHT / 100) * 60,
        alignSelf: 'center',
        borderRadius: 10,
        padding: 15,
    },
    closeBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 25,
        width: 25,
        borderRadius: 25 / 2,
        position: 'absolute',
        right: -10,
        top: -10,
        backgroundColor: COLORS.black,
    },
    closeBtn: {
        position: "absolute",
        right: -7,
        justifyContent: 'center',
        top: -7,
        alignItems: 'center',
        width: 22,
        height: 22,
        borderRadius: 100,
        justifyContent: 'center',
        backgroundColor: COLORS.black
    },

});
