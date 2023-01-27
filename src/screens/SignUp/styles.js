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
        alignItems: "center"
    },
    profileContainer: {
        width: '35%',
        alignSelf: 'center',
    },
    profile: {
        width: 90,
        height: 90,
        borderRadius: 90 / 2,
        backgroundColor: COLORS.black,
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
        width: 89,
        height: 89,
        borderRadius: 89 / 2,
    },
    // second screen styles

    container: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    card: {
        backgroundColor: COLORS.white,
        height: '65%',
        width: '100%',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40
    },
    subContainer: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: (BaseStyle.WIDTH / 100) * 80,
    },
    titleText: {
        width: '100%',
        fontSize: 28,
        marginVertical: 25,
        color: COLORS.black,
        textAlign: "left",
        marginLeft: 20,
        // fontStyle: FONTS.Poppins_SemiBold,
    },
    signUpText: {
        color: COLORS.cornflowerblue,
        marginVertical: 20,
        fontSize: 16
    },

    // Choose profile screen 
    profileText: {
        width: '100%',
        fontSize: 28,
        marginTop: 25,
        color: COLORS.black,
        textAlign: "left",
    },
    profileSubText: {
        marginTop: 10,
        width: '100%',
        fontSize: 12,
        color: COLORS.black,
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
        width: '100%',
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
        borderWidth: 0.5,
        borderColor: COLORS.grey

    }
});
