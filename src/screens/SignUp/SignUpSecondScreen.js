import React, { useState, useEffect } from 'react';
import { View, Text, Alert, ImageBackground, ScrollView, Pressable, KeyboardAvoidingView, Platform, Modal } from 'react-native';
import { COLORS } from '../../common/style/Colors';
import Button from '../../components/core/Button';
import styles from './styles';
import CloseSvg from '../../common/svgs/CloseSvg';
import '../../../assets/i18n/i18n';
import { useTranslation } from 'react-i18next';
import Input from '../../components/core/InputField';
import EmailSvg from '../../common/svgs/EmailSvg';
import LockSvg from '../../common/svgs/LockSvg';
import LockOpenSvg from '../../common/svgs/LockOpenSvg';
import { PASSWORD_PATTERN, EMAIL_PATTERN } from '../../constants/BaseValidation';
import CloseButton from '../../components/core/CloseButton';
import { Formik, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { registerApi, signUpDataOfUser } from '../../redux/actions/ApiActionCreator';
import * as yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ROLE } from '../../constants/types';
import Indicator from '../../components/core/Indicator';
import { IMAGES } from '../../common/style/Images';
import ArrowLeftSvg from '../../common/svgs/ArrowLeftSvg';
import _ from 'lodash';
const SignUpSecondScreen = (props) => {
    const isdataProfile = useSelector((state) => state.apiReducer.dataProfile);
    console.log("isdataProfile1111111----->", isdataProfile.photo);
    // const isUserData = useSelector((state) => state.apiReducer.regiData);
    // const isStatus = useSelector((state) => state.apiReducer.error);
    const loading = useSelector((state) => state.apiReducer.loading);
    const userData = useSelector((state) => state.apiReducer.regiData);

    const dispatch = useDispatch();
    const { t } = useTranslation();
    const [isShow, setIsShow] = useState(false);

    const [isRole, setIsRole] = useState('');
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

    const loginValidationSchema = yup.object().shape({
        email: yup
            .string()
            .required(t('emailRequired'))
            .matches(EMAIL_PATTERN, 'Please enter valid email')
            .email("Please enter valid email"),
        password: yup
            .string()
            .required(t('passRequired'))
        // .matches(PASSWORD_PATTERN,'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character')            
    })

    const onClickSubmit = async (values, actions) => {
        const { email, password } = values;
        var donorData = {
            email: email,
            password: password,
            name: isdataProfile.firstName,
            country: isdataProfile.country,
            photo: isdataProfile.photo,
            watchlist_link: '',
            watchlist_description: ''
        }

        var refugeeData = {
            email: email,
            password: password,
            name: isdataProfile.firstName,
            country: isdataProfile.country,
            dob: isdataProfile.age,
            type: isdataProfile.isUserType,
            shelter: isdataProfile.shelterName,
            photo: isdataProfile.photo,
            watchlist_link: '',
            watchlist_description: ''
        }
        var shelterData = {
            email: email,
            password: password,
            name: isdataProfile.firstName,
            country: isdataProfile.country,
            description: isdataProfile.about,
            photo: isdataProfile.photo,
            watchlist_link: '',
            watchlist_description: ''
        }

        var body = {
            ...isdataProfile,
            email: email,
        }
        console.log("donorData===11111=>", donorData);
        dispatch(signUpDataOfUser(body));
        dispatch(registerApi(isRefugee ? refugeeData : isDonor ? donorData : shelterData));
        // actions.resetForm();
        // if (isData) {
        //     props.navigation.navigate('Welcome');
        // }
    };

    useEffect(() => {
        if (!_.isEmpty(userData)) {
            if (isDonor) {
                props.navigation.navigate('Welcome');
            } else if (isShelter) {
                if (userData.is_active === true) {
                    props.navigation.navigate('Welcome');
                } else if (userData.is_active === false) {
                    props.navigation.navigate('ScheduleNow');
                    // Alert.alert(
                    //     "Thanks for signing up!",
                    //     `Thanks for signing up! In order to finalize your account, you need to your shelter to register you as a Myrios verified refugee on their 'People' page, and if your shelter does not user Myrios, register your account with 'not currently staying at shelter', so you can schedule a 5-minute call with a Myrios representative to get verified!`,
                    //     [
                    //         { text: "OK", onPress: () => { props.navigation.navigate('ScheduleNow') } }
                    //     ],
                    //     { cancelable: false }
                    // );
                }
            }
            else if (isRefugee) {
                if (userData.is_active === true) {
                    props.navigation.navigate('Welcome');
                } else if (userData.is_active === false) {
                    props.navigation.navigate('ScheduleNow');
                    // Alert.alert(
                    //     "Thanks for signing up!",
                    //     `Thanks for signing up! In order to finalize your account, you need to your shelter to register you as a Myrios verified refugee on their 'People' page, and if your shelter does not user Myrios, register your account with 'not currently staying at shelter', so you can schedule a 5-minute call with a Myrios representative to get verified!`,
                    //     [
                    //         { text: "OK", onPress: () => { props.navigation.navigate('ScheduleNow') } }
                    //     ],
                    //     { cancelable: false }
                    // );
                }
            }
        }
    })



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
                                    validationSchema={loginValidationSchema}
                                    initialValues={{ email: '', password: '' }}
                                    onSubmit={onClickSubmit}>
                                    {({ handleChange, handleBlur, handleSubmit, values, errors, isValid, }) => (
                                        <>
                                            <Field
                                                name={'email'}
                                                title={t('email')}
                                                component={Input}
                                                isLeft
                                                value={values.email.toLocaleLowerCase()}
                                                onChangeText={handleChange('email')}
                                                onBlur={handleBlur('email')}
                                                width={(BaseStyle.WIDTH / 100) * 80}
                                                inputWidth={(BaseStyle.WIDTH / 100) * 60}
                                                placeholder={'Create you email'}
                                                keyboardType="email-address"
                                                isError={errors.email}>
                                                <EmailSvg marginRight={10} />
                                            </Field>
                                            <Field
                                                name={'password'}
                                                title={t('password')}
                                                component={Input}
                                                isLeft
                                                value={values.password}
                                                marginTop={20}
                                                secureTextEntry={isShow ? false : true}
                                                onChangeText={handleChange('password')}
                                                onBlur={handleBlur('password')}
                                                width={(BaseStyle.WIDTH / 100) * 80}
                                                inputWidth={(BaseStyle.WIDTH / 100) * 60}
                                                placeholder={'Create your password'}
                                                isError={errors.password}>
                                                <Pressable onPress={() => { setIsShow(!isShow) }}>
                                                    {isShow ? <LockOpenSvg marginRight={10} /> : <LockSvg marginRight={10} />}
                                                </Pressable>
                                            </Field>
                                            <Button
                                                title={t('next')}
                                                fontSize={18}
                                                color={COLORS.white}
                                                height={50}
                                                marginTop={35}
                                                width={'60%'}
                                                onPress={handleSubmit}
                                            />
                                            <Text onPress={() => { props.navigation.navigate('Login') }} style={styles.signUpText}>{t('signIn')}</Text>
                                        </>
                                    )}
                                </Formik>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </KeyboardAvoidingView>
            <Indicator isLoader animate={loading} />
        </>
    );
};

export default SignUpSecondScreen;
