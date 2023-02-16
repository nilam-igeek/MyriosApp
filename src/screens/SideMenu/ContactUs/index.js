import React, { useState,useCallback, useEffect } from 'react';
import { View, Text, StatusBar } from 'react-native';

import Button from '../../../components/core/Button';
import styles from './styles';
import '../../../../assets/i18n/i18n';
import { useTranslation } from 'react-i18next';
import { COLORS } from '../../../common/style/Colors';
import Header from '../../../components/core/Header';
import Input from '../../../components/core/InputField';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ROLE } from '../../../constants/types';
import { Formik, Field } from 'formik';
import * as yup from 'yup';
import { contactUsApi } from '../../../redux/actions/ApiActionCreator';
import { useDispatch, useSelector } from 'react-redux';
import Indicator from '../../../components/core/Indicator';
const ContactUs = (props) => {
    const loading = useSelector((state) => state.apiReducer.loading);
    const { t } = useTranslation();
    const [isRole, setIsRole] = useState('');
    const isShelter = isRole === ROLE.SHELTER
    const dispatch = useDispatch();

    useEffect(() => {
        async function check() {
            var item = await AsyncStorage.getItem('userType');
            setIsRole(item)
        }
        check();
    }, []);

    const loginValidationSchema = yup.object().shape({
        firstName: yup
            .string()
            .required(t('nameRequired')),
        message: yup
            .string()
            .required(t('msgRequired')),
        email: yup
            .string()
            .required(t('emailRequired')),

    })

    const onClickSubmit = async (values,actions) => {
        const { firstName, message, email,  } = values;
        var body = {
            name: firstName,
            message: message,
            email: email,
        };
        dispatch(contactUsApi(body));
        actions.resetForm();
    };

return (
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.seashell} />
            <Header title={t('myrios')} onPress={() => { props.navigation.toggleDrawer() }} />
            <View style={{ justifyContent: 'center', alignItems: "center" }}>
                <Text style={styles.titleText}>{t('contactUs')}</Text>
                <Text style={styles.subText}>{t('contactUsSubDes')}</Text>
                <Formik
                    validationSchema={loginValidationSchema}
                    initialValues={{ firstName: '', message: '', email: '' }}
                    onSubmit={onClickSubmit}>
                    {({ handleChange, handleBlur, handleSubmit, values, errors, isValid }) => (
                        <>
                            <Field
                                mt={30}
                                isBottomLineInput
                                name={'firstName'}
                                marginTop={20}
                                component={Input}
                                value={values.firstName}
                                onChangeText={handleChange('firstName')}
                                onBlur={handleBlur('firstName')}
                                width={(BaseStyle.WIDTH / 100) * 80}
                                inputWidth={(BaseStyle.WIDTH / 100) * 80}
                                placeholder={isShelter ? t('shelterName') : t('fName')}
                                isError={errors.firstName}
                                placeholderColor={COLORS.black} />

                            <Field
                                mt={30}
                                isBottomLineInput
                                name={'message'}
                                component={Input}
                                value={values.message}
                                marginTop={20}
                                placeholderColor={COLORS.black}
                                onChangeText={handleChange('message')}
                                onBlur={handleBlur('message')}
                                width={(BaseStyle.WIDTH / 100) * 80}
                                inputWidth={(BaseStyle.WIDTH / 100) * 80}
                                placeholder={t('message')}
                                isError={errors.message} />

                            <Field
                                mt={30}
                                isBottomLineInput
                                name={'email'}
                                marginTop={20}
                                component={Input}
                                value={values.email}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                width={(BaseStyle.WIDTH / 100) * 80}
                                inputWidth={(BaseStyle.WIDTH / 100) * 80}
                                placeholder={t('emailAdd')}
                                keyboardType="email-address"
                                isError={errors.email}
                                placeholderColor={COLORS.black} />

                            <Button
                                borderRadius={10}
                                bgColor={COLORS.black}
                                title={t('submit')}
                                fontSize={18}
                                color={COLORS.white}
                                height={50}
                                marginTop={70}
                                width={(BaseStyle.WIDTH / 100) * 80}
                                onPress={handleSubmit}
                            />
                        </>
                    )}
                </Formik>
            </View>
            <Indicator isLoader animate={loading} />
        </View>
    );
};

export default ContactUs;
