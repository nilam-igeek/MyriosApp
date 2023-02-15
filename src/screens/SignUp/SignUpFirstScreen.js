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
import { useDispatch, useSelector } from 'react-redux';
import { signUpDataOfUser } from '../../redux/actions/ApiActionCreator';
const SignUpFirstScreen = (props) => {
    const dispatch = useDispatch();

    const isUserData = useSelector((state) => state.apiReducer.data);
    const { t } = useTranslation();
    const [profile, setProfile] = useState('');
    const [country,setCountry] = useState('');
    const [isSelected, setIsSelected] = useState('Girl');
    const [isRole, setIsRole] = useState('');
    const [isImages, setIsImages] = useState(isUserData.photo);
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

    const loginDonorValidationSchema = yup.object().shape({
        firstName: yup
            .string()
            .required(t('Name is Required')),
    })
    const loginShelterValidationSchema = yup.object().shape({
        firstName: yup
            .string()
            .required(t('Name is Required')),
        about: yup
            .string()
        .required(t('About is required')),
       
    })
     const loginRefugeeValidationSchema = yup.object().shape({
        firstName: yup
            .string()
            .required(t('Name is Required')),
        age: yup
            .string()
        .required(t('Age is required'))
    })

    const onClickSubmit = values => {
        const { firstName, about, age, } = values;
        var body = {
            firstName: firstName,
            country: country,
            about: about,
            age: age,
            photo: isImages,
            isUserType: isSelected
        };
        dispatch(signUpDataOfUser(body));
        if (isImages) {
            if (isRefugee) {
                props.navigation.navigate('Chat');
            } else if (isShelter || isDonor) {
                props.navigation.navigate('SignUpSecondScreen');
            }
        } else {
            props.navigation.navigate('ChooseProfile');
        }
    };

    const onClick = (type) => {
        setIsSelected(type)
    }

    const openLibrary = () => {
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
                     <Text style={styles.titleText}>{t('signUp')}</Text>
                    <ScrollView showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ flexGrow: 1 }}
                        bounces={false}>
                        <View style={styles.subContainer}>
                            <Formik
                                validationSchema={isShelter? loginShelterValidationSchema: isDonor ? loginDonorValidationSchema : loginRefugeeValidationSchema}
                                initialValues={{ firstName: '', about: '', age: '' }}
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
                                                    onRequestClose={() => { setModalVisible(!modalVisible) }}>
                                                    <View style={styles.blurView}>
                                                        <View style={styles.blurSubView}>
                                                            <Text style={styles.titleOfPicker}>{t('selectImage')}</Text>
                                                            <Text onPress={openCamera} style={styles.takePhotoText}>{t('takePhoto')}</Text>
                                                            <Text onPress={openLibrary} style={styles.takePhotoText}>{t('chooseLibrary')}</Text>
                                                            <Text onPress={() => setModalVisible(false)} style={styles.cancelText}>{t('cancel')}</Text>
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
                                                    placeholder={t('fName')}
                                                    isError={errors.firstName}
                                                />
                                            </View>
                                        </View>

                                        <CountryPickerModal
                                            isOnSelect={(text) => { setCountry(text) }}
                                            placeholder={t('countryResidence')} />

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
                                                    placeholder={t('age')}
                                                    mt={20}
                                                    isError={errors.age} />
                                                <Text style={styles.chooseOneText}>{t('chooseOne')}</Text>
                                                <View style={styles.chooseOneCard}>
                                                    <Button
                                                        borderColor={isSelected === 'Girl' ? COLORS.cornflowerblue : COLORS.transparent}
                                                        borderWidth={1}
                                                        bgColor={COLORS.lemonchiffon}
                                                        title={t('girl')}
                                                        fontSize={14}
                                                        color={COLORS.black}
                                                        height={45}
                                                        width={'48%'}
                                                        onPress={() => { onClick('Girl') }}
                                                    />
                                                    <Button
                                                        borderColor={isSelected === 'Boy' ? COLORS.cornflowerblue : COLORS.transparent}
                                                        borderWidth={1}
                                                        bgColor={COLORS.lemonchiffon}
                                                        title={t('boy')}
                                                        fontSize={14}
                                                        color={COLORS.black}
                                                        height={45}
                                                        width={'48%'}
                                                        onPress={() => { onClick('Boy') }}
                                                    />
                                                </View>
                                                <View style={[styles.chooseOneCard, { marginTop: 10 }]}>
                                                    <Button
                                                        borderColor={isSelected === 'Mom' ? COLORS.cornflowerblue : COLORS.transparent}
                                                        borderWidth={1}
                                                        bgColor={COLORS.lemonchiffon}
                                                        title={t('mom')}
                                                        fontSize={14}
                                                        color={COLORS.black}
                                                        height={45}
                                                        width={'48%'}
                                                        onPress={() => { onClick('Mom') }}
                                                    />
                                                    <Button
                                                        borderColor={isSelected === 'Woman' ? COLORS.cornflowerblue : COLORS.transparent}
                                                        borderWidth={1}
                                                        bgColor={COLORS.lemonchiffon}
                                                        title={t('woman')}
                                                        fontSize={14}
                                                        color={COLORS.black}
                                                        height={45}
                                                        width={'48%'}
                                                        onPress={() => { onClick('Woman') }}
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
                                                placeholder={t('about')}
                                                placeholderColor={COLORS.grey}
                                                isError={errors.about}
                                                multiline
                                                height={100}
                                                borderRadius={20}
                                                numberOfLines={3}
                                                mt={20}
                                            />}
                                        <Button
                                            marginBottom={35}
                                            title={t('next')}
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
