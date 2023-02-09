import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, ScrollView, Pressable, Image, Alert, Modal } from 'react-native';
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
import ImagePicker from 'react-native-image-crop-picker';

const SignUpFirstScreen = (props) => {

    const { t } = useTranslation();
    const [profile, setProfile] = useState('');
    const [isSelected, setIsSelected] = useState('G');
    const [isRole, setIsRole] = useState('');
    const [isImages, setIsImages] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
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
        firstName: yup
            .string(),
        // .required(t('Firstname is Required')),
        address: yup
            .string(),
        // .required(t('Address is required')),
        about: yup
            .string(),
        // .required(t('About is required')),
        age: yup
            .string(),
        // .required(t('Age is required'))
    })

    const onClickSubmit = async values => {

        const { firstName, address, about, age, } = values;
        var body = {
            firstName: firstName,
            address: address,
            about: about,
            age: age,
            isUserType: isSelected
        };
        if (isRefugee) {
            props.navigation.navigate('Chat');
        } else if (isShelter || isDonor) {
            props.navigation.navigate('SignUpSecondScreen');
        }
        // if (profile || body) {
        //     props.navigation.navigate('ChooseProfile');
        // } else if (body) {
        //     props.navigation.navigate('SignUpSecondScreen');
        // } else if (isRefugee) { 
        //      props.navigation.navigate('Chat');
        // }

    };

    const onClick = (type) => {
        setIsSelected(type)
    }

    const openLibrary = () => {
        // props.navigation.navigate('ChooseProfile') 
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            setIsImages(image.path)
            setModalVisible(false)
        });
    }

    const openCamera = () => {
        // props.navigation.navigate('ChooseProfile') 
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            setIsImages(image.path)
            setModalVisible(false)
        });
    }

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
                                initialValues={{ firstName: '', address: '', about: '', age: '' }}
                                onSubmit={onClickSubmit}>
                                {({ handleChange, handleBlur, handleSubmit, values, errors, isValid, }) => (
                                    <>
                                        <View style={styles.profileNameContainer}>
                                            <View style={styles.profileContainer}>
                                                <Pressable onPress={() => { setModalVisible(!modalVisible) }} style={styles.profile}>
                                                    {isImages ?
                                                        <Image
                                                            resizeMode='cover'
                                                            source={{ uri: isImages }}
                                                            style={styles.profileStyle} /> :
                                                        <ProfileSvg />}
                                                </Pressable>
                                                <Modal
                                                    animationType="slide"
                                                    transparent={true}
                                                    visible={modalVisible}
                                                    onRequestClose={() => {setModalVisible(!modalVisible)}}>
                                                    <View style={styles.blurView}>
                                                        <View style={styles.blurSubView}>
                                                            <Text style={styles.titleOfPicker}>{'Select Image'}</Text>
                                                            <Text onPress={openCamera} style={styles.takePhotoText}>{'Take Photo...'}</Text>
                                                            <Text onPress={openLibrary} style={styles.takePhotoText}>{'Choose from Library...'}</Text>
                                                            <Text onPress={() => setModalVisible(false)} style={styles.cancelText}>{'CANCEL'}</Text>
                                                        </View>
                                                    </View>
                                                </Modal>
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

                                        <CountryPickerModal
                                            isOnSelect={(text) => { console.log(text) }}
                                            placeholder="Country of Residence" />

                                        {isRefugee &&
                                            <>
                                                <Field
                                                    name={'age'}
                                                    component={Input}
                                                    value={values.age}
                                                    onChangeText={handleChange('age')}
                                                    onBlur={handleBlur('age')}
                                                    width={(BaseStyle.WIDTH / 100) * 80}
                                                    inputWidth={(BaseStyle.WIDTH / 100) * 70}
                                                    placeholder={'Age'}
                                                    mt={20}
                                                    placeholderColor={COLORS.black}
                                                    isError={errors.age} />
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
                                                placeholder={t('Desc./About')}
                                                placeholderColor={COLORS.black}
                                                isError={errors.about}
                                                multiline
                                                height={100}
                                                borderRadius={20}
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
