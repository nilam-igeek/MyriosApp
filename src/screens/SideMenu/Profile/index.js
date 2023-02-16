import React, { useState, useEffect } from 'react';
import { View, Text, StatusBar, Pressable, ScrollView, Image, Modal } from 'react-native';
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
import { updateProfileApi } from '../../../redux/actions/ApiActionCreator';
import ImagePicker from 'react-native-image-crop-picker';
import CountryPickerModal from '../../../components/core/CountryPickerModal';
import { useDispatch, useSelector } from 'react-redux';
import Indicator from '../../../components/core/Indicator';
const Profile = (props) => {

    const isdataProfile = useSelector((state) => state.apiReducer.dataProfile);
    const loading = useSelector((state) => state.apiReducer.loading);
    // const data= useSelector((state) => state.apiReducer.data);
    console.log("isdata-isdataProfile-------->", isdataProfile);
    // console.log("isdata-isdataProfiledatadata-------->",data.data.name);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [isRole, setIsRole] = useState('');
    const [isSelected, setIsSelected] = useState('Girl');
     const [country,setCountry] = useState('');
    const [isImages, setIsImages] = useState(isdataProfile.photo);
    const [modalVisible, setModalVisible] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
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
        // .required(t('nameRequired')),
        address: yup
            .string()
        // .required(t('Address is required'))

    })


    const onClickSubmit = async values => {
        const { firstName,about,age } = values;
        if (isModalVisible) {
            var body = {
            image:isImages,
                email: isdataProfile.email,
                name: '',
                country: '',
                description: '',
                age: '',
            type:''
            // name: firstName,
            // country:(isShelter || isRefugee) ? country : '',
            // description:isShelter ? about : '',
            // age:isRefugee ? age :'',
            // type:isRefugee ? isSelected :'',
            };
            dispatch(updateProfileApi(body));
        } else {
          await AsyncStorage.setItem('token', '').then(() => [
            props.navigation.navigate('Login')
        ])}
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

    const onClickEdit = () => {
        setIsModalVisible(true)
    }
    return (
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.seashell} />
            <Header title={t('myrios')} onPress={() => { props.navigation.toggleDrawer() }} />
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ justifyContent: 'center', alignItems: "center" }}>
                    <Text style={styles.titleText}>{t('profile')}</Text>

                    <Formik
                        validationSchema={loginValidationSchema}
                        initialValues={{ firstName: '', about: '', age: '', }}
                        onSubmit={onClickSubmit}>
                        {({ handleChange, handleBlur, handleSubmit, values, errors, isValid, }) => (
                            <>
                                <View style={styles.profileNameContainer}>
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
                                        onRequestClose={() => {
                                            setModalVisible(!modalVisible);
                                        }}>
                                        <View style={styles.blurView}>
                                            <View style={styles.blurSubView}>
                                                <Text style={styles.titleOfPicker}>{t('selectImage')}</Text>
                                                <Text onPress={openCamera} style={styles.takePhotoText}>{t('takePhoto')}</Text>
                                                <Text onPress={openLibrary} style={styles.takePhotoText}>{t('chooseLibrary')}</Text>
                                                <Text onPress={() => setModalVisible(false)} style={styles.cancelText}>{t('cancel')}</Text>
                                            </View>
                                        </View>
                                    </Modal>

                                    {isModalVisible ? <Field
                                        name={'firstName'}
                                        placeholderColor={COLORS.black}
                                        component={Input}
                                        mt={10}
                                        value={values.firstName}
                                        onChangeText={handleChange('firstName')}
                                        onBlur={handleBlur('firstName')}
                                        width={(BaseStyle.WIDTH / 100) * 80}
                                        inputWidth={(BaseStyle.WIDTH / 100) * 70}
                                        placeholder={isShelter ? ('shelterName') : t('fName')}
                                        isError={errors.firstName}
                                    /> :
                                        <View style={styles.countryView}>
                                            <Text style={styles.countryText}>{isdataProfile.name}</Text>
                                        </View>
                                    }

                                    {isModalVisible ?
                                        (<>
                                            {(isShelter || isRefugee) &&
                                                <CountryPickerModal
                                                marginTop={30}
                                                isOnSelect={(text) => { setCountry(text) }}
                                                    // isOnSelect={(text) => { console.log(text) }}
                                                    placeholder={t("country")} />}
                                        </>
                                        ) : (
                                            <>
                                                {(isShelter || isRefugee) &&
                                                    <View style={styles.countryView}>
                                                        <Text style={styles.countryText}>{isdataProfile.country}</Text>
                                                    </View>}
                                            </>
                                        )
                                    }


                                    {isRefugee &&
                                        <>
                                            {isModalVisible ? <Field
                                                name={'age'}
                                                component={Input}
                                                mt={30}
                                                value={values.age}
                                                onChangeText={handleChange('age')}
                                                onBlur={handleBlur('age')}
                                                width={(BaseStyle.WIDTH / 100) * 80}
                                                inputWidth={(BaseStyle.WIDTH / 100) * 70}
                                                placeholder={t('age')}
                                                placeholderColor={COLORS.black}
                                                isError={errors.age}
                                            /> :
                                                <View style={styles.countryView}>
                                                    <Text style={styles.countryText}>{isdataProfile.age}</Text>
                                                </View>
                                            }


                                            {isModalVisible ? <>
                                                <Text style={styles.chooseOneText}>{t('chooseOne')}</Text>
                                                <View style={styles.chooseOneCard}>
                                                    <Button
                                                        borderWidth={1}
                                                        title={t('girl')}
                                                        fontSize={14}
                                                        borderColor={isSelected === 'Girl' ? COLORS.cornflowerblue : COLORS.transparent}
                                                        bgColor={COLORS.lemonchiffon}
                                                        color={COLORS.black}
                                                        height={45}
                                                        width={'48%'}
                                                        onPress={() => { onClick('Girl') }}
                                                    />
                                                    <Button
                                                        borderWidth={1}
                                                        borderColor={isSelected === 'Boy' ? COLORS.cornflowerblue : COLORS.transparent}
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
                                                        borderWidth={1}
                                                        borderColor={isSelected === 'Mom' ? COLORS.cornflowerblue : COLORS.transparent}
                                                        title={t('mom')}
                                                        fontSize={14}
                                                        bgColor={COLORS.lemonchiffon}
                                                        color={COLORS.black}
                                                        height={45}
                                                        width={'48%'}
                                                        onPress={() => { onClick('Mom') }}
                                                    />
                                                    <Button
                                                        borderWidth={1}
                                                        borderColor={isSelected === 'Woman' ? COLORS.cornflowerblue : COLORS.transparent}
                                                        bgColor={COLORS.lemonchiffon}
                                                        title={t('woman')}
                                                        fontSize={14}
                                                        color={COLORS.black}
                                                        height={45}
                                                        width={'48%'}
                                                        onPress={() => { onClick('Woman') }}
                                                    />
                                                </View>
                                            </> :
                                                <View style={styles.countryView}>
                                                    <Text style={styles.countryText}>{isdataProfile.isUserType}</Text>
                                                </View>}
                                        </>}
                                    {isShelter &&
                                        <>
                                            {isModalVisible ? <Field
                                                name={'about'}
                                                component={Input}
                                                value={values.about}
                                                onChangeText={handleChange('about')}
                                                onBlur={handleBlur('about')}
                                                width={(BaseStyle.WIDTH / 100) * 80}
                                                inputWidth={(BaseStyle.WIDTH / 100) * 70}
                                                placeholder={t('about')}
                                                placeholderColor={COLORS.black}
                                                isError={errors.about}
                                                multiline
                                                borderRadius={20}
                                                height={100}
                                                numberOfLines={3}
                                                mt={30}
                                            /> :
                                                <View style={styles.countryView}>
                                                    <Text numberOfLines={1} style={styles.countryText}>{isdataProfile.about}</Text>
                                                </View>
                                            }
                                        </>
                                    }
                                    <Button
                                        bgColor={COLORS.lemonchiffon}
                                        width={(BaseStyle.WIDTH / 100) * 80}
                                        title={t('editProfile')}
                                        fontSize={14}
                                        color={COLORS.black}
                                        height={45}
                                        marginTop={30}
                                        onPress={onClickEdit}
                                        isRight
                                    >
                                        <EditSvg />
                                    </Button>
                                </View>
                                <Button
                                    marginBottom={30}
                                    title={isModalVisible ? t('updateProfile') : t('signOut')}
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
             <Indicator isLoader animate={loading}/>
        </View>
    );
};

export default Profile;
