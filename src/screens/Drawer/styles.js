import { StyleSheet } from 'react-native';
import { COLORS } from '../../common/style/Colors';
import { FONTS } from '../../common/style/Fonts';
import BaseStyle from '../../common/style/BaseStyle';
export default styles = StyleSheet.create({
    closeIcon: {
        width: 50,
        height: 50,
        marginLeft: 20,
        marginTop: 20,
        marginBottom: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    labelStyles: {

        width: '100%',
        paddingLeft: 28,
        fontSize: 18,
        backgroundColor: COLORS.transparent,
        fontFamily: FONTS.Poppins_SemiBold,
        color: COLORS.black,
    },
    menuText: {
        color: COLORS.black,
        paddingLeft: 28,
        paddingVertical: 20,
        fontSize: 18,
        fontFamily: FONTS.Poppins_SemiBold
    },

});
