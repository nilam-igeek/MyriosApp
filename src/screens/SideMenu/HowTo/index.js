import React, { useState, useEffect } from 'react';
import { View, Text, StatusBar, Image } from 'react-native';
import styles from './styles';
import '../../../../assets/i18n/i18n';
import { useTranslation } from 'react-i18next';
import Swiper from 'react-native-swiper';
import { COLORS } from '../../../common/style/Colors';
import Header from '../../../components/core/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ROLE } from '../../../constants/types';
import { donorSwiper, dataSwiper } from './ArrayOfSwiperData';
import ArrowLeftSvg from '../../../common/svgs/ArrowLeftSvg';
import ArrowRightSvg from '../../../common/svgs/ArrowRightSvg';
const HowTo = (props) => {

    const { t } = useTranslation();
    const [keyNumber, setKeyNumber] = useState(0);
    const [isRole, setIsRole] = useState('');
    const isDonor = isRole === ROLE.DONOR

    useEffect(() => {
        async function check() {
            var item = await AsyncStorage.getItem('userType');
            setIsRole(item)
        }
        check();
    }, []);
    const dataList = isDonor ? donorSwiper : dataSwiper

    const handleIndexChange = (index) => {
        setKeyNumber(index);
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.seashell} />
            <Header title={'Myrios'} onPress={() => { props.navigation.toggleDrawer() }} />
            <Swiper
                style={styles.wrapper}
                showsButtons={true}
                dot={<View style={styles.dot} />}
                activeDot={<View style={styles.activeDot} />}
                nextButton={<View style={styles.nextBtn}>{keyNumber === 6 ? <Text onPress={() => { props.navigation.toggleDrawer() }} style={styles.doneText}>{'Done'}</Text> : <ArrowRightSvg />}</View>}
                prevButton={<View style={styles.nextBtn}>{keyNumber === 0 ? <></> : <ArrowLeftSvg />}</View>}
                buttonWrapperStyle={styles.buttonWrapperStyle}
                onIndexChanged={handleIndexChange}>
                {dataList.map((item) => {
                    return (
                        <View style={styles.slide1}>
                            {item.image && <Image resizeMode='contain' source={item.image} style={{ flex: 1 }} />}
                            <Text style={styles.titleText}>{item.title}</Text>
                            <Text style={styles.subText}>{item.subTitle}</Text>
                        </View>)
                })}
            </Swiper>
        </View>
    );
};

export default HowTo;
