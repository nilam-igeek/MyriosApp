import React, { useState, useEffect } from 'react';
import { View, Text, StatusBar } from 'react-native';
import styles from './styles';
import '../../../../assets/i18n/i18n';
import { useTranslation } from 'react-i18next';
import Swiper from 'react-native-swiper';
import { COLORS } from '../../../common/style/Colors';
import Header from '../../../components/core/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ROLE } from '../../../constants/types';
import { dataOfSwiper, donorSwiper,dataSwiper } from './ArrayOfSwiperData';
import ArrowLeftSvg from '../../../common/svgs/ArrowLeftSvg';
import ArrowRightSvg from '../../../common/svgs/ArrowRightSvg';
const HowTo = (props) => {

    const { t } = useTranslation();

    const [isRole, setIsRole] = useState('');
    const isShelter = isRole === ROLE.SHELTER
    const isDonor = isRole === ROLE.DONOR

    useEffect(() => {
        async function check() {
            var item = await AsyncStorage.getItem('userType');
            setIsRole(item)
        }
        check();
    }, []);
    const dataList = isDonor ? donorSwiper : dataOfSwiper

    return (
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.seashell} />
            <Header title={'Myrios'} onPress={() => { props.navigation.toggleDrawer() }} />
            <Swiper
                style={styles.wrapper}
                showsButtons={true}
                dot={<View style={styles.dot} />}
                activeDot={<View style={styles.activeDot} />}
                nextButton={<View style={{width:20,height:20}}><ArrowRightSvg/></View>}
                prevButton={<View style={{ width: 20, height: 20 }}><ArrowLeftSvg/></View>}
                buttonWrapperStyle={{
                    backgroundColor: 'transparent',
                    flexDirection: 'row',
                    position: 'absolute',
                    top: 0, left: 0, flex: 1,
                    paddingHorizontal: 18,
                    paddingVertical: 50, justifyContent: 'space-between', alignItems: 'flex-end'
                }}
            >
                {dataSwiper.map((item) => {
                    return (
                        <View style={styles.slide1}>
                            <Text style={styles.skipText}>{'Skip'}</Text>
                            <Text style={styles.titleText}>{item.title}</Text>
                          <Text style={styles.subText}>{item.subTitle}</Text>
                        </View>
                    )
                })}
            </Swiper>
        </View>
    );
};

export default HowTo;
