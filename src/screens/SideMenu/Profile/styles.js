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
        marginVertical: 28,
        fontSize: 24,
        fontFamily: FONTS.Poppins_SemiBold,
        color: COLORS.black,
    },
    subText: {
        textAlign: 'center',
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
        marginBottom: 30

    },
    chooseOneText: {
        width: (BaseStyle.WIDTH / 100) * 80,
        alignSelf: "center",
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
    blurIsSubView: {
        backgroundColor: COLORS.white,
        width: (BaseStyle.WIDTH / 100) * 85,
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
    countryView: {
        width: (BaseStyle.WIDTH / 100) * 80,
        alignSelf: 'center',
        backgroundColor: COLORS.lemonchiffon,
        borderRadius: 50,
        height: 45,
        marginTop: 30,
        justifyContent: 'center',
    },
    countryText: {
        marginLeft: 23,
        color: COLORS.black,
        fontFamily: FONTS.Poppins_Regular
    },
    containerProfile: {
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
    profileText: {
        width: (BaseStyle.WIDTH / 100) * 80,
        alignItems: 'center',
        fontSize: 26,
        marginTop: 25,
        color: COLORS.black,
        fontFamily: FONTS.Poppins_SemiBold,
    },
    subContainer: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: (BaseStyle.WIDTH / 100) * 80,
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
    profilePic: {
        width: '90%',
        height: '100%',
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        margin: 5,
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
        textAlign: 'center',
        fontSize: 16,
        fontFamily: FONTS.Poppins_Regular,
        color: COLORS.black,
        width: "80%"
    },

});
