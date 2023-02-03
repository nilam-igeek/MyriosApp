import { StyleSheet, Platform } from 'react-native';
import { COLORS } from '../../common/style/Colors';
import { FONTS } from '../../common/style/Fonts';
import BaseStyle from '../../common/style/BaseStyle';
export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.seashell
    },
    titleText: {
        textAlign: "center",
        marginTop: 30,
        fontSize: 24,
        fontFamily: FONTS.Poppins_SemiBold,
        color: COLORS.black,
    },
    subProContainer: {
        flex: 1,
        width: (BaseStyle.WIDTH / 100) * 80,
        alignSelf: 'center'
    },
    commonText: {
        textAlign: 'left',
        fontSize: 16,
        fontFamily: FONTS.Poppins_Regular,
        color: COLORS.black,
    },
    roleOfProfile: {
        marginVertical: 30,
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
        backgroundColor: COLORS.white
    },
    userTitleText: {
        fontSize: 26,
        fontFamily: FONTS.Poppins_Regular,
        color: COLORS.black,
    },
    userTitleSubText: {
        fontSize: 20,
        fontFamily: FONTS.Poppins_SemiBold,
        color: COLORS.black,
        marginTop: 10
    },
    itemCard: {
        flexDirection: "row",
        width: (BaseStyle.WIDTH / 100) * 80,
        alignSelf: 'center',
        borderBottomColor: COLORS.black,
        borderBottomWidth: 1,
        alignItems: 'center',
        paddingBottom: 8,
        paddingTop: 20
    },
    profileStyle: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: 'gray'
    },
    userName: {
        color: COLORS.black,
        fontFamily: FONTS.Poppins_SemiBold,
        fontSize: 12
    },
    closeIcon: {
        width: 50,
        height: 50,
        marginLeft: 20,
        marginTop: 20,
        marginBottom: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    labelStyles: {
        width: '100%',
        paddingLeft: 28,
        fontSize: 18,
        backgroundColor: COLORS.transparent,
        fontFamily: FONTS.Poppins_SemiBold,
        color: COLORS.black,
    },
    menuText: {
        color: COLORS.black,
        paddingLeft: 28,
        paddingVertical: 20,
        fontSize: 18,
        fontFamily: FONTS.Poppins_SemiBold
    },
    // SchedulingOfCalls
    dot: {
        position: 'absolute',
        top: Platform.OS === 'ios' ? -27 : -23,
        left: -15,
        borderRadius: 12 / 2,
        width: 12,
        height: 12,
        justifyContent: "center",
        alignItems: 'center',
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.12,
        shadowRadius: 1.84,
        elevation: 2,
    },
    subViewOfCall: {
        flex: 1,
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2.84,
        elevation: 3,
        width: '100%',
        alignSelf: 'center',
        backgroundColor: COLORS.floralwhite,
    },
    calendarHeaderView: {
        paddingLeft: 8,
        backgroundColor: COLORS.orangered,
        width: '100%',
        alignSelf: "center"
    },
    monthView: {
        height: 22,
        justifyContent: 'center',
        marginTop: 8,
        width: 100,
        backgroundColor: COLORS.white,
        borderRadius: 20
    },
    monthTeamText: {
        fontSize: 11,
        padding: 2,
        marginLeft: 10,
        color: COLORS.orangered,
        fontFamily: FONTS.Poppins_Regular
    },
    dateTime: {
        height: (BaseStyle.HEIGHT / 100) * 80,
        backgroundColor: COLORS.floralwhite,
        flex: 1,
        alignSelf: 'center',
        alignItems: "center"
    },
    warpRowControlMonthYear: {
        backgroundColor: COLORS.orangered,
        color: COLORS.black,
    },
    weekdayStyle: {
        color: COLORS.orangered,
        fontSize: 16,
        fontFamily: FONTS.Poppins_Regular,
    },
    textDayStyle: {
        color: COLORS.black,
        fontSize: 12,
        fontFamily: FONTS.Poppins_Regular
    },
    warpDayStyle: {
        borderColor: COLORS.orangered,
        backgroundColor: COLORS.floralwhite,
        height: (BaseStyle.HEIGHT / 100) * 10,
    },
    iconText: {
        fontSize: 20,
        color: COLORS.white,
        padding: 5,
        fontFamily: FONTS.Poppins_SemiBold
    },
    // modal of call listing
    callModalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
        padding: 10,
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
    listContainer: {
        flexDirection: "row",
        width: '95%',
        alignSelf: "center",
        justifyContent: 'space-between',
        padding: 5
    },
    urlText: {
        width: '72%',
        alignSelf: "center",
        fontFamily: FONTS.Poppins_Regular,
        color: 'royalblue',
        fontSize: 10
    },
    requestBtn: {
        height: 25,
        width: '20%',
        backgroundColor: COLORS.green,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: 'center'
    },
    requestText: {
        color: COLORS.white,
        fontSize: 10,
        fontFamily: FONTS.Poppins_SemiBold
    }
});
