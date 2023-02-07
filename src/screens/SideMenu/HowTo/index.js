import React, { useState } from 'react';
import { View, Text, StatusBar } from 'react-native';
import styles from './styles';
import '../../../../assets/i18n/i18n';
import { useTranslation } from 'react-i18next';
import Swiper from 'react-native-swiper';
import { COLORS } from '../../../common/style/Colors';
import Header from '../../../components/core/Header';
const HowTo = (props) => {

    const { t } = useTranslation();

    const donorSwiper = [
        {
            id: 1,
            des: 'Welcome to Myrios! We are so glad you are here! This page is to walk you through a step-by-step process on how to find refugees or shelters’ wishlists and fufill them!',
        },
        {
            id: 2,
            des: 'First, head over to your explore page where you can see descriptors of the Refugee or shelter you would be donating to. Once you find someone you would like to help, you can click on their wishlist and add to cart something you would like to purchase for them!\n Add the item you would like to donate, and make sure “this is a gift” is clicked',
        },
        {
            id: 3,
            des: 'After, click the address that states, “Gift Registry Address”\n This address will send the donation to the refugee or shelter without disclosing its address for privacy purposes.\n After that, you can go ahead and purchase! Thank you for your help changing lives!'
        }
    ]

     const refugeeSwiper = [
        {
            id: 1,
            des: 'Welcome to Myrios! We are so glad you are here! This page is to walk you through a step-by-step process on how to create and upload your wishlist, as well as utilize the Myrios app as a whole!',
        },
        {
            id: 2,
            des: 'First, head over to your explore page where you can see descriptors of the Refugee or shelter you would be donating to. Once you find someone you would like to help, you can click on their wishlist and add to cart something you would like to purchase for them!\n Add the item you would like to donate, and make sure “this is a gift” is clicked',
        },
        {
            id: 3,
            des: 'After, click the address that states, “Gift Registry Address”\n This address will send the donation to the refugee or shelter without disclosing its address for privacy purposes.\n After that, you can go ahead and purchase! Thank you for your help changing lives!'
        }
     ]
    
    const shelterSwiper = [
        {
            id: 1,
            des: 'Welcome to Myrios! We are so glad you are here! This page is to walk you through a step-by-step process on how to create and upload your wishlist, as well as utilize the Myrios app as a whole!',
        },
        {
            id: 2,
            des: 'First, head over to your explore page where you can see descriptors of the Refugee or shelter you would be donating to. Once you find someone you would like to help, you can click on their wishlist and add to cart something you would like to purchase for them!\n Add the item you would like to donate, and make sure “this is a gift” is clicked',
        },
        {
            id: 3,
            des: 'After, click the address that states, “Gift Registry Address”\n This address will send the donation to the refugee or shelter without disclosing its address for privacy purposes.\n After that, you can go ahead and purchase! Thank you for your help changing lives!'
        }
    ]


    return (
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.seashell} />
            <Header title={'Myrios'} onPress={() => { props.navigation.toggleDrawer() }} />
            <Swiper
                style={styles.wrapper}
                showsButtons={false}
                dot={<View style={styles.dot} />}
                activeDot={<View style={styles.activeDot} />}
            >
                {donorSwiper.map((item) => {
                    return (
                        <View style={styles.slide1}>
                            <Text style={styles.text}>{item.des}</Text>
                            <Text style={styles.text}>{item.des2}</Text>
                        </View>
                    )
                })}
            </Swiper>
        </View>
    );
};

export default HowTo;
