import { StyleSheet } from 'react-native';
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
        // flex: 1,
    Height: '85%',
        // backgroundColor:'red',
        // justifyContent: 'center',
        alignItems: 'center',
    },
    dot: {
        backgroundColor: '#EEEEEE',
        borderColor: "lightslategrey",
        // borderWidth: 1,
        width: 12,
        height: 12,
        borderRadius: 12 / 2,
        marginLeft: 10,
        marginBottom: 20,
    },
    activeDot: {
        backgroundColor: '#FFC49B',
        borderColor: "dimgray",
        // borderWidth: 1,
        width: 12,
        height: 12,
        borderRadius: 12 / 2,
        marginLeft: 10,
        marginBottom: 20,
    },
    text: {
        marginTop:10,
        width: (BaseStyle.WIDTH / 100) * 90,
        alignSelf: 'center',
        textAlign:"center",
        color: COLORS.black,
        fontSize: 16,
        fontFamily:FONTS.Poppins_SemiBold
    },
    titleText: {
        marginTop:20,
        width: (BaseStyle.WIDTH / 100) * 90,
        alignSelf: 'center',
        color: COLORS.black,
        fontSize: 18,
        textAlign:'center',
        fontFamily:FONTS.Poppins_SemiBold
    },
    subText: {
        marginTop:20,
        width: (BaseStyle.WIDTH / 100) * 90,
        alignSelf: 'center',
         textAlign:'center',
        color: COLORS.black,
        fontSize: 14,
        fontFamily:FONTS.Poppins_Regular
    },
    skipText: {
        color: COLORS.black,
        width: (BaseStyle.WIDTH / 100) * 90,
        alignSelf: 'center',
        textAlign: 'right',
        fontSize: 14,
        fontFamily:FONTS.Poppins_SemiBold
    }

});
