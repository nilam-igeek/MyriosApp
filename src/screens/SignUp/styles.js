import { StyleSheet, Platform } from 'react-native';
import { COLORS } from '../../common/style/Colors';
import { FONTS } from '../../common/style/Fonts';
import BaseStyle from '../../common/style/BaseStyle';
export default styles = StyleSheet.create({
    // first screen styles
    profileNameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: "center",
        marginBottom: 20
    },
    profileContainer: {
        width: '35%',
        alignSelf: 'center',
    },
    profile: {
        width: 90,
        height: 90,
        borderRadius: 90 / 2,
        borderWidth: 1,
        borderColor: COLORS.grey,
        // backgroundColor: COLORS.black,
        justifyContent: 'center',
        alignItems: "center",


    },
    nameInput: {
        width: '65%',
        alignSelf: 'center',
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    profileStyle: {
        width: 88,
        height: 88,
        borderRadius: 88 / 2,
    },
    chooseOneText: {
        width: '100%',
        alignSelf: "center",
        marginBottom: 5,
        marginTop: 20,
        fontSize: 18,
        color: COLORS.black,
        fontFamily: FONTS.Poppins_SemiBold
    },
    chooseOneCard: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    // second screen styles

    container: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    card: {
        backgroundColor: COLORS.white,
        // height: (BaseStyle.HEIGHT / 100) * 60,
        height: '120%',
        width: '100%',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        alignSelf: 'center',
        alignItems: 'center'
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
        fontFamily: FONTS.Poppins_SemiBold
    },
    signUpText: {
        color: COLORS.cornflowerblue,
        marginVertical: 20,
        fontSize: 16
    },

    // Choose profile screen 
    profileText: {
        width: (BaseStyle.WIDTH / 100) * 80,
        alignItems: 'center',
        fontSize: 26,
        marginTop: 25,
        color: COLORS.black,
        fontFamily: FONTS.Poppins_SemiBold,
    },
    profileSubText: {
        marginTop: 10,
        width: '100%',
        fontSize: 12,
        color: COLORS.black,
        fontFamily: FONTS.Poppins_Regular,
    },
    profileCard: {
        width: '100%',
        flex: 1,
        marginVertical: 15,
        backgroundColor: "green"
    },
    profileSubCard: {
        width: '100%',
        justifyContent: 'center',
        flex: 1,
        margin: 10,
        paddingTop: (Platform.OS) === 'ios' ? 20 : 0
    },
    profileBtn: {
        // marginBottom: 3,
        // marginLeft: 3,
        width: 90,
        height: 90,
        borderWidth: 0.5,
        borderColor: 'grey',
        justifyContent: 'center',
        alignItems: "center"
    },
    profilePic: {
        width: '90%',
        height: '100%',
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        margin: 5,
    },
    MainContainer: {
        width: '100%',
        justifyContent: 'center',
        flex: 1,
        margin: 10,
        paddingTop: (Platform.OS) === 'ios' ? 20 : 0
    },

    GridViewBlockStyle: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        height: 85,
        margin: 5,
        backgroundColor: COLORS.white,
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
        textAlign: 'left'
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
    desText: {
        width: '100%',
        fontSize: 14,
        // marginTop: 30,
        // marginVertical: 20,
        textAlign: 'center',
        fontFamily: FONTS.Poppins_Regular,
    },
    titleNameText: {
        width: '100%',
        fontSize: 28,
        marginVertical: 25,
        color: COLORS.black,
        textAlign: "center",
        fontFamily: FONTS.Poppins_SemiBold,
    },
    subText: {
        width: '65%',
        fontSize: 14,
        marginVertical: 20,
        color: COLORS.black,
        textAlign: "center",
        fontFamily: FONTS.Poppins_SemiBold,
    },
    inputView: {
        color: COLORS.black,
        flexDirection: 'row',
        height: 45,
        justifyContent: 'center',
        alignItems: "center",
        width: (BaseStyle.WIDTH / 100) * 80,
        backgroundColor: COLORS.skyBlue,
        borderRadius: 50,
        paddingLeft: 30
    },
    subIsContainer: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: (BaseStyle.WIDTH / 100) * 80,
    },
    subIsView: {
        width: '100%',
        alignSelf: 'center',
        flexDirection: "row",
        justifyContent: "space-between"
    },
    signUpBtn: {
        width: 100,
        alignItems: "center",
        backgroundColor: COLORS.transparent,
        borderWidth: 1.5,
        borderColor: COLORS.white,
        borderRadius: 20
    },
    signUpText: {
        padding: 5,
        color: COLORS.white,
        fontSize: 15,
        fontFamily: FONTS.Poppins_SemiBold
    },
    mainViewSignUp: {
        marginTop: 60,
        width: '85%',
        alignSelf: "center",
        alignItems: "flex-end"
    }
});
