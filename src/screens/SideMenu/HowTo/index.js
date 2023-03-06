import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StatusBar, Image, } from 'react-native';
import styles from './styles';
import '../../../../assets/i18n/i18n';
import { useTranslation } from 'react-i18next';
import { COLORS } from '../../../common/style/Colors';
import Header from '../../../components/core/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ROLE } from '../../../constants/types';
import { IMAGES } from '../../../common/style/Images';
import AppIntroSlider from 'react-native-app-intro-slider';

import { useDispatch } from 'react-redux';
const HowTo = (props) => {

    const { t } = useTranslation();
    const [isRole, setIsRole] = useState('');
    const isDonor = isRole === ROLE.DONOR
    const [refreshing, setRefreshing] = React.useState(false);
    const slider = useRef();

    useEffect(() => {
        AsyncStorage.getItem("userType").then(value => {
            setIsRole(value)
        })
    }, [])


    const slidesData = [
        {
            key: 1,
            title: t('title1'),
            text: t('des1'),
            image: IMAGES.screen1,
            backgroundColor: COLORS.white,
        },
        {
            key: 2,
            title: t('title2'),
            text: t('des2'),
            image: IMAGES.screen2,
            backgroundColor: COLORS.white,
        },
        {
            key: 3,
            title: t('title3'),
            text: t('des3'),
            image: IMAGES.screen3,
            backgroundColor: COLORS.white,
        },
        {
            key: 4,
            title: t('title4_5'),
            text: t('des4'),
            image: IMAGES.screen4,
            backgroundColor: COLORS.white,
        },
        {
            key: 5,
            title: t('title4_5'),
            text: t('des5'),
            image: IMAGES.screen5,
            backgroundColor: COLORS.white,
        },
        {
            key: 6,
            title: t('title6'),
            text: t('des6'),
            image: IMAGES.screen6,
            backgroundColor: COLORS.white,
        },
        {
            key: 7,
            title: t('title7'),
            text: t('des7'),
            image: IMAGES.screen7,
            backgroundColor: COLORS.white,
        },
    ];

    const slidesDonorData = [
        {
            key: 1,
            text: 'Welcome to Myrios! We are so glad you are here!This page is to walk you through a step-by-step process on how to find refugees or shelters wishlists and fufill them!',
            image: IMAGES.donorScreen1,
            backgroundColor: COLORS.white,
        },
        {
            key: 2,
            text: 'First, head over to your explore page where you can see descriptors of the Refugee or shelter you would be donating to.',
            image: IMAGES.donorScreen2,
            backgroundColor: COLORS.white,
        },
        {
            key: 3,
            text: 'Once you find someone you would like to help, you can click on their wishlist and add to cart something you would like to purchase for them!',
            image: IMAGES.donorScreen3,
            backgroundColor: COLORS.white,
        },
        {
            key: 4,
            text: 'Add the item you would like to donate, and  make sure "this is a gift" is clicked',
            image: IMAGES.donorScreen4,
            backgroundColor: COLORS.white,
        },
        {
            key: 5,
            text: 'After, click the address that states,"Gift Registry Address" \n This address will send the donation to the refugee or shelter without disclosing its address for privacy purposes.',
            image: IMAGES.donorScreen5,
            backgroundColor: COLORS.white,
        },
        {
            key: 6,
            text: 'After that, you can go ahead and purchase! Thank you for your help changing lives!',
            image: IMAGES.donorScreen6,
            backgroundColor: COLORS.white,
        },
    ];

    const dataList = isDonor ? slidesDonorData : slidesData
    const _renderItem = ({ item }) => {
        return (
            <View key={item.key}>
                {item.image && <Image resizeMode='contain' source={item.image} style={{ height: '75%', width: '100%' }} />}
                {item.title && <Text style={styles.titleText}>{item.title}</Text>}
                <Text style={[styles.subText, { fontSize: isDonor ? 16 : 14 }]}>{item.text}</Text>
            </View>
        )
    }

    const onDone = () => {
        if (isDonor) {
            props.navigation.navigate('WishLists')
        } else {
            props.navigation.navigate('ShelterWishList')
        }
    }

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        slider.current.goToSlide(0, true)
        setTimeout(() => {
            setRefreshing(false);
            slider.current.goToSlide(0, true)
        }, 500);
    }, []);

    useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus', () => {
            onRefresh();
        });
        return unsubscribe;
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.seashell} />
            <Header title={t('myrios')} onPress={() => { props.navigation.toggleDrawer() }} />
            <View style={{ flex: 1 }}>
                <AppIntroSlider
                    keyExtractor={(item, index) => index.toString()}
                    renderNextButton={() => {
                        return (
                            <View style={styles.btn}><Text style={styles.btnText}>Go!</Text></View>)
                    }}
                    renderDoneButton={() => {
                        return (
                            <View style={styles.btn}><Text style={styles.btnText}>{isDonor ? 'Explore wishlists' : 'Done'}</Text></View>)
                    }}
                    dotStyle={{ backgroundColor: 'black' }} activeDotStyle={{ backgroundColor: 'grey' }} renderItem={_renderItem}
                    data={dataList}
                    onDone={onDone}
                    ref={(ref) => (slider.current = ref)}
                />
            </View>
        </View>
    );
};

export default HowTo;