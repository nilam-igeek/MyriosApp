import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, ScrollView, Pressable, Image, Alert, Modal, KeyboardAvoidingView, Platform } from 'react-native';
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
// import ImagePicker from 'react-native-image-crop-picker';
import { useDispatch, useSelector } from 'react-redux';
import { signUpDataOfUser } from '../../redux/actions/ApiActionCreator';
import { IMAGES } from '../../common/style/Images';
import ArrowLeftSvg from '../../common/svgs/ArrowLeftSvg';
import DatePicker from 'react-native-date-picker'
import _ from 'lodash';
import moment from 'moment';
const SignUpFirstScreen = (props) => {
    const dispatch = useDispatch();

    const isUserData = useSelector((state) => state.apiReducer.data);
    const isProfile = useSelector((state) => state.apiReducer.dataProfile);
    console.log("isProfile---adaddad=----->", isProfile.profile);
    const { t } = useTranslation();
    const [profile, setProfile] = useState('');
    const [country, setCountry] = useState('');
    const [isSelected, setIsSelected] = useState('');
    const [isRole, setIsRole] = useState('');
    const [isImages, setIsImages] = useState(isProfile.profile);
    const [modalVisible, setModalVisible] = useState(false);
    const [date, setDate] = useState(new Date(34555646456))
    const [age, setAge] = useState(0);
    const [open, setOpen] = useState(false)
    const isRefugee = isRole === ROLE.REFUGEE
    const isShelter = isRole === ROLE.SHELTER
    const isDonor = isRole === ROLE.DONOR
    const d = new Date();
    let year = d.getFullYear();

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
    })
    const loginShelterValidationSchema = yup.object().shape({
        firstName: yup
            .string()
            .required(t('nameRequired')),
        about: yup
            .string()
            .required(t('aboutRequired')),
        wishListLink: yup
            .string(),
        wishListDescription: yup
            .string()

    })
    const loginRefugeeValidationSchema = yup.object().shape({
        firstName: yup
            .string()
            .required(t('nameRequired')),
        wishListLink: yup
            .string(),
        wishListDescription: yup
            .string()
    })

    const onClickSubmit = (values, actions) => {

        const { firstName, about, wishListLink, wishListDescription } = values;
        var body = {
            firstName: firstName,
            country: country,
            about: about,
            age: moment(date).format('YYYY-MM-DD'),
            photo: isProfile.profile,
            isUserType: isSelected,
            watchlist_link: wishListLink,
            watchlist_description: wishListDescription
        };

        dispatch(signUpDataOfUser(body));
        if (isRefugee) {
            if (!_.isEmpty(isProfile.profile)) {
                props.navigation.navigate('SignUpSecondScreen');
            }
            else {
                props.navigation.navigate('Chat');
            }
        } else if (isDonor && !_.isEmpty(isProfile.profile)) {
            props.navigation.navigate('SignUpSecondScreen');
        } else if (isShelter && !_.isEmpty(isProfile.profile)) {
            props.navigation.navigate('SignUpSecondScreen');
        } else {
            props.navigation.navigate('ChooseProfile');
        }
        // if (isRefugee && !_.isEmpty(isProfile.profile)) {
        //     props.navigation.navigate('Chat');
        // } else if (isDonor && !_.isEmpty(isProfile.profile)) {
        //     props.navigation.navigate('SignUpSecondScreen');
        // } else if (isShelter && !_.isEmpty(isProfile.profile)) {
        //     props.navigation.navigate('SignUpSecondScreen');
        // } else {
        //     props.navigation.navigate('ChooseProfile');
        // }
    };

    const onClick = (type) => {
        setIsSelected(type)
    }

    function inputChangeHandler(e) {
        var theAge = year - e;
        setAge(theAge);
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
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}>
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
                                    initialValues={{ firstName: '', about: '', wishListLink: '', wishListDescription: '' }}
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
                                                </View>
                                                <View style={[styles.nameInput, { marginBottom: 10, width: !_.isEmpty(isProfile.profile) ? '65%' : '100%' }]}>
                                                    <Field
                                                        name={'firstName'}
                                                        component={Input}
                                                        value={values.firstName}
                                                        onChangeText={handleChange('firstName')}
                                                        onBlur={handleBlur('firstName')}
                                                        width={!_.isEmpty(isProfile.profile) ? (BaseStyle.WIDTH / 100) * 50 : (BaseStyle.WIDTH / 100) * 80}
                                                        inputWidth={!_.isEmpty(isProfile.profile) ? (BaseStyle.WIDTH / 100) * 40 : (BaseStyle.WIDTH / 100) * 70}
                                                        placeholder={isShelter ? 'Shelter Name' : 'First Name'}
                                                        isError={errors.firstName}
                                                    />
                                                </View>
                                            </View>

                                            <CountryPickerModal
                                                isOnSelect={(text) => { setCountry(text) }}
                                                placeholder={t('countryResidence')} />

                                            {isRefugee &&
                                                <>
                                                    {/* <Field
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
                                                        isError={errors.age} /> */}

                                                    <Button
                                                        bgColor={COLORS.lemonchiffon}
                                                        width={(BaseStyle.WIDTH / 100) * 80}
                                                        title={age > 0 ? age : 'Age'}
                                                        fontSize={14}
                                                        color={age > 0 ? COLORS.black : COLORS.grey}
                                                        height={45}
                                                        marginTop={30}
                                                        isRight
                                                        onPress={() => setOpen(true)}
                                                    />

                                                    <DatePicker
                                                        modal
                                                        mode='date'
                                                        open={open}
                                                        date={date}
                                                        onConfirm={(date) => {
                                                            inputChangeHandler(date.getFullYear());
                                                            setOpen(false)
                                                            setDate(date)
                                                        }}
                                                        onCancel={() => {
                                                            setOpen(false)
                                                        }}
                                                    />



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
                                                    height={120}
                                                    borderRadius={20}
                                                    numberOfLines={3}
                                                    mt={20}
                                                />}

                                            {!isDonor &&
                                                <>
                                                    <View style={{ marginTop: 20 }}>
                                                        <Text style={{ marginBottom: 10, width: (BaseStyle.WIDTH / 100) * 80 }}>{'Tell us a little about why you need the items on your wishlist..'}</Text>
                                                        <Field
                                                            // title={'Tell us a little about why you need the items on your wishlist..'}
                                                            // mt={20}
                                                            name={'wishListLink'}
                                                            component={Input}
                                                            value={values.wishListLink}
                                                            onChangeText={handleChange('wishListLink')}
                                                            onBlur={handleBlur('wishListLink')}
                                                            width={(BaseStyle.WIDTH / 100) * 80}
                                                            inputWidth={(BaseStyle.WIDTH / 100) * 70}
                                                            placeholder={'WishList Link'}
                                                            isError={errors.wishListLink}
                                                        // inputColor={COLORS.blue}
                                                        />
                                                    </View>

                                                    <Field
                                                        mt={20}
                                                        name={'wishListDescription'}
                                                        component={Input}
                                                        value={values.wishListDescription}
                                                        onChangeText={handleChange('wishListDescription')}
                                                        onBlur={handleBlur('wishListDescription')}
                                                        width={(BaseStyle.WIDTH / 100) * 80}
                                                        inputWidth={(BaseStyle.WIDTH / 100) * 70}
                                                        placeholder={'WishList Description'}
                                                        isError={errors.wishListDescription}
                                                    // inputColor={COLORS.blue}
                                                    />
                                                </>}
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
            </KeyboardAvoidingView>
        </>
    );
};

export default SignUpFirstScreen;
