import { StyleSheet } from 'react-native';
import { COLORS } from '../../../common/style/Colors';
import { FONTS } from '../../../common/style/Fonts';
import BaseStyle from '../../../common/style/BaseStyle';
export default styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: COLORS.seashell
    },
    titleText: {
        marginTop: 30,
        fontSize: 24,
        fontFamily: FONTS.Poppins_SemiBold,
        color: COLORS.black,
    },
    subText: {
        textAlign: 'center',
        fontSize: 12,
        fontFamily: FONTS.Poppins_Regular,
        color: COLORS.black,
        width: (BaseStyle.WIDTH / 100) * 60,
        alignSelf: 'center',
    },
    blurView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0,0.6)',
    },
    blurSubView: {
        backgroundColor: COLORS.white,
        width: (BaseStyle.WIDTH / 100) * 90,
        alignSelf: 'center',
        borderRadius: 5,
        padding: 20,
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
    modalSubText: {
        fontSize: 16,
        fontFamily: FONTS.Poppins_Regular,
        color: COLORS.black
    },

});
