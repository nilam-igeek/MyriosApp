import React, { useState } from 'react';
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
import { Formik ,Field} from 'formik';
import * as yup from 'yup';
const Login = (props) => {

    const { t } = useTranslation();
    const [isShow, setIsShow] = useState(false);
  

    const loginValidationSchema = yup.object().shape({
        email: yup
            .string()
            .email("Please enter valid email")
            .required('Email Address is Required'),
       password: yup
            .string()
            .min(8, ({ min }) => `Password must be at least ${min} characters`)
            .required('Password is required'),
    })

    return (
        <ImageBackground
            resizeMode='cover'
            style={{ flex: 1 }}
            source={{ uri: 'https://images.statusfacebook.com/profile_pictures/kids-dp/kids-dp-101.jpg' }}>
            <Pressable onPress={() => props.navigation.goBack()}>
                <CloseSvg marginLeft={25} marginTop={20} fill={COLORS.white} />
            </Pressable>
            <View style={styles.container}>
                <View style={styles.card}>
                    <ScrollView contentContainerStyle={{ flexGrow: 1, }}>
                        <View style={styles.subContainer}>
                            <Text style={styles.titleText}>{t('Log In')}</Text>
                            <Formik
                                validationSchema={loginValidationSchema}
                                initialValues={{ email: '', password: '' }}
                                onSubmit={values => console.log(values)}
                            >
                                {({ handleChange, handleBlur, handleSubmit, values, errors, isValid, }) => (
                                    <>
                                        <Field
                                            name={'email'}
                                            title={'Email'}
                                            component={Input}
                                            isLeft
                                            value={values.email}
                                            onChangeText={handleChange('email')}
                                            onBlur={handleBlur('email')}
                                            width={(BaseStyle.WIDTH / 100) * 80}
                                            inputWidth={(BaseStyle.WIDTH / 100) * 60}
                                            placeholder={'Enter your email'}
                                            keyboardType="email-address"
                                            isError={errors.email}>
                                            <EmailSvg marginRight={10} />
                                        </Field>
                                     
                                        <Field
                                            name={'password'}
                                            component={Input}
                                            marginTop={30}
                                            secureTextEntry={isShow ? false : true}
                                            title={'Password'}
                                            isLeft
                                            value={values.password}
                                            onChangeText={handleChange('password')}
                                            onBlur={handleBlur('password')}
                                            width={(BaseStyle.WIDTH / 100) * 80}
                                            inputWidth={(BaseStyle.WIDTH / 100) * 60}
                                           
                                            placeholder={'Enter your password'}
                                         isError={errors.password}
                                        >
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
                                            // onPress={() => {handleSubmit}}

                                        // disabled={!isValid}
                                        />
                                        <Text style={{ color: COLORS.cornflowerblue, marginVertical: 20, fontSize: 16 }}>{'Sign Up'}</Text>
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

export default Login;
