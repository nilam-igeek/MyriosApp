import { StyleSheet } from 'react-native';
import { COLORS } from '../../../common/style/Colors';
import BaseStyle from '../../../common/style/BaseStyle';
import { FONTS } from '../../../common/style/Fonts';

export default styles = StyleSheet.create({

    inputView: {
        flexDirection: 'row',
        width: (BaseStyle.WIDTH / 100) * 85,
        height: 45,
        justifyContent: 'center',
        alignItems: "center",
        shadowColor: COLORS.black,
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2.84,
        elevation: 3,
        backgroundColor:'red'
    },
     inputCard: {
        flexDirection: 'row',
        width: (BaseStyle.WIDTH / 100) * 85,
        height: 45,
        justifyContent: 'center',
        alignItems: "center",
    },
    titleText: {
        fontSize: 14,
        // fontStyle: FONTS.Popins_Black,
        alignSelf: 'center',
        marginTop:5,
    }

});
