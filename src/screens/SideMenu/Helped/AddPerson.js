import React, { useState, useEffect } from 'react';
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
import CountryPickerModal from '../../../components/core/CountryPickerModal';
import { addPeopleApi, editPeopleApi } from '../../../redux/actions/ApiActionCreator';
import { useDispatch, useSelector } from 'react-redux';
import Indicator from '../../../components/core/Indicator';
import { PASSWORD_PATTERN, EMAIL_PATTERN } from '../../../constants/BaseValidation';
const AddPerson = (props) => {
    const loading = useSelector((state) => state.apiReducer.loading);
    const { t } = useTranslation();
    const [isRole, setIsRole] = useState('');
    const isShelter = isRole === ROLE.SHELTER

    // const isData = useSelector((state) => state.apiReducer.loginData);
    // const userDetails = isData.data.user
    // console.log("userDetails=====>", userDetails);

    const dispatch = useDispatch();
    // useEffect(() => {
    //     async function check() {
    //         var item = await AsyncStorage.getItem('userType');
    //         setIsRole(item)
    //     }
    //     check();
    // }, []);

    useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus', () => {
            console.log("data...", props.route.params.data);
        })
        async function check() {
            var item = await AsyncStorage.getItem('userType');
            setIsRole(item)
        }
        check();
        return unsubscribe;
    }, []);

    const loginValidationSchema = yup.object().shape({
        firstName: yup
            .string()
            .required(t('nameRequired')),
        email: yup
            .string()
            .required(t('emailRequired'))
            .matches(EMAIL_PATTERN, 'Please enter valid email')
            .email("Please enter valid email"),

    })

    const onClickSubmit = async (values, actions) => {
        const { firstName, email } = values;
        var body = new FormData();
        body.append('email', email);
        body.append('password', "");
        body.append('name', firstName);
        body.append('country', 'India');
        body.append('age', "");
        body.append('type', "");
        body.append('shelter', "");
        body.append('photo', "");
        dispatch(addPeopleApi(body));
        props.navigation.navigate('Helped');
        actions.resetForm();
    };
    const onEditSubmit = async (values, actions) => {
        const { firstName, email } = values;
        console.log("firstname...", firstName);
        var body = new FormData();
        body.append('email', "deep.igeek@gmail.com");
        body.append('password', "");
        body.append('name', "1");
        body.append('country', 'India');
        body.append('age', '');
        body.append('type', "");
        body.append('shelter', "");
        body.append('photo', "")
        dispatch(editPeopleApi(body));
        actions.resetForm();
    }


    return (
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.seashell} />
            <Header title={t('myrios')} onPress={() => { props.navigation.toggleDrawer() }} />
            <View style={{ justifyContent: 'center', alignItems: "center" }}>
                <Text style={styles.titleText}>{t('addPerson')}</Text>

                <Formik
                    validationSchema={loginValidationSchema}
                    // initialValues={{ firstName: '', message: '', email: '' }}
                    initialValues={{ firstName: props.route.params.data == '' ? '' : props.route.params.data.name, message: '', email: props.route.params.data == '' ? '' : props.route.params.data.email, }}
                    onSubmit={onClickSubmit}>
                    {({ handleChange, handleBlur, handleSubmit, values, errors, isValid, }) => (
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
                                name={'email'}
                                marginTop={20}
                                component={Input}
                                value={values.email}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                width={(BaseStyle.WIDTH / 100) * 80}
                                inputWidth={(BaseStyle.WIDTH / 100) * 80}
                                placeholder={'Create you email'}
                                keyboardType="email-address"
                                isError={errors.email}
                                placeholderColor={COLORS.black} />

                            <CountryPickerModal
                                marginTop={30}
                                isPerson
                                isOnSelect={(text) => { console.log(text) }}
                                placeholder={t('countryResidence')} />

                            <Button
                                borderRadius={10}
                                bgColor={COLORS.black}
                                title={t('submit')}
                                fontSize={18}
                                color={COLORS.white}
                                height={50}
                                marginTop={70}
                                width={(BaseStyle.WIDTH / 100) * 80}
                                onPress={props.route.params.data == '' ? handleSubmit : onEditSubmit}
                            />
                        </>
                    )}
                </Formik>
            </View>
            <Indicator isLoader animate={loading} />
        </View>
    );
};

export default AddPerson;
