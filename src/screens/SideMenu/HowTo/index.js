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

import { useDispatch, useSelector } from 'react-redux';
const HowTo = (props) => {

    const { t } = useTranslation();
    const [keyNumber, setKeyNumber] = useState();
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

    const dataSwiper = [
        { id: 1, image: IMAGES.screen1, title: t('title1'), subTitle: t('des1') },
        { id: 2, image: IMAGES.screen2, title: t('title2'), subTitle: t('des2') },
        { id: 3, image: IMAGES.screen3, title: t('title3'), subTitle: t('des3') },
        { id: 4, image: IMAGES.screen4, title: t('title4_5'), subTitle: t('des4') },
        { id: 5, image: IMAGES.screen5, title: t('title4_5'), subTitle: t('des5') },
        { id: 6, image: IMAGES.screen6, title: t('title6'), subTitle: t('des6') },
        { id: 7, image: IMAGES.screen7, title: t('title7'), subTitle: t('des7') }]

    const DonorSwiper = [
        { id: 1, image: IMAGES.donorScreen1, subTitle: 'Welcome to Myrios! We are so glad you are here!This page is to walk you through a step-by-step process on how to find refugees or shelters wishlists and fufill them!' },
        { id: 2, image: IMAGES.donorScreen2, subTitle: 'First, head over to your explore page where you can see descriptors of the Refugee or shelter you would be donating to.' },
        { id: 3, image: IMAGES.donorScreen3, subTitle: 'Once you find someone you would like to help, you can click on their wishlist and add to cart something you would like to purchase for them!' },
        { id: 4, image: IMAGES.donorScreen4, subTitle: 'Add the item you would like to donate, and  make sure "this is a gift" is clicked' },
        { id: 5, image: IMAGES.donorScreen5, subTitle: 'After, click the address that states,"Gift Registry Address" \n This address will send the donation to the refugee or shelter without disclosing its address for privacy purposes.' },
        { id: 6, image: IMAGES.donorScreen6, subTitle: 'After that, you can go ahead and purchase! Thank you for your help changing lives!' },
    ]

    const dataList = isDonor ? DonorSwiper : dataSwiper

    const handleIndexChange = (index) => {
        console.log("index==>", index);
        setKeyNumber(index);
    };

    const renderButton = () => {
        return (
            <View style={styles.nextBtn}>{(keyNumber === 6) ? <Text onPress={() => { props.navigation.toggleDrawer() }} style={styles.doneText}>{isDonor ? 'Explore Wishlists' : t('done')}</Text> : <ArrowRightSvg />}</View>
            // prevButton={<View style={styles.nextBtn}>{keyNumber === 0 ? <></> : <ArrowLeftSvg />}</View>}

        )
    }

    const renderIsButton = () => {
        return (
            <ArrowRightSvg />
            // <View style={[styles.nextBtn, { backgroundColor: 'red' }]}>{(keyNumber === 5) ? <Text onPress={() => { props.navigation.toggleDrawer() }} style={styles.doneText}>{'Explore Wishlists!'}</Text> : <ArrowRightSvg />}</View>
        )
    }
    return (
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.seashell} />
            <Header title={t('myrios')} onPress={() => { props.navigation.toggleDrawer() }} />
            <Swiper
                index={1}
                removeClippedSubviews={false}
                scrollEnabled={true}
                loop={false}
                style={styles.wrapper}
                showsButtons={true}
                dot={<View style={styles.dot} />}
                activeDot={<View style={styles.activeDot} />}
                nextButton={<View style={{ justifyContent: 'center', alignItems: 'center', }}><Text style={[styles.doneText, { width: 50, textAlign: 'center', padding: 3, backgroundColor: '#FFDE59' }]}>{keyNumber === 5 ? 'Explore Wishlists!' : keyNumber === 6 ? 'Done' : 'Go!'}</Text></View>}
                prevButton={<View style={{ justifyContent: 'center', alignItems: 'center', }}></View>}
                buttonWrapperStyle={styles.buttonWrapperStyle}
                onIndexChanged={handleIndexChange}>
                {dataList.map((item) => {
                    return (
                        <View style={styles.slide1}>
                            {item.image && <Image resizeMode='contain' source={item.image} style={{ height: '80%', width: '100%' }} />}
                            {item.title && <Text style={styles.titleText}>{item.title}</Text>}
                            <Text style={styles.subText}>{item.subTitle}</Text>
                        </View>)
                })}
            </Swiper>
        </View>
    );
};

export default HowTo;
