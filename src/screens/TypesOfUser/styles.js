import { StyleSheet } from 'react-native';
import { COLORS } from '../../common/style/Colors';
import { FONTS } from '../../common/style/Fonts';
export default styles = StyleSheet.create({
 
 container: {
        flex: 1,
        justifyContent: 'flex-end' 
    },
        card: {
        backgroundColor: COLORS.white,
        height: '70%',
        width: '100%',
        borderTopRightRadius: 40,
        borderTopLeftRadius:40
    },
    subContainer: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems:'center',
        width: (BaseStyle.WIDTH / 100) * 80,
    },
        titleText: {
        width: '100%',
        fontSize: 28,
        marginVertical:25,
        color: COLORS.black,
        textAlign: "center",
        fontFamily:FONTS.Poppins_SemiBold,
    },

});
