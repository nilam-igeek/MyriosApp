import React, { useState, useEffect } from 'react';
import { View, Text, StatusBar, Pressable, ScrollView } from 'react-native';
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
import { ROLE } from '../../../constants/types';
import CountryPickerModal from '../../../components/core/CountryPickerModal';

const Profile = (props) => {
    const { t } = useTranslation();
    const [profile, setProfile] = useState('');
    const [isRole, setIsRole] = useState('');
    const [isSelected,setIsSelected] = useState('G')
    const isRefugee = isRole === ROLE.REFUGEE
    const isShelter = isRole === ROLE.SHELTER
    useEffect(() => {
        async function check() {
            var item = await AsyncStorage.getItem('userType');
            setIsRole(item)
        }
        check();
    }, []);

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
    };

    const onClick = (type) => {
    setIsSelected(type)
}

    return (
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.seashell} />
            <Header title={'Myrios'} onPress={() => {props.navigation.toggleDrawer()}} />
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ justifyContent: 'center', alignItems: "center" }}>
                    <Text style={styles.titleText}>{'PROFILE'}</Text>

                    <Formik
                        validationSchema={loginValidationSchema}
                        initialValues={{ firstName: '', country: '', about: '', age: '', type: '', about: '' }}
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
                                        mt={10}
                                        value={values.firstName}
                                        onChangeText={handleChange('firstName')}
                                        onBlur={handleBlur('firstName')}
                                        width={(BaseStyle.WIDTH / 100) * 80}
                                        inputWidth={(BaseStyle.WIDTH / 100) * 70}
                                        placeholder={isShelter ? ('Shelter Name') : t('First Name')}
                                        isError={errors.firstName}
                                    />

                                    {(isShelter || isRefugee) &&
                                        <CountryPickerModal
                                        marginTop={30}
                                        isOnSelect={(text) => { console.log(text) }}
                                        placeholder="Country" />}
                                    
                                    {isRefugee &&
                                        <>
                                            <Field
                                                name={'age'}
                                                component={Input}
                                                mt={30}
                                                value={values.age}
                                                onChangeText={handleChange('age')}
                                                onBlur={handleBlur('age')}
                                                width={(BaseStyle.WIDTH / 100) * 80}
                                                inputWidth={(BaseStyle.WIDTH / 100) * 70}
                                                placeholder={'Age'}
                                                placeholderColor={COLORS.black}
                                                isError={errors.age}
                                            />
                                           
                                            <Text style={styles.chooseOneText}>{'Choose one...'}</Text>
                                            <View style={styles.chooseOneCard}>
                                                <Button
                                                    title={t('Girl')}
                                                    fontSize={14}
                                                    bgColor={isSelected === 'G' ? COLORS.floralwhite : COLORS.lemonchiffon}
                                                    color={COLORS.black}
                                                    height={45}
                                                    width={'48%'}
                                                    onPress={() => { onClick('G') }}
                                                />
                                                <Button
                                                    bgColor={isSelected === 'B' ? COLORS.floralwhite : COLORS.lemonchiffon}
                                                    title={t('Boy')}
                                                    fontSize={14}
                                                    color={COLORS.black}
                                                    height={45}
                                                    width={'48%'}
                                                    onPress={() => { onClick('B') }}
                                                />
                                            </View>
                                            <View style={[styles.chooseOneCard, { marginTop: 10 }]}>
                                                <Button
                                                    title={t('Mom')}
                                                    fontSize={14}
                                                    bgColor={isSelected === 'M' ? COLORS.floralwhite : COLORS.lemonchiffon}
                                                    color={COLORS.black}
                                                    height={45}
                                                    width={'48%'}
                                                    onPress={() => { onClick('M') }}
                                                />
                                                <Button
                                                    bgColor={isSelected === 'W' ? COLORS.floralwhite : COLORS.lemonchiffon}
                                                    title={t('Woman')}
                                                    fontSize={14}
                                                    color={COLORS.black}
                                                    height={45}
                                                    width={'48%'}
                                                    onPress={() => { onClick('W') }}
                                                />
                                            </View>
                                        </>
                                    }

                                    {isShelter && <Field
                                        name={'about'}
                                        component={Input}
                                        value={values.about}
                                        onChangeText={handleChange('about')}
                                        onBlur={handleBlur('about')}
                                        width={(BaseStyle.WIDTH / 100) * 80}
                                        inputWidth={(BaseStyle.WIDTH / 100) * 70}
                                        placeholder={t('Desc./About')}
                                        placeholderColor={COLORS.black}
                                        isError={errors.about}
                                        multiline
                                        borderRadius={20}
                                        height={100}
                                        numberOfLines={3}
                                        mt={30}
                                    />}

                                    <Button
                                        bgColor={COLORS.lemonchiffon}
                                        width={(BaseStyle.WIDTH / 100) * 80}
                                        title={t('Edit Profile')}
                                        fontSize={14}
                                        color={COLORS.black}
                                        height={45}
                                        marginTop={30}
                                        onPress={handleSubmit}
                                        isRight
                                    >
                                        <EditSvg />
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
