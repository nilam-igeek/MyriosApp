import { StyleSheet } from 'react-native';
import { COLORS } from '../../../common/style/Colors';
import { FONTS } from '../../../common/style/Fonts';
import BaseStyle from '../../../common/style/BaseStyle';
export default styles = StyleSheet.create({

container: {
        flex: 1,
        backgroundColor: COLORS.seashell
    },
    titleText: {
       marginVertical:28,
        fontSize: 24,
        fontFamily: FONTS.Poppins_SemiBold,
        color:COLORS.black,
    },
    subText:{
        textAlign:'center',
        fontSize: 12,
        fontFamily: FONTS.Poppins_Regular,
        color: COLORS.black,
        width: (BaseStyle.WIDTH / 100) * 60,
         alignSelf: 'center',
    },
      profileStyle: {
        width: 105,
        height: 105,
        borderRadius: 105 / 2,
    },
    profileNameContainer: {
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: "center"
    },
    profileContainer: {
        width: '35%',
        alignSelf: 'center',
    },
    profile: {
        width: 110,
        height: 110,
        borderRadius: 110 / 2,
        backgroundColor: COLORS.black,
        justifyContent: 'center',
        alignItems: "center",
        marginBottom:30
  
    },
        chooseOneText: {
        width: (BaseStyle.WIDTH / 100) * 80,
        alignSelf:"center",
        marginBottom: 5,
        marginTop: 20,
        fontSize: 18,
        color: COLORS.black,
        fontFamily: FONTS.Poppins_SemiBold
    },
    chooseOneCard: {
        width: (BaseStyle.WIDTH / 100) * 80,
        flexDirection: 'row',
        justifyContent: 'space-between' 
},
  blurView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0,0.6)',
    },
    blurSubView: {
        backgroundColor: COLORS.white,
        width: (BaseStyle.WIDTH / 100) * 70,
        alignSelf: 'center',
        borderRadius: 5,
        padding: 15,
    },
    takePhotoText: {
        color: COLORS.black,
        fontSize: 16,
        marginTop: 18,
        textAlign: 'left',
        fontFamily: FONTS.Poppins_Regular
    },
    cancelText: {
        color: COLORS.black,
        fontSize: 16,
        marginTop: 18,
        textAlign: 'right',
        fontFamily: FONTS.Poppins_SemiBold
    },
    titleOfPicker: {
        fontSize: 18,
        color: COLORS.black,
        fontFamily: FONTS.Poppins_SemiBold,
        textAlign:'left'
    }
});
