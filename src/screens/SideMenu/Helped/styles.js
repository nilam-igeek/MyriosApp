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
        marginTop:30,
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
         marginBottom:30
    },
    itemCard: {
        flexDirection:"row",
        width: (BaseStyle.WIDTH / 100) * 80,
        alignSelf: 'center',
        // backgroundColor: "pink",
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
        marginLeft: 20,
        fontFamily: FONTS.Poppins_SemiBold,
        fontSize:12
  }

});
