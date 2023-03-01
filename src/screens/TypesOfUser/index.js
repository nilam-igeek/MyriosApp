import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, ScrollView } from 'react-native';
import { COLORS } from '../../common/style/Colors';
import Button from '../../components/core/Button';
import styles from './styles';
import '../../../assets/i18n/i18n';
import { useTranslation } from 'react-i18next';
import CloseButton from '../../components/core/CloseButton';
import { ROLE } from '../../constants/types';
import { IMAGES } from '../../common/style/Images';
import ArrowLeftSvg from '../../common/svgs/ArrowLeftSvg';
const TypesOfUser = (props) => {

    const { t } = useTranslation();
    const [isRole, setIsRole] = useState(ROLE.MASTER);


    const onClick = async (type) => {
        setIsRole(type)
    }

    return (
        <>
            <ImageBackground
                resizeMode='cover'
                style={{ flex: 1 }}
                source={IMAGES.languageBg}>
                <CloseButton onPress={() => { setIsRole(''), props.navigation.navigate('Language') }}>
                    <ArrowLeftSvg fill={COLORS.white} />
                </CloseButton>
            </ImageBackground>
            <View style={styles.container}>
                <View style={styles.card}>
                    <Text style={styles.titleText}>{isRole === 'Admin' ? `I'm a...` : `${t('am')} ${isRole ? isRole : '...'}`}</Text>
                    <ScrollView showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ flexGrow: 1 }}
                        bounces={false}>
                        <View style={styles.subContainer}>
                            <Button borderRadius={50}
                                borderWidth={1}
                                borderColor={isRole === ROLE.REFUGEE ? COLORS.cornflowerblue : COLORS.transparent}
                                title={t('refugee')}
                                bgColor={COLORS.lemonchiffon}
                                fontSize={18}
                                color={COLORS.black}
                                height={50}
                                width={'100%'}
                                onPress={() => onClick(ROLE.REFUGEE)}
                            />
                            <Button
                                borderWidth={1}
                                borderColor={isRole === ROLE.SHELTER ? COLORS.cornflowerblue : COLORS.transparent}
                                borderRadius={50}
                                title={t('shelter')}
                                bgColor={COLORS.lemonchiffon}
                                fontSize={18}
                                color={COLORS.black}
                                height={50}
                                marginTop={20}
                                width={'100%'}
                                onPress={() => onClick(ROLE.SHELTER)} />
                            <Button
                                borderWidth={1}
                                borderColor={isRole === ROLE.DONOR ? COLORS.cornflowerblue : COLORS.transparent}
                                borderRadius={50}
                                title={t('donor')}
                                bgColor={COLORS.lemonchiffon}
                                fontSize={18}
                                color={COLORS.black}
                                height={50}
                                marginTop={20}
                                width={'100%'}
                                onPress={() => onClick(ROLE.DONOR)} />
                            <Button
                                borderRadius={50}
                                title={t('go')}
                                fontSize={18}
                                color={COLORS.white}
                                height={50}
                                marginTop={35}
                                width={'60%'}
                                onPress={() => {
                                    props.navigation.navigate('Login', { role: isRole })
                                }}
                            />
                        </View>
                    </ScrollView>
                </View>
            </View>
        </>
    );
};

export default TypesOfUser;
