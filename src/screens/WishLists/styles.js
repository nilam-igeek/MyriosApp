import { StyleSheet, Platform } from 'react-native';
import { COLORS } from '../../common/style/Colors';
import { FONTS } from '../../common/style/Fonts';
import BaseStyle from '../../common/style/BaseStyle';
export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.seashell
    },
    wishListText: {
        width: (BaseStyle.WIDTH / 100) * 85,
        fontSize: 24,
        fontFamily: FONTS.Poppins_SemiBold,
        color: COLORS.black,
        alignSelf: 'center',
    },
    GridViewBlockStyle: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        height: (BaseStyle.HEIGHT / 100) * 25,
        margin: 5,
        backgroundColor: COLORS.white,
        borderRadius: 15,
    },
    profilePic: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        margin: 5,
    },
    listContainer: {
        width: (BaseStyle.WIDTH / 100) * 85,
        alignSelf: 'center',
        justifyContent: 'center',
        flex: 1,
        paddingTop: (Platform.OS) === 'ios' ? 20 : 0
    },
    sortByContainer: {
        flexDirection: 'row',
        width: (BaseStyle.WIDTH / 100) * 85,
        alignSelf: "center",
        marginTop: 20,
    },
    sortByText: {
        fontSize: 12,
        fontFamily: FONTS.Poppins_SemiBold,
        color: COLORS.black
    },
    // menubar
    menuText: {

        paddingLeft: 28,
        paddingVertical: 20,
        fontSize: 18,
        fontFamily: FONTS.Poppins_SemiBold
    },
    blurView: {
        flex: 1,
        width: "50%",
        height: "100%",
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    myriosContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    myriosSubContainer: {
        alignItems: "flex-end",
        justifyContent: "center"
    },
    myriosText: {
        width: (BaseStyle.WIDTH / 100) * 100,
        marginBottom: 5,
        color: COLORS.white,
        fontSize: 30,
        textAlign: 'center',
        fontFamily: FONTS.Poppins_SemiBold
    },
    myriosSubText: {
        width: "100%",
        color: COLORS.white,
        fontSize: 18,
        textAlign: 'center',
        fontFamily: FONTS.Poppins_SemiBold
    },
    btnView: {
        position: 'absolute',
        bottom: 40,
        flex: 1,
        width: '100%',
        alignItems: "center"
    },
    myriosTitleText: {
        fontSize: 16,
        color: COLORS.white,
        marginTop: Platform.OS === 'ios' ? 50 : 20,
        fontFamily: FONTS.Poppins_SemiBold,
        paddingLeft: 20,
        width: '100%'
    }
});
