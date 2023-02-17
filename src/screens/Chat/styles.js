import { StyleSheet } from 'react-native';
import { COLORS } from '../../common/style/Colors';
import { FONTS } from '../../common/style/Fonts';
import BaseStyle from '../../common/style/BaseStyle';
export default styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    card: {
        backgroundColor: COLORS.white,
        height: (BaseStyle.HEIGHT / 100) * 60,
        width: '100%',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40
    },
    subContainer: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: (BaseStyle.WIDTH / 100) * 80,
    },
    titleText: {
        width: '100%',
        fontSize: 28,
        marginVertical: 25,
        color: COLORS.black,
        textAlign: "center",
        fontFamily: FONTS.Poppins_SemiBold,
    },
    subText: {
        width: '65%',
        fontSize: 14,
        marginVertical: 20,
        color: COLORS.black,
        textAlign: "center",
        fontFamily: FONTS.Poppins_SemiBold,
    },
    inputView: {
        color: COLORS.black,
        flexDirection: 'row',
        height: 45,
        justifyContent: 'center',
        alignItems: "center",
        width: (BaseStyle.WIDTH / 100) * 80,
        backgroundColor: COLORS.skyBlue,
        borderRadius: 50,
        paddingLeft: 30
    },
    subView: {
        width: '100%',
        alignSelf: 'center',
        flexDirection: "row",
        justifyContent: "space-between"
    }

});
