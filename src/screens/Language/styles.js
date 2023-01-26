import { StyleSheet } from 'react-native';
import { COLORS } from '../../common/style/Colors';
import { FONTS } from '../../common/style/Fonts';
export default styles = StyleSheet.create({
 
    btnStyle: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: 'center',
        marginVertical: 30,
    },
    titleText: {
        width: '100%',
        fontSize: 28,
        color: COLORS.black,
        textAlign: "left",
        // fontStyle: FONTS.Poppins_SemiBold,
    },
    container: {
        flex: 1,
        justifyContent: 'flex-end' 
    },
    card: {
        backgroundColor: COLORS.white,
        height: '65%',
        width: '90%',
        borderTopRightRadius: 40
    },
    subContainer: {
        marginTop: 20,
        marginLeft: 25,
        width: (BaseStyle.WIDTH / 100) * 70,
    },
    lanText: {
        fontSize: 14,
        // fontStyle: FONTS.Poppins_SemiBold,                     
        alignSelf: 'center',
        marginTop:40,
        marginLeft: 22,
        marginBottom:10,
        width:'100%',
        color:COLORS.grey,
    }

});
