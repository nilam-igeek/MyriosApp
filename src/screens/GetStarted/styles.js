import { StyleSheet } from 'react-native';
import { COLORS } from '../../common/style/Colors';
import { FONTS } from '../../common/style/Fonts';
export default styles = StyleSheet.create({
    blurView: {
        flex: 1,
        width: "50%",
        height: "100%",
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    myriosContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    myriosSubContainer: {
        alignItems: "flex-end",
        justifyContent: "center"
    },
    myriosText: {
        color: COLORS.white,
        fontSize: 28,
        marginRight: 10,
        fontFamily: FONTS.Poppins_SemiBold,
    },
    btnView: {
        position: 'absolute',
        bottom: 40,
        flex: 1,
        width: '100%',
        alignItems: "center"
    }

});
