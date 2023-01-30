import React, { useState,useEffect } from 'react';
import { View, Text, ImageBackground, ScrollView, Pressable,TextInput } from 'react-native';
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
import { Formik ,Field} from 'formik';
import * as yup from 'yup';

const SignUpSecondScreen = (props) => {

    const { t } = useTranslation();
    const [isShow, setIsShow] = useState(false);
  

    const loginValidationSchema = yup.object().shape({
        email: yup
            .string()
            .matches(EMAIL_PATTERN, 'Please enter valid email')
            // .email(t("Please enter valid email"))
            .required(t('Email Address is Required')),
       password: yup
            .string()
            .required(t('Password is required'))
            //.min(8, ({ min }) => { `${('Password must be at least')} ${min} ${('characters')}` })
            .matches(PASSWORD_PATTERN,'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character')            
    })



    const onClickSubmit = async values => {
    const { email, password } = values;
    var body = {
      password: password,
      email: email
    };
    if (body) {
        props.navigation.navigate('Welcome');
    }
  };
    return (
        <ImageBackground
            resizeMode='cover'
            style={{ flex: 1 }}
            source={{ uri: 'https://images.statusfacebook.com/profile_pictures/kids-dp/kids-dp-101.jpg' }}>
            <CloseButton onPress={() => props.navigation.goBack()}>
                <CloseSvg fill={COLORS.white} />
            </CloseButton>
            <View style={styles.container}>
                <View style={styles.card}>
                    <ScrollView contentContainerStyle={{ flexGrow: 1, }}>
                        <View style={styles.subContainer}>
                            <Text style={styles.titleText}>{t('Sign Up')}</Text>
                            <Formik
                                validationSchema={loginValidationSchema}
                                initialValues={{ email: '', password: '' }}
                                onSubmit={onClickSubmit}>
                                {({ handleChange, handleBlur, handleSubmit, values, errors, isValid, }) => (
                                    <>
                                        <Field
                                            name={'email'}
                                            title={t('Email')}
                                            component={Input}
                                            isLeft
                                            value={values.email}
                                            onChangeText={handleChange('email')}
                                            onBlur={handleBlur('email')}
                                            width={(BaseStyle.WIDTH / 100) * 80}
                                            inputWidth={(BaseStyle.WIDTH / 100) * 60}
                                            placeholder={t('Enter your email')}
                                            keyboardType="email-address"
                                            isError={errors.email}>
                                            <EmailSvg marginRight={10} />
                                        </Field>
                                     
                                        <Field
                                            name={'password'}
                                            title={t('Password')}
                                            component={Input}
                                            isLeft
                                            value={values.password}
                                            marginTop={20}
                                            secureTextEntry={isShow ? false : true}
                                            onChangeText={handleChange('password')}
                                            onBlur={handleBlur('password')}
                                            width={(BaseStyle.WIDTH / 100) * 80}
                                            inputWidth={(BaseStyle.WIDTH / 100) * 60}
                                            placeholder={t('Enter your password')}
                                            isError={errors.password}>
                                            <Pressable onPress={() => { setIsShow(!isShow) }}>
                                                {isShow ? <LockOpenSvg marginRight={10} /> : <LockSvg marginRight={10} />}
                                            </Pressable>
                                        </Field>
                                      
                                        <Button
                                            title={t('Next')}
                                            fontSize={18}
                                            color={COLORS.white}
                                            height={50}
                                            marginTop={35}
                                            width={'60%'}
                                            onPress={handleSubmit}
                                        />
                                        <Text onPress={() => { props.navigation.navigate('Login') }} style={styles.signUpText}>{t('Sign In')}</Text>
                                    </>
                                )}

                            </Formik>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </ImageBackground>
    );
};

export default SignUpSecondScreen;
