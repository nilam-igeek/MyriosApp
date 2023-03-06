import { StyleSheet } from 'react-native';
import { COLORS } from '../../../common/style/Colors';
import BaseStyle from '../../../common/style/BaseStyle';
import { FONTS } from '../../../common/style/Fonts';

export default styles = StyleSheet.create({

    container: {
        flexDirection: "column",
        flex: 1,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: COLORS.grey,
        borderRadius: 15,
        padding: 10,
        marginHorizontal: 5
        // marginLeft: 10,
    },
    GridViewBlockStyle: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        height: (BaseStyle.HEIGHT / 100) * 25,
        margin: 6,
        backgroundColor: COLORS.white,
    },
    profilePic: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        margin: 5,

    },
    firstTitle: {
        color: COLORS.black,
        fontSize: 12,
        fontFamily: FONTS.Poppins_SemiBold
    },
    secondTitle: {
        color: COLORS.black,
        fontSize: 12,
        fontFamily: FONTS.Poppins_Regular
    },
    favBtn: {
        justifyContent: 'flex-end',
        alignItems: "flex-end",
        position: 'absolute',
        bottom: -10,
        right: 5,
    },
    textContainer: {
        flex: 1,
        marginLeft: 10
    }

});
