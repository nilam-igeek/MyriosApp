import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, ScrollView, Pressable, Image, Alert, Modal } from 'react-native';
import { COLORS } from '../../common/style/Colors';
import Button from '../../components/core/Button';
import styles from './styles';
import CloseSvg from '../../common/svgs/CloseSvg';
import '../../../assets/i18n/i18n';
import { useTranslation } from 'react-i18next';
import Input from '../../components/core/InputField';
import ProfileSvg from '../../common/svgs/ProfileSvg';
import CloseButton from '../../components/core/CloseButton';
import { Formik, Field } from 'formik';
import * as yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ROLE } from '../../constants/types';
import CountryPickerModal from '../../components/core/CountryPickerModal';
import ImagePicker from 'react-native-image-crop-picker';
import { useDispatch, useSelector } from 'react-redux';
import { signUpDataOfUser } from '../../redux/actions/ApiActionCreator';
import { IMAGES } from '../../common/style/Images';
import ArrowLeftSvg from '../../common/svgs/ArrowLeftSvg';
import _ from 'lodash';
const SignUpFirstScreen = (props) => {
    const dispatch = useDispatch();

    const isUserData = useSelector((state) => state.apiReducer.data);
    const isProfile = useSelector((state) => state.apiReducer.dataProfile)
    console.log("isProfile------->", isProfile.profile);
    const { t } = useTranslation();
    const [profile, setProfile] = useState('');
    const [country, setCountry] = useState('');
    const [isSelected, setIsSelected] = useState('Girl');
    const [isRole, setIsRole] = useState('');
    const [isImages, setIsImages] = useState(isProfile.profile);
    const [modalVisible, setModalVisible] = useState(false);
    const isRefugee = isRole === ROLE.REFUGEE
    const isShelter = isRole === ROLE.SHELTER
    const isDonor = isRole === ROLE.DONOR

    useEffect(() => {
        async function check() {
            var item = await AsyncStorage.getItem('userType');
            setIsRole(item)
        }
        check();
    }, []);

    const loginDonorValidationSchema = yup.object().shape({
        firstName: yup
            .string()
            .required(t('nameRequired')),
        watchlistLink: yup
            .string()
            .required('The watchlist link field is required.'),
        watchlistDescription: yup
            .string()
            .required('The watchlist description field is required.'),
    })
    const loginShelterValidationSchema = yup.object().shape({
        firstName: yup
            .string()
            .required(t('nameRequired')),
        about: yup
            .string()
            .required(t('aboutRequired')),
        watchlistLink: yup
            .string()
            .required('The watchlist link field is required.'),
        watchlistDescription: yup
            .string()
            .required('The watchlist description field is required.'),

    })
    const loginRefugeeValidationSchema = yup.object().shape({
        firstName: yup
            .string()
            .required(t('nameRequired')),
        age: yup
            .string()
            .required(t('ageRequired')),
        watchlistLink: yup
            .string()
            .required('The watchlist link field is required.'),
        watchlistDescription: yup
            .string()
            .required('The watchlist description field is required.'),
    })

    const onClickSubmit = (values, actions) => {
        const { firstName, about, age, watchlistLink, watchlistDescription } = values;
        var body = {
            firstName: firstName,
            country: country,
            about: about,
            age: age,
            photo: isImages,
            isUserType: isSelected,
            watchlist_link: watchlistLink,
            watchlist_description: watchlistDescription
        };
        dispatch(signUpDataOfUser(body));
        if (isRefugee && !_.isEmpty(isProfile.profile)) {
            props.navigation.navigate('Chat');
        } else if (isDonor && !_.isEmpty(isProfile.profile)) {
            props.navigation.navigate('SignUpSecondScreen');
        } else if (isShelter && !_.isEmpty(isProfile.profile)) {
            props.navigation.navigate('SignUpSecondScreen');
        } else {
            props.navigation.navigate('ChooseProfile');
        }
    };

    const onClick = (type) => {
        setIsSelected(type)
    }

    const openLibrary = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            setIsImages(image.path)
            setModalVisible(false)
        });
    }

    const openCamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            setIsImages(image.path)
            setModalVisible(false)
        });
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
                    <Text style={styles.titleText}>{t('signUp')}</Text>
                    <ScrollView showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ flexGrow: 1 }}
                        bounces={false}>
                        <View style={styles.subContainer}>
                            <Formik
                                validationSchema={isShelter ? loginShelterValidationSchema : isDonor ? loginDonorValidationSchema : loginRefugeeValidationSchema}
                                initialValues={{ firstName: '', about: '', age: '', watchlistLink: '', watchlistDescription: '' }}
                                onSubmit={onClickSubmit}>
                                {({ handleChange, handleBlur, handleSubmit, values, errors, isValid, }) => (
                                    <>
                                        <View style={styles.profileNameContainer}>
                                            <View style={[styles.profileContainer, { width: !_.isEmpty(isProfile.profile) ? '35%' : 0 }]}>
                                                {!_.isEmpty(isProfile.profile) &&
                                                    <Pressable onPress={() => { setModalVisible(!modalVisible) }} style={styles.profile}>
                                                        <Image
                                                            resizeMode='contain'
                                                            source={{ uri: isProfile.profile }}
                                                            style={styles.profileStyle} />
                                                    </Pressable>
                                                }
                                                <Modal
                                                    animationType="slide"
                                                    transparent={true}
                                                    visible={modalVisible}
                                                    onRequestClose={() => { setModalVisible(!modalVisible) }}>
                                                    <View style={styles.blurView}>
                                                        <View style={styles.blurSubView}>
                                                            <Text style={styles.titleOfPicker}>{t('selectImage')}</Text>
                                                            <Text onPress={openCamera} style={styles.takePhotoText}>{t('takePhoto')}</Text>
                                                            <Text onPress={openLibrary} style={styles.takePhotoText}>{t('chooseLibrary')}</Text>
                                                            <Text onPress={() => setModalVisible(false)} style={styles.cancelText}>{t('cancel')}</Text>
                                                        </View>
                                                    </View>
                                                </Modal>
                                            </View>
                                            <View style={[styles.nameInput, { width: !_.isEmpty(isProfile.profile) ? '65%' : '100%' }]}>
                                                <Field
                                                    name={'firstName'}
                                                    component={Input}
                                                    value={values.firstName}
                                                    onChangeText={handleChange('firstName')}
                                                    onBlur={handleBlur('firstName')}
                                                    width={!_.isEmpty(isProfile.profile) ? (BaseStyle.WIDTH / 100) * 50 : (BaseStyle.WIDTH / 100) * 80}
                                                    inputWidth={!_.isEmpty(isProfile.profile) ? (BaseStyle.WIDTH / 100) * 40 : (BaseStyle.WIDTH / 100) * 70}
                                                    placeholder={t('fName')}
                                                    isError={errors.firstName}
                                                />
                                            </View>
                                        </View>

                                        <CountryPickerModal
                                            isOnSelect={(text) => { setCountry(text) }}
                                            placeholder={t('countryResidence')} />

                                        {isRefugee &&
                                            <>
                                                <Field
                                                    name={'age'}
                                                    component={Input}
                                                    value={values.age}
                                                    onChangeText={handleChange('age')}
                                                    onBlur={handleBlur('age')}
                                                    width={(BaseStyle.WIDTH / 100) * 80}
                                                    inputWidth={(BaseStyle.WIDTH / 100) * 70}
                                                    placeholder={t('age')}
                                                    maxLength={2}
                                                    mt={20}
                                                    isError={errors.age} />
                                                <Text style={styles.chooseOneText}>{t('chooseOne')}</Text>
                                                <View style={styles.chooseOneCard}>
                                                    <Button
                                                        borderColor={isSelected === 'Girl' ? COLORS.cornflowerblue : COLORS.transparent}
                                                        borderWidth={1}
                                                        bgColor={COLORS.lemonchiffon}
                                                        title={t('girl')}
                                                        fontSize={14}
                                                        color={COLORS.black}
                                                        height={45}
                                                        width={'48%'}
                                                        onPress={() => { onClick('Girl') }}
                                                    />
                                                    <Button
                                                        borderColor={isSelected === 'Boy' ? COLORS.cornflowerblue : COLORS.transparent}
                                                        borderWidth={1}
                                                        bgColor={COLORS.lemonchiffon}
                                                        title={t('boy')}
                                                        fontSize={14}
                                                        color={COLORS.black}
                                                        height={45}
                                                        width={'48%'}
                                                        onPress={() => { onClick('Boy') }}
                                                    />
                                                </View>
                                                <View style={[styles.chooseOneCard, { marginTop: 10 }]}>
                                                    <Button
                                                        borderColor={isSelected === 'Mom' ? COLORS.cornflowerblue : COLORS.transparent}
                                                        borderWidth={1}
                                                        bgColor={COLORS.lemonchiffon}
                                                        title={t('mom')}
                                                        fontSize={14}
                                                        color={COLORS.black}
                                                        height={45}
                                                        width={'48%'}
                                                        onPress={() => { onClick('Mom') }}
                                                    />
                                                    <Button
                                                        borderColor={isSelected === 'Woman' ? COLORS.cornflowerblue : COLORS.transparent}
                                                        borderWidth={1}
                                                        bgColor={COLORS.lemonchiffon}
                                                        title={t('woman')}
                                                        fontSize={14}
                                                        color={COLORS.black}
                                                        height={45}
                                                        width={'48%'}
                                                        onPress={() => { onClick('Woman') }}
                                                    />
                                                </View>
                                            </>
                                        }
                                        {isShelter &&
                                            <Field
                                                name={'about'}
                                                component={Input}
                                                marginTop={30}
                                                value={values.about}
                                                onChangeText={handleChange('about')}
                                                onBlur={handleBlur('about')}
                                                width={(BaseStyle.WIDTH / 100) * 80}
                                                inputWidth={(BaseStyle.WIDTH / 100) * 70}
                                                placeholder={t('about')}
                                                placeholderColor={COLORS.grey}
                                                isError={errors.about}
                                                multiline
                                                height={120}
                                                borderRadius={20}
                                                numberOfLines={3}
                                                mt={20}
                                            />}

                                        <Field
                                            mt={20}
                                            name={'watchlistLink'}
                                            component={Input}
                                            value={values.watchlistLink}
                                            onChangeText={handleChange('watchlistLink')}
                                            onBlur={handleBlur('watchlistLink')}
                                            width={(BaseStyle.WIDTH / 100) * 80}
                                            inputWidth={(BaseStyle.WIDTH / 100) * 70}
                                            placeholder={'Watchlist Link'}
                                            isError={errors.watchlistLink}
                                        // inputColor={COLORS.blue}
                                        />
                                        <Field
                                            mt={20}
                                            name={'watchlistDescription'}
                                            component={Input}
                                            value={values.watchlistDescription}
                                            onChangeText={handleChange('watchlistDescription')}
                                            onBlur={handleBlur('watchlistDescription')}
                                            width={(BaseStyle.WIDTH / 100) * 80}
                                            inputWidth={(BaseStyle.WIDTH / 100) * 70}
                                            placeholder={'WatchlistDescription'}
                                            isError={errors.watchlistDescription}
                                        // inputColor={COLORS.blue}
                                        />
                                        <Button
                                            marginBottom={35}
                                            title={t('next')}
                                            fontSize={18}
                                            color={COLORS.white}
                                            height={50}
                                            marginTop={40}
                                            width={'60%'}
                                            onPress={handleSubmit}
                                        />
                                    </>
                                )}
                            </Formik>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </>
    );
};

export default SignUpFirstScreen;
