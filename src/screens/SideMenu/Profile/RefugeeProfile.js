import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, ScrollView, Pressable, FlatList, Image, TouchableOpacity } from 'react-native';
import { COLORS } from '../../../common/style/Colors';
import { IMAGES } from '../../../common/style/Images';
import Button from '../../../components/core/Button';
import styles from './styles';
import '../../../../assets/i18n/i18n';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ROLE } from '../../../constants/types';
import CloseButton from '../../../components/core/CloseButton';
import { useDispatch, useSelector } from 'react-redux';
import { signUpDataOfUser, imagesListOfRoleApi } from '../../../redux/actions/ApiActionCreator';
import ArrowLeftSvg from '../../../common/svgs/ArrowLeftSvg';
import Indicator from '../../../components/core/Indicator';
const RefugeeProfile = (props) => {

    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [roleOfProfile, setRoleOfProfile] = useState('');
    const isdataProfile = useSelector((state) => state.apiReducer.dataProfile);
    const isImagesList = useSelector((state) => state.apiReducer.imagesListOfRoleData);

    const loading = useSelector((state) => state.apiReducer.loading);


    const onClickProfile = (item, index) => {
        setRoleOfProfile(index)
        var dataOfProfile = {
            ...isdataProfile,
            profile: item
        }
        // console.log("dataOfProfile---->", dataOfProfile.profile);
        dispatch(signUpDataOfUser(dataOfProfile));
    }

    const [isRole, setIsRole] = useState('');
    const isRefugee = isRole === ROLE.REFUGEE
    const isShelter = isRole === ROLE.SHELTER

    // useEffect(() => {
    //     async function check() {
    //         var item = await AsyncStorage.getItem('userType');
    //         setIsRole(item)
    //     }
    //     check();
    // }, []);


    useEffect(() => {
        AsyncStorage.getItem("userType").then(value => {
            setIsRole(value)
        })
    })

    useEffect(() => {
        dispatch(imagesListOfRoleApi());
    }, [])


    // console.log("isImagesList---->", isImagesList);
    return (
        <>
            <ImageBackground
                resizeMode='cover'
                style={{ flex: 1 }}
                source={IMAGES.languageBg}>
                <CloseButton onPress={() => props.navigation.navigate('Profile')}>
                    <ArrowLeftSvg fill={COLORS.white} />
                </CloseButton>
            </ImageBackground>
            <View style={styles.containerProfile}>
                <View style={styles.card}>
                    <Text style={styles.profileText}>{t('choosePhoto')}</Text>
                    <ScrollView showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ flexGrow: 1 }}
                        bounces={false}>
                        <View style={styles.subContainer}>
                            <Text style={styles.profileSubText}>{t('chooseSubDes')}</Text>
                            <View style={styles.MainContainer}>
                                <FlatList
                                    data={isImagesList}
                                    extraData={isImagesList}
                                    keyExtractor={index => index}
                                    renderItem={({ item, index }) => {
                                        return (
                                            <Pressable onPress={() => { onClickProfile(item, index) }}
                                                style={[styles.GridViewBlockStyle, {
                                                    borderWidth: roleOfProfile === index ? 1.5 : 0.5,
                                                    borderColor: roleOfProfile === index ? COLORS.blue : COLORS.grey,
                                                }]}>
                                                <Image resizeMode='contain' source={{ uri: item }} style={styles.profilePic} />
                                            </Pressable>)
                                    }}
                                    numColumns={3} />
                            </View>
                            <Button
                                title={t('next')}
                                fontSize={18}
                                color={COLORS.white}
                                height={50}
                                marginBottom={30}
                                marginTop={20}
                                width={'60%'}
                                onPress={() => {
                                    props.navigation.navigate('Profile');
                                }} />
                        </View>
                    </ScrollView>
                </View>
            </View>
            <Indicator isLoader animate={loading} />
        </>
    );
};

export default RefugeeProfile;
