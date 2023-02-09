import { StyleSheet,Platform } from 'react-native';
import { COLORS } from '../../common/style/Colors';
import { FONTS } from '../../common/style/Fonts';
import BaseStyle  from '../../common/style/BaseStyle';
export default styles = StyleSheet.create({
 
    btnStyle: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: 'center',
        marginTop: 30,
        marginBottom: Platform.OS === 'ios' ? 65 :30
    },
    titleText: {
        width: '100%',
        fontSize: 28,
        color: COLORS.black,
        textAlign: "left",
        fontFamily:FONTS.Poppins_SemiBold,
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
        fontFamily:FONTS.Poppins_SemiBold,                    
        alignSelf: 'center',
        marginTop:40,
        marginLeft: 22,
        marginBottom:10,
        width:'100%',
        color:COLORS.grey,
    }

});
