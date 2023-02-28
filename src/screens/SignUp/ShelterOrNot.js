import React, { useState } from 'react';
import { View, Text, ImageBackground, ScrollView, TextInput, Linking } from 'react-native';
import { COLORS } from '../../common/style/Colors';
import Button from '../../components/core/Button';
import styles from './styles';
import CloseSvg from '../../common/svgs/CloseSvg';
import '../../../assets/i18n/i18n';
import { useTranslation } from 'react-i18next';
import CloseButton from '../../components/core/CloseButton';
import { signUpDataOfUser } from '../../redux/actions/ApiActionCreator';
import { useDispatch, useSelector } from 'react-redux';
import { IMAGES } from '../../common/style/Images';
import ArrowLeftSvg from '../../common/svgs/ArrowLeftSvg';
const ShelterOrNot = (props) => {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const [isShelterUser, setShelterUser] = useState('isDefault');
    const [name, setName] = useState('');
    const isdataProfile = useSelector((state) => state.apiReducer.dataProfile);

    const onClick = (type) => {
        setShelterUser(type)
    }

    const onSubmit = () => {
        var body = {
            ...isdataProfile,
            shelterName: name
        }
        dispatch(signUpDataOfUser(body));
        props.navigation.navigate('SignUpSecondScreen');
    }

    return (
        <>
            <ImageBackground
                resizeMode='cover'
                style={{ flex: 1 }}
                source={IMAGES.languageBg}>
                <CloseButton onPress={() => props.navigation.goBack()}>
                    <ArrowLeftSvg fill={COLORS.white} />
                </CloseButton>
            </ImageBackground>
            <View style={styles.container}>
                <View style={styles.card}>
                    <ScrollView contentContainerStyle={{ flexGrow: 1, }} bounces={false}>
                        <View style={styles.subIsContainer}>
                            <Text style={[styles.titleNameText, { textAlign: "left" }]}>{t('currentlyShelter')}</Text>
                            <View style={styles.subIsView}>
                                <Button
                                    title={t('yes')}
                                    fontSize={14}
                                    color={COLORS.white}
                                    height={45}
                                    width={'45%'}
                                    onPress={() => { onClick('YES') }}
                                />
                                <Button
                                    title={t('no')}
                                    fontSize={14}
                                    color={COLORS.white}
                                    height={45}
                                    width={'45%'}
                                    onPress={() => { onClick('NO') }}
                                />
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </>
    );
};

export default ShelterOrNot;