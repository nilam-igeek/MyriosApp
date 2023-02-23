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
        borderWidth: 1,
        borderColor: COLORS.grey,
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
    responseText: {
        fontSize: 20,
        fontFamily: FONTS.Poppins_SemiBold,
        color: COLORS.black,
        width: '40%',
        alignSelf: 'center'
    },
    sendText: {
        fontSize: 20,
        fontFamily: FONTS.Poppins_SemiBold,
        color: COLORS.black,
        marginTop: 20,
        textAlign: 'right'
    },
    responseView: {
        marginTop: 10,
        alignItems: "center",
        flexDirection: 'row',
        width: '100%',
        justifyContent: "space-between"
    },
    inputView: {
        padding: 10,
        borderRadius: 10,
        width: '60%',
        backgroundColor: 'ghostwhite',
        height: 80,
        alignSelf: "center",
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.20,
        shadowRadius: 2.84,
        elevation: 3,
    },
    itemCard: {
        flexDirection: "row",
        width: (BaseStyle.WIDTH / 100) * 80,
        alignSelf: 'center',
        borderBottomColor: COLORS.black,
        borderBottomWidth: 1,
        alignItems: 'center',
        paddingBottom: 8,
        paddingTop: 20,
        justifyContent: 'space-between'
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
    },
    profile: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        backgroundColor: COLORS.black,
        justifyContent: 'center',
        alignItems: "center",
    },
    analyticsContainer: {
        flex: 1,
        width: (BaseStyle.WIDTH / 100) * 90,
        alignSelf: 'center',
    },
    analyticsText: {
        textAlign: "left",
        color: COLORS.black,
        fontSize: 24,
        fontFamily: FONTS.Poppins_SemiBold
    },
    item: {
        flex: 1,
        alignItems: "center",
        padding: 10,
        backgroundColor: COLORS.cream,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: COLORS.seashell
    },
    listView: {
        marginTop: 20,
        // flex: 1,
        marginHorizontal: "auto",
        width: '100%',
        alignSelf: 'center'
    },
    itemText1: {
        color: COLORS.black,
        fontSize: 12,
        fontFamily: FONTS.Poppins_SemiBold
    },
    itemText2: {
        marginVertical: 10,
        color: COLORS.black,
        fontSize: 18,
        fontFamily: FONTS.Poppins_SemiBold
    },
    itemText3: {
        color: COLORS.black,
        fontSize: 12,
        fontFamily: FONTS.Poppins_Regular
    },
    overView: {
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
        width: '100%',
        alignSelf: 'center',
        flexDirection: 'row'
    },
    overViewText: {
        fontSize: 20,
        color: COLORS.black,
        fontFamily: FONTS.Poppins_SemiBold
    },
    dateTimeText: {
        fontSize: 16,
        color: COLORS.black,
        marginRight: 8,
        fontFamily: FONTS.Poppins_Regular
    },
    pieCard: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    pieBox: {
        width: 25,
        height: 25,
        backgroundColor: "red",
        borderRadius: 5,
        marginRight: 10
    },
    pieText: {
        fontSize: 12,
        color: COLORS.black,
        fontFamily: FONTS.Poppins_Regular
    },
    mostPopularText: {
        marginBottom: 15,
        textAlign: 'left',
        fontSize: 20,
        color: COLORS.black,
        fontFamily: FONTS.Poppins_SemiBold
    },
    pieContainer: {
        justifyContent: 'center',
        alignItems: "center",
        marginTop: 20
    },
    pieSubContainer: {
        marginVertical: 38,
        flexDirection: 'row',
        width: '100%',
        alignSelf: 'center',
        justifyContent: 'space-between'
    },
    popularScreen: {
        alignItems: "center",
        width: 320,
        height: 570,
        alignSelf: 'center',
        marginBottom: 10
    },
    popularScreenImg: {
        width: '100%',
        height: '100%'
    }
});
