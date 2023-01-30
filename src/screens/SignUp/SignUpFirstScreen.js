import React, { useState,useEffect } from 'react';
import { View, Text, ImageBackground, ScrollView, Pressable, TextInput, Image } from 'react-native';
import { COLORS } from '../../common/style/Colors';
import Button from '../../components/core/Button';
import styles from './styles';
import CloseSvg from '../../common/svgs/CloseSvg';
import '../../../assets/i18n/i18n';
import { useTranslation } from 'react-i18next';
import Input from '../../components/core/InputField';
import EmailSvg from '../../common/svgs/EmailSvg';
import LockSvg from '../../common/svgs/LockSvg';
import ProfileSvg from '../../common/svgs/ProfileSvg';
import { IMAGES } from '../../common/style/Images';
import CloseButton from '../../components/core/CloseButton';
import { Formik, Field } from 'formik';
import * as yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { USER } from '../../constants/types';
const SignUpFirstScreen = (props) => {

    const { t } = useTranslation();
    const [profile, setProfile] = useState('');
    const [isType, setIsType] = useState('');

    const loginValidationSchema = yup.object().shape({
        firstName: yup
            .string()
            .required(t('Firstname is Required')),
        address: yup
            .string()
            .required(t('Address is required')),
        about: yup
        .string()
            .required(t('about is required'))
    })

    const onClickSubmit = async values => {
        const { firstName, address,about } = values;
        var body = {
            firstName: firstName,
            address: address,
            about:about
        };
        if (profile || body) {
             props.navigation.navigate('ChooseProfile');
        } else if (body) {
            props.navigation.navigate('SignUpSecondScreen');
        }
  
    };

    useEffect(() => {
    async function check() {
        var item = await AsyncStorage.getItem('userType');
        setIsType(item)
    }
    check();
  }, [])

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
                                initialValues={{ firstName: '', address: '',about:'' }}
                                onSubmit={onClickSubmit}>
                                {({ handleChange, handleBlur, handleSubmit, values, errors, isValid, }) => (
                                    <>
                                        <View style={styles.profileNameContainer}>
                                            <View style={styles.profileContainer}>
                                                <Pressable onPress={() => { props.navigation.navigate('ChooseProfile') }} style={styles.profile}>
                                                    {profile ?
                                                        <Image
                                                        resizeMode='cover'
                                                        source={profile}
                                                        style={styles.profileStyle} /> :
                                                        <ProfileSvg />}
                                                </Pressable>
                                            </View>
                                            <View style={styles.nameInput}>
                                                <Field
                                                    name={'firstName'}
                                                    component={Input}
                                                    value={values.firstName}
                                                    onChangeText={handleChange('firstName')}
                                                    onBlur={handleBlur('firstName')}
                                                    width={(BaseStyle.WIDTH / 100) * 50}
                                                    inputWidth={(BaseStyle.WIDTH / 100) * 40}
                                                    placeholder={t('First Name')}
                                                    isError={errors.firstName}
                                                 placeholderColor={COLORS.black}
                                                />
                                            </View>
                                        </View>

                                        <Field
                                            name={'address'}
                                            component={Input}
                                            marginTop={20}
                                            value={values.address}
                                            onChangeText={handleChange('address')}
                                            onBlur={handleBlur('address')}
                                            width={(BaseStyle.WIDTH / 100) * 80}
                                            inputWidth={(BaseStyle.WIDTH / 100) * 70}
                                            placeholder={t('Country of Residence')}
                                            placeholderColor={COLORS.black}
                                            isError={errors.address} />
                                        
                                        {isType === USER.SHELTER && <Field
                                            name={'about'}
                                            component={Input}
                                            marginTop={30}
                                            value={values.about}
                                            onChangeText={handleChange('about')}
                                            onBlur={handleBlur('about')}
                                            width={(BaseStyle.WIDTH / 100) * 80}
                                            inputWidth={(BaseStyle.WIDTH / 100) * 70}
                                            placeholder={t('Desc./About')}
                                            placeholderColor={COLORS.black}
                                            isError={errors.about}
                                            multiline
                                            height={100}
                                        
                                            numberOfLines={3}
                                            mt={20}
                                        />}

                                        <Button
                                            title={t('Next')}
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
        </ImageBackground>
    );
};

export default SignUpFirstScreen;
