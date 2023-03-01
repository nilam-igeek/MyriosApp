import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, ScrollView, TextInput, Linking } from 'react-native';
import { COLORS } from '../../common/style/Colors';
import Button from '../../components/core/Button';
import styles from './styles';
import CloseSvg from '../../common/svgs/CloseSvg';
import '../../../assets/i18n/i18n';
import { useTranslation } from 'react-i18next';
import CloseButton from '../../components/core/CloseButton';
import { signUpDataOfUser, refugeesListApi } from '../../redux/actions/ApiActionCreator';
import { useDispatch, useSelector } from 'react-redux';
import { IMAGES } from '../../common/style/Images';
import ArrowLeftSvg from '../../common/svgs/ArrowLeftSvg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ROLE } from '../../constants/types';
import _ from 'lodash';
const EnterShelterName = (props) => {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const [name, setName] = useState('');
    const isdataProfile = useSelector((state) => state.apiReducer.dataProfile);
    const [isRole, setIsRole] = useState('');
    const dataOfPeople = useSelector((state) => !_.isEmpty(state.apiReducer.refugeeData) && state.apiReducer.refugeeData);

    const isDataPeople = (dataOfPeople.data);

    const onSubmit = () => {
        var body = {
            ...isdataProfile,
            shelterName: name
        }
        dispatch(signUpDataOfUser(body));
        props.navigation.navigate('ChooseProfile');
    }

    useEffect(() => {
        var item;
        async function check() {
            item = await AsyncStorage.getItem('userType');
            setIsRole(item)
            fetchData(item)
        }
        check();
    }, []);

    const fetchData = (role) => {
        // console.log("role .....", role);
        { role === ROLE && dispatch(refugeesListApi) }
    }

    console.log("isDataPeople----->", isDataPeople);
    return (
        <>
            <ImageBackground
                resizeMode='cover'
                style={{ flex: 1 }}
                source={IMAGES.languageBg}>
                <CloseButton onPress={() => props.navigation.navigate('ShelterOrNot')}>
                    <ArrowLeftSvg fill={COLORS.white} />
                </CloseButton>
            </ImageBackground>
            <View style={styles.container}>
                <View style={styles.card}>
                    <ScrollView contentContainerStyle={{ flexGrow: 1, }} bounces={false}>
                        <View style={styles.subContainer}>
                            <Text style={[styles.titleNameText, { textAlign: "left" }]}>{t('enterShelterName')}</Text>
                            <TextInput
                                placeholder={t('enterSName')}
                                value={name}
                                onEndEditing={onSubmit}
                                style={styles.inputView}
                                onChangeText={(text) => setName(text)} />
                        </View>
                    </ScrollView>
                </View>
            </View>
        </>
    );
};

export default EnterShelterName;
