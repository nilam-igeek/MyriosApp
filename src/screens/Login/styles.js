import { StyleSheet } from 'react-native';
import { COLORS } from '../../common/style/Colors';
import { FONTS } from '../../common/style/Fonts';
import BaseStyle  from '../../common/style/BaseStyle';
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
        alignItems: 'center',
   
        width: (BaseStyle.WIDTH / 100) * 80,
    },
        titleText: {
        width: '100%',
        fontSize: 28,
        marginVertical:25,
        color: COLORS.black,
        textAlign: "left",
        marginLeft: 20,
        // fontStyle: FONTS.Poppins_SemiBold,
    },
    signUpText: {
        color: COLORS.cornflowerblue,
        marginVertical: 25,
        fontSize: 16
        }

});
