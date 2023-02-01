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
        height: '65%',
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
        color: COLORS.white,
        flexDirection: 'row',
        height: 45,
        justifyContent: 'center',
        alignItems: "center",
        width: (BaseStyle.WIDTH / 100) * 70,
        backgroundColor: COLORS.cornflowerblue,
        borderRadius: 50,
        paddingLeft: 30
    }

});
