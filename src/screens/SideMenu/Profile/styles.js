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
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
    },
    profileNameContainer: {
        // flexDirection: 'row',
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

});
