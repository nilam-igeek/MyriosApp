import React, { useState,useEffect } from 'react';
import { View, Text, ImageBackground, ScrollView } from 'react-native';
import { COLORS } from '../../common/style/Colors';
import Button from '../../components/core/Button';
import styles from './styles';
import CloseSvg from '../../common/svgs/CloseSvg';
import '../../../assets/i18n/i18n';
import { useTranslation } from 'react-i18next';
import CloseButton from '../../components/core/CloseButton';
import { ROLE } from '../../constants/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
const TypesOfUser = (props) => {

    const { t } = useTranslation();
    const [isRole, setIsRole] = useState(ROLE.MASTER);

    const onClick = async (type) => {
        setIsRole(type);
        try {
            await AsyncStorage.setItem('userType', type)
        } catch (e) {
        }
        props.navigation.navigate('Login')
    }

    useEffect(() => {
        if (isRole !== (ROLE.DONOR || ROLE.SHELTER|| ROLE.REFUGEE) && isRole === ROLE.MASTER) {
             async function check() {
             var item = await AsyncStorage.setItem('userType', ROLE.MASTER);
            setIsRole(item)
        }
        check(); 
         }
    }, [isRole]);

    return (
        <ImageBackground
            resizeMode='cover'
            style={{ flex: 1 }}
            source={{ uri: 'https://images.statusfacebook.com/profile_pictures/kids-dp/kids-dp-101.jpg' }}>
            <CloseButton onPress={() => props.navigation.goBack()}>
                <CloseSvg fill={COLORS.white} />
            </CloseButton>
            <View style={styles.container}>
                <View style={styles.card}>
                    <ScrollView contentContainerStyle={{ flexGrow: 1, }}>
                        <View style={styles.subContainer}>
                            <Text style={styles.titleText}>{`${t(`I'm a `)}${isRole?isRole :'Master'}`}</Text>
                            <Button borderRadius={50}
                                title={t(`Refugee`)}
                                bgColor={isRole === ROLE.REFUGEE ? COLORS.floralwhite: COLORS.lemonchiffon}
                                fontSize={18}
                                color={COLORS.black}
                                height={50}
                                width={'100%'}
                                onPress={() => onClick(ROLE.REFUGEE)}
                            />
                            <Button
                                borderRadius={50}
                                title={t(`Shelter`)}
                                bgColor={isRole === ROLE.SHELTER ? COLORS.floralwhite: COLORS.lemonchiffon}
                                fontSize={18}
                                color={COLORS.black}
                                height={50}
                                marginTop={20}
                                width={'100%'}
                                onPress={() => onClick(ROLE.SHELTER)} />
                            <Button
                                borderRadius={50}
                                title={t(`Donor`)}
                                bgColor={isRole === ROLE.DONOR ? COLORS.floralwhite: COLORS.lemonchiffon}
                                fontSize={18}
                                color={COLORS.black}
                                height={50}
                                marginTop={20}
                                width={'100%'}
                                onPress={() => onClick(ROLE.DONOR)} />
                            <Button
                                borderRadius={50}
                                title={t(`Let's go!`)}
                                fontSize={18}
                                color={COLORS.white}
                                height={50}
                                marginTop={35}
                                width={'80%'}
                                onPress={() => onClick(ROLE.MASTER)}
                            />
                        </View>
                    </ScrollView>
                </View>
                
            </View>
        </ImageBackground>
    );
};

export default TypesOfUser;
