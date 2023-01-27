import { StyleSheet } from 'react-native';
import { COLORS } from '../../common/style/Colors';
import { FONTS } from '../../common/style/Fonts';
export default styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: "center",
    },
    subContainer: {
        alignItems: 'center',
        width: (BaseStyle.WIDTH / 100) * 85,
        backgroundColor: 'rgba(240, 240, 240,0.6)',
        marginBottom: 30,
        borderRadius: 30,
        padding: 30
    },
    welcomeText: {
        textAlign: 'center',
        fontSize: 24,
        color: COLORS.black,
        fontFamily: FONTS.Poppins_SemiBold
    },
    subTitleText: {
        marginBottom: 50,
        textAlign: 'center',
        marginTop: 25,
        fontSize: 14,
        color: COLORS.black,
        fontFamily: FONTS.Poppins_Regular
    }

});
