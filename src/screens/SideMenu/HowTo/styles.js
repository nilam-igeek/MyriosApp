import { StyleSheet, Platform } from 'react-native';
import { COLORS } from '../../../common/style/Colors';
import { FONTS } from '../../../common/style/Fonts';
import BaseStyle from '../../../common/style/BaseStyle';
export default styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: COLORS.seashell
    },
    wrapper: {
        //    flex: 1,
    },
    slide1: {
        justifyContent: 'center',
        alignItems: 'center',
        height: (BaseStyle.HEIGHT / 100) * 70,
    },
    imgStyle: {
        height: (BaseStyle.HEIGHT / 100) * 60,
    },
    dot: {
        backgroundColor: '#EEEEEE',
        width: 12,
        height: 12,
        borderRadius: 12 / 2,
        marginLeft: 10,
        marginBottom: Platform.OS === 'ios' ? 33 : 12,
    },
    activeDot: {
        backgroundColor: '#FFC49B',
        width: 12,
        height: 12,
        borderRadius: 12 / 2,
        marginLeft: 10,
        marginBottom: Platform.OS === 'ios' ? 33 : 12,
    },
    text: {
        width: (BaseStyle.WIDTH / 100) * 90,
        alignSelf: 'center',
        textAlign: "center",
        color: COLORS.black,
        fontSize: 16,
        fontFamily: FONTS.Poppins_SemiBold
    },
    titleText: {
        marginTop: 10,
        width: (BaseStyle.WIDTH / 100) * 90,
        alignSelf: 'center',
        color: COLORS.black,
        fontSize: 16,
        textAlign: 'center',
        fontFamily: FONTS.Poppins_SemiBold
    },
    subText: {
        marginTop: 20,
        width: (BaseStyle.WIDTH / 100) * 90,
        alignSelf: 'center',
        textAlign: 'center',
        color: COLORS.black,
        fontSize: 12,
        fontFamily: FONTS.Poppins_Regular
    },
    skipText: {
        color: COLORS.black,
        width: (BaseStyle.WIDTH / 100) * 90,
        alignSelf: 'center',
        textAlign: 'right',
        fontSize: 14,
        fontFamily: FONTS.Poppins_SemiBold
    },
    doneText: {
        color: COLORS.black,
        fontSize: 14,
        fontFamily: FONTS.Poppins_SemiBold,
        textAlign: 'right',
    },
    nextBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
    },
    buttonWrapperStyle: {
        backgroundColor: 'transparent',
        flexDirection: 'row',
        position: 'absolute',
        top: 0, left: 0, flex: 1,
        paddingHorizontal: 30,
        paddingVertical: Platform.OS === 'ios' ? 50 : 30,
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
   

});
