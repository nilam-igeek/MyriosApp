import React, { useState,useEffect } from 'react';
import { View, Text, StatusBar,Pressable, ScrollView} from 'react-native';

import Button from '../../../components/core/Button';
import styles from './styles';
import '../../../../assets/i18n/i18n';
import { useTranslation } from 'react-i18next';
import { COLORS } from '../../../common/style/Colors';
import Header from '../../../components/core/Header';
import Input from '../../../components/core/InputField';
import ProfileSvg from '../../../common/svgs/ProfileSvg';
import { Formik, Field } from 'formik';
import * as yup from 'yup';
import EditSvg from '../../../common/svgs/EditSvg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { USER } from '../../../constants/types';
const Profile = (props) => {

    const { t } = useTranslation();
        const [profile, setProfile] = useState('');
const [isType, setIsType] = useState('');
    const loginValidationSchema = yup.object().shape({
        firstName: yup
            .string(),
            // .required(t('Firstname is Required')),
        address: yup
            .string()
            // .required(t('Address is required'))

    })

    const onClickSubmit = async values => {
        const { firstName, address } = values;
        var body = {
            firstName: firstName,
            address: address
        };
        // if (profile || body) {
        //      props.navigation.navigate('ChooseProfile');
        // } else if (body) {
        //     props.navigation.navigate('SignUpSecondScreen');
        // }
  
    };

      useEffect(() => {
    async function check() {
        var item = await AsyncStorage.getItem('userType');
        setIsType(item)
    }
    check();
  }, [])


    return (
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.seashell} />
            <Header title={'Myrios'} onPress={() => { }} />
            <ScrollView contentContainerStyle={{flexGrow:1}}>
            <View style={{justifyContent:'center',alignItems:"center"}}>
            <Text style={styles.titleText}>{'PROFILE'}</Text>
         
            <Formik
                                validationSchema={loginValidationSchema}
                                initialValues={{ firstName: '',about:'' }}
                                onSubmit={onClickSubmit}>
                                {({ handleChange, handleBlur, handleSubmit, values, errors, isValid, }) => (
                                    <>
                                    
                                        <View style={styles.profileNameContainer}>
                                           <Pressable onPress={() => { props.navigation.navigate('ChooseProfile') }} style={styles.profile}>
                                                    {profile ?
                                                        <Image
                                                        resizeMode='cover'
                                                        source={profile}
                                                        style={styles.profileStyle} /> :
                                                        <ProfileSvg />}
                                                </Pressable>
                                           
                                                <Field
                                                    name={'firstName'}
                                                    placeholderColor={COLORS.black}
                                                    component={Input}
                                                    value={values.firstName}
                                                    onChangeText={handleChange('firstName')}
                                                    onBlur={handleBlur('firstName')}
                                                    width={(BaseStyle.WIDTH / 100) * 80}
                                                    inputWidth={(BaseStyle.WIDTH / 100) * 70}
                                                    placeholder={isType === USER.SHELTER ? ('Shelter Name'): t('First Name')}
                                                    isError={errors.firstName} />
                                        
                                
                                {isType === USER.SHELTER &&
                                    <>
                                        <Field
                                            name={'address'}
                                            component={Input}
                                            mt={40}
                                            value={values.address}
                                            onChangeText={handleChange('address')}
                                            onBlur={handleBlur('address')}
                                            width={(BaseStyle.WIDTH / 100) * 80}
                                            inputWidth={(BaseStyle.WIDTH / 100) * 70}
                                            placeholder={t('Country of Residence')}
                                            placeholderColor={COLORS.black}
                                            isError={errors.address} />
                                    <Field
                                            name={'about'}
                                            component={Input}
                                            // marginTop={30}
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
                                            mt={40}
                                        />
                                    </>
                                    }
                                
                                <Button
                                    bgColor={COLORS.lemonchiffon}
                                     width={(BaseStyle.WIDTH / 100) * 78}
                                    title={t('Edit Profile')}
                                    fontSize={14}
                                    color={COLORS.black}
                                    height={45}
                                    marginTop={40}
                                    onPress={handleSubmit}
                                    isRight
                                >
                                    <EditSvg/>
                                    </Button>
                                          
                                        </View>
                                        <Button
                                            title={t('Sign Out')}
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
    );
};

export default Profile;
