import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, StatusBar, Platform, Linking, Modal, Pressable, TextInput } from 'react-native';
import styles from './styles';
import '../../../assets/i18n/i18n';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ROLE } from '../../constants/types';
import { IMAGES } from '../../common/style/Images';
import CloseButton from '../../components/core/CloseButton';
import { COLORS } from '../../common/style/Colors';
import ArrowLeftSvg from '../../common/svgs/ArrowLeftSvg';
import CloseSvg from '../../common/svgs/CloseSvg';
import Header from '../../components/core/Header';
import { wishlistAddApi, wishListApi, wishListFilterApi } from '../../redux/actions/ApiActionCreator';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/core/Button';
const ShelterWishList = (props) => {
    const { t } = useTranslation();
    const [isRole, setIsRole] = useState('');
    const [isShowModal, setShowModal] = useState(false);
    const [name, setName] = useState('');
    const isShelter = isRole === ROLE.SHELTER
    const isData = useSelector((state) => state.apiReducer.loginData);
    console.log("isData=====>", isData);
    // const isData = isData.data.user

    useEffect(() => {
        async function check() {
            var item = await AsyncStorage.getItem('userType');
            setIsRole(item)
        }
        check();
    }, []);

    const onSubmit = () => {
        // var body = {
        //     ...isdataProfile,
        //     shelterName: name
        // }
        // dispatch(signUpDataOfUser(body));
        // props.navigation.navigate('SignUpSecondScreen');
    }

    return (
        <ImageBackground
            resizeMode='cover'
            style={{ flex: 1 }}
            source={IMAGES.wishlistBg}>
            <StatusBar
                barStyle={Platform.OS === 'ios' ? 'light-content' : 'dark-content'}
                backgroundColor={COLORS.transparent} />
            <View style={styles.blurViewShelter}>
                <Pressable style={{ marginTop: 30, marginLeft: 25 }} onPress={() => props.navigation.toggleDrawer()}>
                    <Text style={{ fontSize: 40, color: COLORS.white }}>{'...'}</Text>
                </Pressable>
                <View style={styles.myriosContainer}>
                    <Text style={styles.myriosText}>{`${t('hi')} ${isData.name}`}</Text>
                    <Text onPress={() =>
                        setShowModal(true)
                        // Linking.openURL(isData.watchlist_link)
                    } style={styles.myriosSubText}>{t('seeWishList')}</Text>
                    <Text onPress={() => setShowModal(true)} style={[styles.myriosSubText, { marginVertical: 10 }]}>{t('uploadWishList')}</Text>
                    <Text onPress={() => { props.navigation.navigate('HowTo') }} style={styles.myriosSubText}>{t('createWishList')}</Text>
                </View>
            </View>
            <Modal
                visible={isShowModal}
                animationType="fade"
                transparent={true}
                onRequestClose={() => { setShowModal(false) }}>
                <View style={styles.blurView}>
                    <View style={styles.blurSubView}>
                        <Pressable onPress={() => setShowModal(false)} style={styles.closeBtn}>
                            <CloseSvg fill={COLORS.white} width={10} height={10} />
                        </Pressable>
                        <View style={{ justifyContent: 'center', alignItems: "center" }}>
                            <Text style={[styles.titleMainText]}>{'Please Upload a Wishlist first!'}</Text>
                            <Text style={[styles.titleText]}>{'Wishlist Link'}</Text>
                            <TextInput
                                placeholder={'Wishilist Link'}
                                value={name}
                                // onEndEditing={()=>{}}
                                style={styles.inputView}
                                onChangeText={(text) => setName(text)} />
                            <Text style={[styles.titleText]}>{'Tell us a little about why you need the items on your wishlist..'}</Text>

                            <TextInput
                                placeholder={'Wishilist Link Description'}
                                value={name}
                                // onEndEditing={onSubmit}
                                style={styles.inputView}
                                onChangeText={(text) => setName(text)} />

                            {/* {!isDonor &&
                                                <>
                                                    <View style={{ marginTop: 20 }}>
                                                        <Text style={{ marginBottom: 10, width: (BaseStyle.WIDTH / 100) * 80 }}>{'Tell us a little about why you need the items on your wishlist..'}</Text>
                                                        <Field
                                                            // title={'Tell us a little about why you need the items on your wishlist..'}
                                                            // mt={20}
                                                            name={'wishListLink'}
                                                            component={Input}
                                                            value={values.wishListLink}
                                                            onChangeText={handleChange('wishListLink')}
                                                            onBlur={handleBlur('wishListLink')}
                                                            width={(BaseStyle.WIDTH / 100) * 80}
                                                            inputWidth={(BaseStyle.WIDTH / 100) * 70}
                                                            placeholder={'WishList Link'}
                                                            isError={errors.wishListLink}
                                                        // inputColor={COLORS.blue}
                                                        />
                                                    </View>

                                                    <Field
                                                        mt={20}
                                                        name={'wishListDescription'}
                                                        component={Input}
                                                        value={values.wishListDescription}
                                                        onChangeText={handleChange('wishListDescription')}
                                                        onBlur={handleBlur('wishListDescription')}
                                                        width={(BaseStyle.WIDTH / 100) * 80}
                                                        inputWidth={(BaseStyle.WIDTH / 100) * 70}
                                                        placeholder={'WishList Description'}
                                                        isError={errors.wishListDescription}
                                                    // inputColor={COLORS.blue}
                                                    />
                                                </>} */}
                            <Button
                                onPress={() => {
                                    setShowModal(false)
                                    // Linking.openURL(name) 
                                }}
                                borderRadius={50}
                                fontSize={16}
                                color={COLORS.white}
                                height={40}
                                marginTop={20}
                                width={'60%'}
                                title={`Upload`} />
                        </View>
                    </View>
                </View>
            </Modal>
        </ImageBackground>
    );
};

export default ShelterWishList;
