import React, { useState } from 'react';
import { View, Text, StatusBar, Alert,Image, FlatList, Pressable, Platform } from 'react-native';
import styles from './styles';
import '../../../assets/i18n/i18n';
import { useTranslation } from 'react-i18next';
import { COLORS } from '../../common/style/Colors';
import Header from '../../components/core/Header';
import BaseStyle from '../../common/style/BaseStyle';
import DateTime from 'react-native-customize-selected-date';
import _ from 'lodash'
import moment from 'moment';
import { IMAGES } from '../../common/style/Images';
const SchedulingOfCalls = (props) => {

    const { t } = useTranslation();
    const [time, setTime] = useState('');

    const renderChildDay = (day) => {
        return (
            <View style={{
                position: 'absolute',
                top: -3,
                left: -3,
                borderRadius: 8 / 2,
                width: 8,
                height: 8,
                backgroundColor:day === '2023-02-04' ? 'green':day === '2023-02-21' ? 'red': 'white',
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
            }} />    
        )
  }
    
 const onChangeDate =(date) =>{
    Alert.alert(date)
  }

    return (
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.seashell} />
            <Header title={'Myrios'} onPress={() => { props.navigation.toggleDrawer() }} />
            <View style={{ flex: 1, alignItems: "center" }}>

                <View style={{
                    shadowColor: COLORS.black,
                    shadowOffset: {
                        width: 0,
                        height: 4,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 2.84,
                    elevation: 3,
                    width: 350,
                    alignSelf: 'center',
                    backgroundColor: 'floralwhite',
                }}>
                    <View style={{ paddingLeft: 8, backgroundColor: 'orangered', width: '100%', alignSelf: "center" }}>
                        <View style={{ marginTop: 8, width: 100, backgroundColor: COLORS.white, borderRadius: 20 }}>
                            <Text style={{fontSize:12,padding:2, marginLeft: 10,color:'orangered' }}>{'MONTH'}</Text>
                        </View>
                        <View style={{ marginTop: 8, marginBottom: 8, width: 100, backgroundColor: COLORS.white, borderRadius: 20 }}>
                            <Text style={{fontSize:12,padding:2, marginLeft: 10 ,color:'orangered'}}>{'TEAM'}</Text>
                        </View>
                    </View>
                    <DateTime
                        containerStyle={{
                            backgroundColor: 'floralwhite', marginTop: 0, paddingTop: 0, paddingBottom: 0, marginBottom: 0,
                            width: 350,
                            height:Platform.OS === 'ios'?373:379,
                            // height:380,
                            alignSelf: 'center',
                             alignItems: "center"
                        }}
                        warpRowControlMonthYear={{ backgroundColor: "orangered", color:'black'}}
                        notCurrentDayOfMonthStyle={{ color:'gray' }}
                        weekdayStyle={{ color:'orangered',fontSize:16 }}
                        textDayStyle={{color:'black',fontSize:12}}
                        warpDayStyle={{borderColor:'orangered', backgroundColor: 'floralwhite',width:50,height:50,alignSelf:'center' }}
                        dateSelectedWarpDayStyle={{ backgroundColor: COLORS.transparent }}
                        renderPrevYearButton={() => <Text style={{fontSize:20,color:COLORS.white,padding:5}}>{'<<'}</Text>}
                        renderPrevMonthButton={() => <Text style={{fontSize:20,color:COLORS.white,padding:5}}>{'<'}</Text>}
                        renderNextMonthButton={() => <Text style={{fontSize:20,color:COLORS.white,padding:5}}>{'>>'}</Text>}
                        renderNextYearButton={() => <Text style={{fontSize:20,color:COLORS.white,padding:5}}>{'>'}</Text>}
                        
          date={time}
          changeDate={(date) => onChangeDate(date)}
          format='YYYY-MM-DD'
          renderChildDay={(day) => renderChildDay(day)}
        />
                </View>
            </View>
        </View>
    );
};

export default SchedulingOfCalls;
