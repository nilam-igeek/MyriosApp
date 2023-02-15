import { StyleSheet, Platform } from 'react-native';
import { COLORS } from '../../common/style/Colors';
import { FONTS } from '../../common/style/Fonts';
import BaseStyle from '../../common/style/BaseStyle';
export default styles = StyleSheet.create({

    btnStyle: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: 'center',
        marginTop: 30,
        marginBottom: Platform.OS === 'ios' ? 65 : 30
    },
   
    container: {
        flex: 1,
        justifyContent: 'flex-end'
    },
     card: {
        backgroundColor: COLORS.white,
        height: (BaseStyle.HEIGHT / 100) * 60,
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
        fontSize: 26,
        marginVertical: 25,
        color: COLORS.black,
        fontFamily:FONTS.Poppins_SemiBold
    },
    lanText: {
        fontSize: 16,
        fontFamily: FONTS.Poppins_SemiBold,
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 10,
        width: '100%',
        color: COLORS.black,
    },
    dropDownContainerStyle: {
        backgroundColor: COLORS.white,
        zIndex: 2,
        position: 'absolute',
        borderWidth: 0.5,
        borderColor: 'grey'
    },
    dropDownPicker: {
        borderWidth: 0.5,
        borderColor: 'grey'
    }

});
