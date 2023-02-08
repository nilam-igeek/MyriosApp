import React, { useState,useEffect } from 'react';
import { View, Text, StatusBar} from 'react-native';
import styles from './styles';
import '../../../assets/i18n/i18n';
import { useTranslation } from 'react-i18next';
import { COLORS } from '../../common/style/Colors';
import Header from '../../components/core/Header';
import DateTime from 'react-native-customize-selected-date';
import _ from 'lodash'
import ListOfCallLink from './ListOfCallLink';

const SchedulingOfCalls = (props) => {
    const { t } = useTranslation();
    const [time, setTime] = useState('');
    const [isShowModal, setIsShowModal] = useState(false);

    const renderChildDay = (day) => {
        return (
            <View style={[styles.dot,
                {
                    backgroundColor: day === '2023-02-04' ?
                        COLORS.green : day === '2023-02-21' ? 
                        COLORS.red : COLORS.white
                }]} />
        )
    }
    const onChangeDate = (date) => {
        setIsShowModal(true)
    }


    return (
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.seashell} />
            <Header title={'Myrios'} onPress={() => { props.navigation.toggleDrawer() }} />
            <View style={{ height:(BaseStyle.HEIGHT / 100) * 100, alignItems: "center"}}>
                <View style={styles.subViewOfCall}>
                    <View style={styles.calendarHeaderView}>
                        <View style={styles.monthView}>
                            <Text style={styles.monthTeamText}>{'MONTH'}</Text>
                        </View>
                        <View style={[styles.monthView, { marginBottom: 8 }]}>
                            <Text style={styles.monthTeamText}>{'TEAM'}</Text>
                        </View>
                    </View>
                    <DateTime
                        containerStyle={styles.dateTime}
                        warpRowControlMonthYear={styles.warpRowControlMonthYear}
                        notCurrentDayOfMonthStyle={{ color: 'gray' }}
                        weekdayStyle={styles.weekdayStyle}
                        textDayStyle={styles.textDayStyle}
                        warpDayStyle={styles.warpDayStyle}
                        dateSelectedWarpDayStyle={{ backgroundColor: COLORS.transparent }}
                        renderPrevYearButton={() => <Text style={styles.iconText}>{'<<'}</Text>}
                        renderPrevMonthButton={() => <Text style={styles.iconText}>{'<'}</Text>}
                        renderNextMonthButton={() => <Text style={styles.iconText}>{'>>'}</Text>}
                        renderNextYearButton={() => <Text style={styles.iconText}>{'>'}</Text>}
                        date={time}
                        changeDate={(date) => onChangeDate(date)}
                        format='YYYY-MM-DD'
                        renderChildDay={(day) => renderChildDay(day)}/>
                </View>
            </View>
            <ListOfCallLink
                visible={isShowModal}
                onRequestClose={() => { setIsShowModal(!isShowModal) }}
                onClickClose={() => { setIsShowModal(!isShowModal)}}/>
        </View>
    );
};

export default SchedulingOfCalls;
