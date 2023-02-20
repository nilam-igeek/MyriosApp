import React, { useEffect, useState, useRef } from 'react';
import { View, Text, ImageBackground, ScrollView, Pressable, KeyboardAvoidingView } from 'react-native';
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
import * as yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ROLE } from '../../constants/types';
import { loginApi, signUpDataOfUser,imagesListOfRoleApi } from '../../redux/actions/ApiActionCreator';
import { useDispatch, useSelector } from 'react-redux';
import Indicator from '../../components/core/Indicator';
import _ from 'lodash';
import { IMAGES } from '../../common/style/Images';
import Toast from 'react-native-simple-toast';
import ArrowLeftSvg from '../../common/svgs/ArrowLeftSvg';
const Login = (props) => {
    // const emailRef = useRef();
    // const passwordRef = useRef();
    const dispatch = useDispatch();

    const success = useSelector((state) => state.apiReducer.loginData.success);
    const loading = useSelector((state) => state.apiReducer.loading);
//     const error = useSelector((state) => state.apiReducer.error);
//    console.log("error--adadasd-->",error.data.success);
    const { t } = useTranslation();
    const [isShow, setIsShow] = useState(false);
    const [isRole, setIsRole] = useState('');
    const isMaster = isRole === ROLE.MASTER
    const isDonor = isRole === ROLE.DONOR
    const isShelter = isRole === ROLE.SHELTER
    const isRefugee = isRole === ROLE.REFUGEE

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
            .required(t('emailRequired')),
        // .matches(EMAIL_PATTERN, 'Please enter valid email')
        // // .email(t("Please enter valid email"))
        // .required(t('Email Address is Required')),
        password: yup
            .string()
            .required(t('passRequired'))
        // //.min(8, ({ min }) => { `${('Password must be at least')} ${min} ${('characters')}` })
        // .matches(PASSWORD_PATTERN,'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character')

    })

   
    const onClickSubmit = async (values, actions) => {
        const { email, password } = values;
        var body = {
            password: password,
            email: email
        };
        dispatch(loginApi(body));

       
        // actions.resetForm();
//         if (!success) {
//      Toast.show('Unauthorized');
// }
    };

    useEffect(() => {
        if (success) {
            if (isDonor || isRefugee || isShelter) {
                props.navigation.navigate('Welcome');
            } else if (isMaster) {
                props.navigation.navigate('RefugeesList');
            }
        }
    }, [success])

    return (
          <>
            <ImageBackground
                resizeMode='cover'
                style={{ flex: 1 }}
                source={IMAGES.languageBg}>
                <CloseButton onPress={() => props.navigation.goBack()}>
                    <ArrowLeftSvg fill={COLORS.white}/>
                </CloseButton>
            </ImageBackground>
            <View style={styles.container}>
                <View style={styles.card}>
                    <Text style={styles.titleText}>{t('logIn')}</Text>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
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
                                            placeholder={t('enterEmail')}
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
                                            placeholder={t('enterPassword')}
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
                                            marginTop={40}
                                            width={'60%'}
                                            onPress={handleSubmit}
                                        />
                                        {!isMaster && <Text onPress={() => { props.navigation.navigate('SignUpFirstScreen') }} style={styles.signUpText}>{t('signUp')}</Text>}
                                    </>
                                )}
                            </Formik>
                        </View>
                    </ScrollView>
                </View>
            </View>
            <Indicator isLoader animate={loading} />

        </>
    );
};

export default Login;
