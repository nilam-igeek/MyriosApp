import React, { useEffect, useState } from 'react';
import { ImageBackground, View, Text, } from 'react-native';
import '../../../assets/i18n/i18n';
import { useTranslation } from 'react-i18next';
import { COLORS } from '../../common/style/Colors';
import Button from '../../components/core/Button';
import styles from './styles';
import { IMAGES } from '../../common/style/Images';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ROLE } from '../../constants/types';
const Welcome = (props) => {

    const { t } = useTranslation();
    const [isRole, setIsRole] = useState('');


    useEffect(() => {
        AsyncStorage.getItem("userType").then(value => {
            setIsRole(value)
        })
    })


    const isShelter = isRole === ROLE.SHELTER
    const isDonor = isRole === ROLE.DONOR

    // { console.log("isRole_welcome screen----->", isRole); }

    return (
        <ImageBackground
            resizeMode='cover'
            style={{ flex: 1 }}
            source={IMAGES.welcomeBg}>
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    <Text style={styles.welcomeText}>{t('welcome')}</Text>
                    <Text style={styles.subTitleText}>{t('welcomeSubDes')}</Text>
                    <Button
                        width={'100%'}
                        title={t('visit')}
                        bgColor={COLORS.white}
                        color={COLORS.black}
                        borderRadius={10}
                        fontSize={16}
                        onPress={() => { props.navigation.navigate('HowTo') }} />

                    <Button
                        width={'100%'}
                        title={t('skipNow')}
                        bgColor={COLORS.black}
                        color={COLORS.white}
                        borderRadius={10}
                        marginTop={10}
                        fontSize={16}
                        onPress={() => {
                            if (isDonor) {
                                props.navigation.navigate('WishLists')
                            } else {
                                props.navigation.navigate('ShelterWishList')
                            }
                        }}
                    />
                </View>
            </View>
        </ImageBackground>
    );
};

export default Welcome;
