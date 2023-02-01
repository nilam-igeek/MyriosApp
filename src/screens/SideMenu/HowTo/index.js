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
                {[1, 2, 3].map((item) => {
                    return (
                        <View style={styles.slide1}>
                            <Text style={styles.text}>Swiper {item}</Text>
                        </View>
                    )
                })}
            </Swiper>
        </View>
    );
};

export default HowTo;
