import React, { useState, useEffect } from 'react';
import { View, Text, StatusBar, Pressable, ScrollView, Image, Modal, KeyboardAvoidingView, Platform, RefreshControl } from 'react-native';
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
// import ImagePicker from 'react-native-image-crop-picker';
import CountryPickerModal from '../../../components/core/CountryPickerModal';
import { useDispatch, useSelector } from 'react-redux';
import Indicator from '../../../components/core/Indicator';
import ButtonWithIcon from '../../../components/core/ButtonWithIcon';
import RNRestart from 'react-native-restart';
import DatePicker from 'react-native-date-picker';
import _ from 'lodash';
import moment from 'moment';
import CloseSvg from '../../../common/svgs/CloseSvg';
const Profile = (props) => {
    let loading = useSelector((state) => state.apiReducer.loading);
    let isData = useSelector((state) => state.apiReducer.loginData);
    let isNewData = useSelector((state) => state.apiReducer.regiData);
    let isProfile = useSelector((state) => state.apiReducer.dataProfile);
    let isProfileupdate = useSelector((state) => state.apiReducer.profileData);
    let data = isNewData ? isNewData : isData;
    console.log("const isUserData 111111===111=data11======-->", isProfileupdate.success);
    // const isData = (!_.isEmpty(isData.data.user) && isData.data.user)



    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [isRole, setIsRole] = useState('');
    const [isSelected, setIsSelected] = useState('');
    const [country, setCountry] = useState('');
    // const [isImages, setIsImages] = useState(isData.image);
    const [isImages, setIsImages] = useState('');

    const [modalVisible, setModalVisible] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const [isName, setName] = useState(false);
    const [isAbout, setAbout] = useState(false);
    const [isCountry, setIsCountry] = useState(false);
    const [isAge, setAge] = useState(false);
    const [isType, setType] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const [editShow, setEditShow] = useState(false);
    const isRefugee = isRole === ROLE.REFUGEE
    const isShelter = isRole === ROLE.SHELTER
    const isDonor = isRole === ROLE.DONOR
    const [date, setDate] = useState(new Date(34555646456))
    const [open, setOpen] = useState(false);
    const [newAge, setNewAge] = useState(0);
    const d = new Date();
    let year = d.getFullYear();

    useEffect(() => {
        async function check() {
            var item = await AsyncStorage.getItem('userType');
            setIsRole(item)
        }
        check();
    }, []);

    function getAge() {
        var today = new Date();
        var birthDate = new Date(data.dob);
        var age = today.getFullYear() - birthDate.getFullYear();
        setNewAge(age);
        return age;

    }

    useEffect(() => {
        if (isRefugee) {
            getAge();
        }
    })

    function inputChangeHandler(e) {
        var theAge = year - e;
        setAge(theAge);
    }

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
            setName(false)
            setAbout(false)
            setIsCountry(false)
            setAge(false)
            setType(false)
        }, 200);
    }, []);

    const loginValidationSchema = yup.object().shape({
        firstName: yup
            .string(),
        // .required(t('nameRequired')),
        address: yup
            .string()
        // .required(t('Address is required'))

    })


    const onClickSubmit = (values, actions) => {
        setEditShow(false)
        const { firstName, about, } = values;
        // if (isName || isAbout || isCountry || newAge || isType) {
        var profileUrl = isProfile.profile
        var words = profileUrl && profileUrl.split('http://18.233.84.195/img/');
        let url = words[1]
        var body = new FormData();
        body.append('image', isProfile.profile ? url : '');
        body.append('email', '');
        body.append('name', firstName);
        body.append('country', isShelter || isRefugee ? country : '');
        body.append('description', isShelter ? about : '');
        body.append('dob', isRefugee ? moment(date).format('YYYY-MM-DD') : '');
        body.append('type', isRefugee ? isSelected : '');
        // console.log("body--->", body);
        dispatch(updateProfileApi(body));
        onRefresh();
        // }
    };


    const logout = async () => {
        try {
            await AsyncStorage.removeItem('token');
            RNRestart.restart();
            // props.navigation.navigate('GetStartedd')
            return true;
        }
        catch (exception) {
            return false;
        }
    }

    const onClick = (type) => {
        setIsSelected(type)
    }

    const onClicksignOut = () => {
        logout();
    }

    const onClickEdit = () => {
        props.navigation.navigate('RefugeeProfile')

    }
    return (
        <View style={styles.container} >
            <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.seashell} />
            <Header title={t('myrios')} onPress={() => { props.navigation.toggleDrawer() }} />
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}
                    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                    }>
                    <View style={{ justifyContent: 'center', alignItems: "center" }}>
                        <Text style={styles.titleText}>{t('profile')}</Text>
                        <Formik
                            validationSchema={loginValidationSchema}
                            enableReinitialize
                            validateOnChange={false}
                            validateOnBlur={false}
                            initialValues={{ firstName: data.name, about: data.description }}
                            onSubmit={onClickSubmit}>
                            {({ handleChange, handleBlur, handleSubmit, values, errors, isValid, }) => (
                                <>
                                    <View style={styles.profileNameContainer}>
                                        <Image
                                            resizeMode='contain'
                                            source={{ uri: data.image ? data.image : isProfile.profile }}
                                            style={[styles.profileStyle, { backgroundColor: 'white', borderWidth: 0.5 }]} />
                                        <Pressable
                                            onPress={onClickEdit}
                                            style={{
                                                position: 'absolute', right: 150, top: 80,
                                                backgroundColor: 'white',
                                                alignItems: 'center',
                                                borderRadius: 25 / 2,
                                                justifyContent: "center", width: 30, height: 30
                                            }}>
                                            <EditSvg />
                                        </Pressable>

                                        {isName ?
                                            <Field
                                                name={'firstName'}
                                                placeholderColor={COLORS.black}
                                                component={Input}
                                                mt={20}
                                                value={values.firstName}
                                                onChangeText={handleChange('firstName')}
                                                onBlur={handleBlur('firstName')}
                                                width={(BaseStyle.WIDTH / 100) * 80}
                                                inputWidth={(BaseStyle.WIDTH / 100) * 70}
                                                placeholder={isShelter ? ('shelterName') : t('fName')}
                                                isError={errors.firstName}
                                            /> :
                                            <ButtonWithIcon title={data.name} onPress={() => { setName(true) }} />
                                        }

                                        {isCountry ?
                                            (<>
                                                {(isShelter || isRefugee) &&
                                                    <CountryPickerModal
                                                        marginTop={30}
                                                        //   value={data.country}
                                                        isOnSelect={(text) => { setCountry(text) }}
                                                        // isOnSelect={(text) => { console.log(text) }}
                                                        placeholder={t("country")} />}
                                            </>
                                            ) : (
                                                <>
                                                    {(isShelter || isRefugee) &&
                                                        <ButtonWithIcon title={data.country} onPress={() => { setIsCountry(true) }} />}
                                                </>
                                            )
                                        }


                                        {isRefugee &&
                                            <>
                                                <DatePicker
                                                    modal
                                                    mode='date'
                                                    open={open}
                                                    date={date}
                                                    onConfirm={(date) => {
                                                        inputChangeHandler(date.getFullYear());
                                                        setOpen(false)
                                                        setDate(date)
                                                    }}
                                                    onCancel={() => {
                                                        setOpen(false)
                                                    }}
                                                />
                                                <ButtonWithIcon title={newAge} onPress={() => setOpen(true)} />

                                                {isType ? <>
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
                                                    <ButtonWithIcon title={data.type} onPress={() => { setType(true) }} />
                                                }
                                            </>}
                                        {isShelter &&
                                            <>
                                                {isAbout ? <Field
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
                                                    // multiline
                                                    borderRadius={20}
                                                    height={82}
                                                    // numberOfLines={3}
                                                    mt={30}
                                                /> :
                                                    <ButtonWithIcon title={data.description ? data.description : 'description'} onPress={() => { setAbout(true) }} />
                                                }
                                            </>
                                        }

                                    </View>
                                    <View style={{
                                        flexDirection: 'row',
                                        width: (BaseStyle.WIDTH / 100) * 80,
                                        alignItems: 'center',
                                        justifyContent: 'space-between'
                                    }}>
                                        <Button
                                            marginBottom={30}
                                            title={t('signOut')}
                                            fontSize={16}
                                            color={COLORS.white}
                                            height={50}
                                            marginTop={40}
                                            width={'46%'}
                                            onPress={onClicksignOut}
                                        />
                                        <Button
                                            // disabled={isProfile.profile || isName || isAbout || isCountry || newAge || isType}
                                            marginBottom={30}
                                            title={t('updateProfile')}
                                            fontSize={16}
                                            // bgColor={!isProfile.profile || !isName || !isAbout || !isCountry || !newAge || !isType ? COLORS.grey : COLORS.cornflowerblue}
                                            color={COLORS.white}
                                            height={50}
                                            marginTop={40}
                                            width={'46%'}
                                            onPress={() => { setEditShow(true) }}
                                        // onPress={handleSubmit}
                                        />
                                    </View>
                                    <>
                                        <Modal
                                            visible={editShow}
                                            animationType="fade"
                                            transparent={true}
                                            onRequestClose={() => { setEditShow(false) }}>
                                            <View style={styles.blurView}>
                                                <View style={styles.blurSubView}>
                                                    <Pressable onPress={() => setEditShow(false)} style={styles.closeBtn}>
                                                        <CloseSvg fill={COLORS.white} width={10} height={10} />
                                                    </Pressable>
                                                    <View style={{ justifyContent: 'center', alignItems: "center" }}>
                                                        <Text style={styles.modalSubText}>{'Are You Sure to Change the Profile ?'}</Text>
                                                        <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                                                            <Button
                                                                onPress={handleSubmit}
                                                                borderRadius={50}
                                                                fontSize={18}
                                                                color={COLORS.white}
                                                                height={40}
                                                                marginTop={35}
                                                                width={'45%'}
                                                                title={`Yes`}
                                                            />
                                                            <Button
                                                                onPress={() => setEditShow(false)}
                                                                borderRadius={50}
                                                                fontSize={18}
                                                                color={COLORS.white}
                                                                height={40}
                                                                marginTop={35}
                                                                width={'45%'}
                                                                title={`No`}
                                                            />
                                                        </View>
                                                    </View>
                                                </View>
                                            </View>
                                        </Modal>
                                    </>
                                </>
                            )}
                        </Formik>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
            <Indicator isLoader animate={loading} />
        </View>
    );
};

export default Profile;