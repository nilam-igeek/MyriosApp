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
import { donorSwiper } from './ArrayOfSwiperData';
import ArrowLeftSvg from '../../../common/svgs/ArrowLeftSvg';
import ArrowRightSvg from '../../../common/svgs/ArrowRightSvg';
import { IMAGES } from '../../../common/style/Images';
import { imagesListOfRoleApi } from '../../../redux/actions/ApiActionCreator';
import { useDispatch, useSelector } from 'react-redux';
const HowTo = (props) => {

    const { t } = useTranslation();
    const [keyNumber, setKeyNumber] = useState(0);
    const [isRole, setIsRole] = useState('');
    const isDonor = isRole === ROLE.DONOR
    const dispatch = useDispatch();

    useEffect(() => {
        async function check() {
            var item = await AsyncStorage.getItem('userType');
            setIsRole(item)
        }
        check();
    }, []);

     useEffect(() => {
         dispatch(imagesListOfRoleApi());
    })

const dataSwiper = [
    {id: 1,image: IMAGES.screen1,title: t('title1'),subTitle: t('des1')},
    {id: 2,image: IMAGES.screen2,title: t('title2'),subTitle: t('des2')},
    {id: 3,image: IMAGES.screen3,title: t('title3'),subTitle: t('des3')},
    {id: 4,image: IMAGES.screen4,title: t('title4_5'),subTitle: t('des4')},
    {id: 5,image: IMAGES.screen5,title: t('title4_5'),subTitle: t('des5')},
    {id: 6,image: IMAGES.screen6,title: t('title6'),subTitle: t('des6')},
    {id: 7,image: IMAGES.screen7,title: t('title7'),subTitle: t('des7')}]

    const dataList = isDonor ? donorSwiper : dataSwiper

    const handleIndexChange = (index) => {
        setKeyNumber(index);
    };

return (
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.seashell} />
            <Header title={t('myrios')} onPress={() => { props.navigation.toggleDrawer() }} />
            <Swiper
                style={styles.wrapper}
                showsButtons={true}
                dot={<View style={styles.dot} />}
                activeDot={<View style={styles.activeDot} />}
                nextButton={<View style={styles.nextBtn}>{keyNumber === 6 ? <Text onPress={() => { props.navigation.toggleDrawer() }} style={styles.doneText}>{t('done')}</Text> : <ArrowRightSvg />}</View>}
                prevButton={<View style={styles.nextBtn}>{keyNumber === 0 ? <></> : <ArrowLeftSvg />}</View>}
                buttonWrapperStyle={styles.buttonWrapperStyle}
                onIndexChanged={handleIndexChange}>
                {dataList.map((item) => {
                    return (
                        <View style={styles.slide1}>
                            {item.image && <Image resizeMode='contain' source={item.image} style={{ height:'80%',  width:'100%' }} />}
                            <Text style={styles.titleText}>{item.title}</Text>
                            <Text style={styles.subText}>{item.subTitle}</Text>
                        </View>)
                })}
            </Swiper>
        </View>
    );
};

export default HowTo;
