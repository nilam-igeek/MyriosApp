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
        fontSize: 14,
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
    },
    blurView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0,0.6)',
    },
    blurSubView: {
        backgroundColor: COLORS.white,
        width: (BaseStyle.WIDTH / 100) * 90,
        alignSelf: 'center',
        borderRadius: 5,
        padding: 20,
    },
    closeBtn: {
        position: "absolute",
        right: -7,
        justifyContent: 'center',
        top: -7,
        alignItems: 'center',
        width: 22,
        height: 22,
        borderRadius: 100,
        justifyContent: 'center',
        backgroundColor: COLORS.black
    },
    modalSubText: {
        fontSize: 16,
        fontFamily: FONTS.Poppins_Regular,
        color: COLORS.black
    },
    modalTitleText: {
        fontSize: 18,
        fontFamily: FONTS.Poppins_SemiBold,
        marginVertical: 15,
        color: COLORS.black
    },
    modalProfile: {
        borderWidth: 1,
        borderColor: COLORS.grey,
        width: 100,
        height: 100,
        borderRadius: 100 / 2
    },
    chooseOneText: {
        width: '100%',
        alignSelf: "center",
        marginBottom: 5,
        marginTop: 20,
        fontSize: 16,
        color: COLORS.black,
        fontFamily: FONTS.Poppins_SemiBold
    },
    chooseOneCard: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    range: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        alignSelf: 'center',
        marginLeft: 15
    },
    rangeText: {
        fontFamily: FONTS.Poppins_Regular,
        fontSize: 14,
        color: COLORS.black,
        // marginRight: 10
    },
    blurViewShelter: {
        flex: 1,
        width: "50%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.6)"
    },
    titleText: {
        width: '100%',
        fontSize: 14,
        marginVertical: 10,
        color: COLORS.black,
        textAlign: "left",
        fontFamily: FONTS.Poppins_Regular,
        width: (BaseStyle.WIDTH / 100) * 75,
        alignSelf: 'center'
    },
    titleMainText: {
        width: '100%',
        fontSize: 20,
        marginVertical: 20,
        color: COLORS.black,
        textAlign: "center",
        fontFamily: FONTS.Poppins_SemiBold,
        width: (BaseStyle.WIDTH / 100) * 80,
        alignSelf: 'center'
    },

    inputView: {
        color: COLORS.black,
        flexDirection: 'row',
        height: 45,
        justifyContent: 'center',
        alignItems: "center",
        alignSelf: 'center',
        width: (BaseStyle.WIDTH / 100) * 75,
        backgroundColor: COLORS.skyBlue,
        borderRadius: 50,
        paddingHorizontal: 20,
    },
});
