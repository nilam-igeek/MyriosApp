import { StyleSheet, Platform } from 'react-native';
import { COLORS } from '../../../common/style/Colors';
import BaseStyle from '../../../common/style/BaseStyle';
import { FONTS } from '../../../common/style/Fonts';

export default styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: (BaseStyle.WIDTH / 100) * 85,
        alignSelf: 'center',
        paddingVertical: 20,
        marginTop: Platform.OS === 'ios' ? 40 : 10
    },
    headerText: {
        textAlign: "center",
        width: (BaseStyle.WIDTH / 100) * 65,
        color: COLORS.black,
        fontFamily: FONTS.Poppins_SemiBold,
        fontSize: 16
    },
    pickerContainer: {
        width: (BaseStyle.WIDTH / 100) * 80,
        height: 45,
        justifyContent: 'center',
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2.84,
        elevation: 3,
        backgroundColor: COLORS.lemonchiffon,
        borderRadius: 50,
    },
    text: {
        width: (BaseStyle.WIDTH / 100) * 70,
        alignSelf: 'center',
        color: COLORS.black
    }
});
