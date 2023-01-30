import { StyleSheet, Platform } from 'react-native';
import { COLORS } from '../../../common/style/Colors';
import { FONTS } from '../../../common/style/Fonts';
import BaseStyle from '../../../common/style/BaseStyle';
export default styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: COLORS.seashell
    },
    wrapper: {},
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.seashell
    },
    dot: {
        backgroundColor: 'aliceblue',
        borderColor: "lightslategrey",
        borderWidth: 1,
        width: 14,
        height: 14,
        borderRadius: 14 / 2,
        marginLeft: 10,
        marginBottom: 35,
    },
    activeDot: {
        backgroundColor: 'gainsboro',
        borderColor: "dimgray",
        borderWidth: 1,
        width: 14,
        height: 14,
        borderRadius: 14 / 2,
        marginLeft: 10,
        marginBottom: 35,
    },
    text: {
        color: '#000',
        fontSize: 30,
        fontWeight: 'bold'
    }

});
