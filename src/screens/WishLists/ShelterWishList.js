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
    const [alertModal, setAlertModal] = useState(false);
    const [name, setName] = useState('');
    const [wishListLink, setWishListLink] = useState('');
    const [wishListDes, setWishListDes] = useState('');
    const [asyncWishListLink, setAsyncWishListLink] = useState('');
    const [asyncWishListDes, setAsyncWishListDes] = useState('');
    const isShelter = isRole === ROLE.SHELTER
    const url = asyncWishListLink !== null ? asyncWishListLink : wishListLink
    const isData = useSelector((state) => state.apiReducer.loginData);
    console.log("asyncWishListLink=====>", asyncWishListLink);


    useEffect(() => {
        AsyncStorage.getItem("userType").then(value => {
            setIsRole(value)
        })
    })

    const getUploadLink = async () => {
        setShowModal(false)
        await AsyncStorage.setItem('uploadLink', wishListLink);
        await AsyncStorage.setItem('uploadDesLink', wishListDes);
    }

    useEffect(() => {
        AsyncStorage.getItem("uploadLink").then(value => {
            setAsyncWishListLink(value)
        });
        AsyncStorage.getItem("uploadDesLink").then(value => {
            setAsyncWishListDes(value)
        });
    })

    const onClickClose = async () => {
        setShowModal(false);
        // setWishListLink('');
        // setWishListDes('');
        // await AsyncStorage.setItem('uploadLink', '');
        // await AsyncStorage.setItem('uploadDesLink', '');
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
                    <Text onPress={() => {
                        url ? Linking.openURL(url) : setAlertModal(true)
                    }} style={styles.myriosSubText}>{t('seeWishList')}</Text>
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
                        <Pressable onPress={onClickClose} style={styles.closeBtn}>
                            <CloseSvg fill={COLORS.white} width={10} height={10} />
                        </Pressable>
                        <View style={{ justifyContent: 'center', alignItems: "center" }}>
                            <Text style={[styles.titleMainText]}>{'Please Upload a Wishlist first!'}</Text>
                            <Text style={[styles.titleText]}>{'Wishlist Link'}</Text>
                            <TextInput
                                placeholder={'Wishilist Link'}
                                value={wishListLink}
                                style={styles.inputView}
                                onChangeText={(text) => setWishListLink(text)} />
                            <Text style={[styles.titleText]}>{'Tell us a little about why you need the items on your wishlist..'}</Text>
                            <TextInput
                                placeholder={'Wishilist Link Description'}
                                value={wishListDes}
                                style={styles.inputView}
                                onChangeText={(text) => setWishListDes(text)} />
                            <Button
                                onPress={getUploadLink}
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
            <Modal
                visible={alertModal}
                animationType="fade"
                transparent={true}
                onRequestClose={() => { setAlertModal(false) }}>
                <View style={styles.blurView}>
                    <View style={styles.blurSubView}>
                        <Pressable onPress={() => setAlertModal(false)} style={styles.closeBtn}>
                            <CloseSvg fill={COLORS.white} width={10} height={10} />
                        </Pressable>
                        <View style={{ justifyContent: 'center', alignItems: "center" }}>
                            <Text style={[styles.titleMainText, { marginVertical: 5 }]}>{'Please Upload a Wishlist first!'}</Text>
                        </View>
                    </View>
                </View>
            </Modal>
        </ImageBackground>
    );
};

export default ShelterWishList;
