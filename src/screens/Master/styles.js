import { StyleSheet } from 'react-native';
import { COLORS } from '../../common/style/Colors';
import { FONTS } from '../../common/style/Fonts';
import BaseStyle from '../../common/style/BaseStyle';
export default styles = StyleSheet.create({

container: {
        flex: 1,
        backgroundColor: COLORS.seashell
    },
    titleText: {
        textAlign:"center",
        marginTop:30,
        fontSize: 24,
        fontFamily: FONTS.Poppins_SemiBold,
        color:COLORS.black,
    },
    subProContainer: {
        flex: 1,
        width: (BaseStyle.WIDTH / 100) * 80,
        alignSelf: 'center'
    },
    commonText: {
        textAlign:'left',
        fontSize: 16,
        fontFamily: FONTS.Poppins_Regular,
        color: COLORS.black,
    },
    roleOfProfile: {
        marginVertical: 30,
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
        backgroundColor: COLORS.white
    },
    userTitleText: {
        fontSize: 26,
        fontFamily: FONTS.Poppins_Regular,
        color: COLORS.black,
    },
     userTitleSubText: {
        fontSize: 20,
        fontFamily: FONTS.Poppins_SemiBold,
         color: COLORS.black,
        marginTop:10
    },
itemCard: {
        flexDirection:"row",
        width: (BaseStyle.WIDTH / 100) * 80,
        alignSelf: 'center',
        borderBottomColor: COLORS.black,
        borderBottomWidth: 1,
        alignItems: 'center',
        paddingBottom: 8,
        paddingTop:20
    },
profileStyle: {
        width: 60,
        height: 60,
        borderRadius:60/2,
        justifyContent: 'center',
        borderWidth: 0.5,
       borderColor:'gray'
    },
    userName: {
        color: COLORS.black,
        fontFamily: FONTS.Poppins_SemiBold,
        fontSize:12
    },
     closeIcon: {
        width: 50,
        height: 50,
        marginLeft: 20,
        marginTop: 20,
        marginBottom: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    labelStyles: {
        width: '100%',
        paddingLeft: 28,
        fontSize: 18,
        backgroundColor: COLORS.transparent,
        fontFamily: FONTS.Poppins_SemiBold,
        color: COLORS.black,
    },
    menuText: {
        color: COLORS.black,
        paddingLeft: 28,
        paddingVertical: 20,
        fontSize: 18,
        fontFamily: FONTS.Poppins_SemiBold
    },
});
