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
        // height: (BaseStyle.HEIGHT / 100) * 60,
            height:'120%',
        width: '100%',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        alignSelf: 'center',
        alignItems:'center'
    },
    subContainer: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: (BaseStyle.WIDTH / 100) * 80,
    },
        titleText: {
        width: (BaseStyle.WIDTH / 100) * 80,
        alignItems: 'center',
        textAlign:"center",
        fontSize: 26,
        marginVertical: 25,
        color: COLORS.black,
        fontFamily:FONTS.Poppins_SemiBold
    },

});
