import React, { useState, useEffect } from 'react';
import { View, Text, StatusBar, FlatList, Modal, Pressable, Linking, Image, Platform } from 'react-native';
import '../../../assets/i18n/i18n';
import { useTranslation } from 'react-i18next';
import { COLORS } from '../../common/style/Colors';
import styles from './styles';
import Header from '../../components/core/Header';
import WishListCard from '../../components/core/WishListCard';
import { IMAGES } from '../../common/style/Images';
import HeartSvg from '../../common/svgs/HeartSvg';
import { wishlistAddApi, wishlistRemoveApi, wishListApi, wishListFilterApi } from '../../redux/actions/ApiActionCreator';
import { useDispatch, useSelector } from 'react-redux';
import Indicator from '../../components/core/Indicator';
import CloseSvg from '../../common/svgs/CloseSvg';
import Button from '../../components/core/Button';
import { FONTS } from '../../common/style/Fonts';
import BaseStyle from '../../common/style/BaseStyle';
import CountryPickerModal from '../../components/core/CountryPickerModal';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import _ from 'lodash';
import HeartFillSvg from '../../common/svgs/HeartFillSvg';
import AsyncStorage from '@react-native-async-storage/async-storage';
const WishLists = (props) => {

    console.log("props.navigation----->", props.navigation);

    // const defaultValues = [
    //     getDefaultStartValue(rentRangeFilter),
    //     getDefaultEndValue(rentRangeFilter),
    // ];
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [isRole, setIsRole] = useState('');

    console.log("item-WishLists --->,item", isRole);
    const [isItems, setItems] = useState(false);
    const [country, setCountry] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [showModalFav, setShowModalFav] = useState(false);

    const [isFavItem, setIsFavItem] = useState();
    const [isItemsData, setItemsData] = useState([]);
    const [isSelected, setIsSelected] = useState('');
    const [isValue, setIsValue] = useState(false);
    const [start, setStart] = useState([0]);
    const [end, setEnd] = useState([1]);
    const loading = useSelector((state) => state.apiReducer.loading);
    const dataOfwishListData = useSelector((state) => !_.isEmpty(state.apiReducer.wishListData) && state.apiReducer.wishListData);
    const dataOfwishListDataList = (!_.isEmpty(dataOfwishListData.data) && dataOfwishListData.data)
    // const dataOfwishListFilterData = useSelector((state) => !_.isEmpty(state.apiReducer.wishListFilterData) && state.apiReducer.wishListFilterData);
    // const dataOfwishListFilterDataList = (!_.isEmpty(dataOfwishListFilterData.data) && dataOfwishListFilterData.data)




    useEffect(() => {
        AsyncStorage.getItem("userType").then(value => {
            setIsRole(value)
        })
    })


    const selectedItem = (item) => {
        setItemsData(item)
        setItems(true)
    }


    const onClickFev = (item, index) => {
        setIsFavItem(index)
        if (item.is_wishlist) {
            setShowModalFav(true);
            dispatch(wishlistRemoveApi(item.id))
            dispatch(wishListApi());
        } else {
            dispatch(wishlistAddApi(item.id))
            dispatch(wishListApi());
        }
    }

    const onClickShowModal = () => {
        setShowModal(!showModal)
    }

    const onClick = (type) => {
        setIsSelected(type)
    }

    useEffect(() => {
        dispatch(wishListApi());
    }, [wishListApi])

    const renderFilter = () => {
        setShowModal(false)
        var body = {
            type: isSelected,
            country: country,
            age: start
        }
        dispatch(wishListFilterApi(body))
    }

    const [multiSliderValue, setMultiSliderValue] = useState([0, 100])

    const multiSliderValuesChange = (values) => setMultiSliderValue(values)

    return (
        <>
            <View style={styles.container}>
                <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.seashell} />
                <Header title={t('myrios')} onPress={() => {
                    props.navigation.toggleDrawer()
                }} />
                <Text style={styles.wishListText}>{t('wishList')}</Text>
                <View style={styles.sortByContainer}>
                    <Text onPress={() => onClickShowModal()} style={styles.sortByText}>{t('sortBy')}</Text>
                    <Text style={styles.sortByText}>{' >'}</Text>
                </View>
                <Modal
                    visible={showModal}
                    animationType="fade"
                    transparent={true}
                    onRequestClose={() => { setShowModal(false) }}>
                    <View style={styles.blurView}>
                        <View style={styles.blurSubView}>
                            <Pressable onPress={() => setShowModal(false)} style={styles.closeBtn}>
                                <CloseSvg fill={COLORS.white} width={10} height={10} />
                            </Pressable>
                            <View style={{ justifyContent: 'center', alignItems: "center", }}>
                                <View style={{ width: (BaseStyle.WIDTH / 100) * 75, alignSelf: 'center', alignItems: 'center' }}>
                                    <Text style={styles.chooseOneText}>{'Choose Their User type'}</Text>
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
                                            onPress={() => { onClick('Girl') }} />
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
                                    <Text style={styles.chooseOneText}>{'Age Range'}</Text>
                                    <View style={styles.range}>
                                        <Text style={styles.rangeText}>{multiSliderValue[0]}</Text>
                                        <MultiSlider
                                            markerStyle={{
                                                ...Platform.select({
                                                    ios: {
                                                        height: 20,
                                                        width: 20,
                                                        shadowColor: '#000000',
                                                        shadowOffset: {
                                                            width: 0,
                                                            height: 3
                                                        },
                                                        shadowRadius: 1,
                                                        shadowOpacity: 0.1
                                                    },
                                                    android: {
                                                        height: 30,
                                                        width: 30,
                                                        borderRadius: 50,
                                                        backgroundColor: '#1792E8'
                                                    }
                                                })
                                            }}
                                            pressedMarkerStyle={{
                                                ...Platform.select({
                                                    android: {
                                                        height: 30,
                                                        width: 30,
                                                        borderRadius: 20,
                                                        backgroundColor: '#148ADC'
                                                    }
                                                })
                                            }}
                                            selectedStyle={{
                                                backgroundColor: '#1792E8'
                                            }}
                                            trackStyle={{
                                                backgroundColor: '#CECECE'
                                            }}
                                            touchDimensions={{
                                                height: 40,
                                                width: 40,
                                                borderRadius: 20,
                                                slipDisplacement: 40
                                            }}
                                            values={[multiSliderValue[0], multiSliderValue[1]]}
                                            sliderLength={225}
                                            onValuesChange={multiSliderValuesChange}
                                            min={0}
                                            max={100}
                                            allowOverlap={false}
                                            minMarkerOverlapDistance={10} />
                                        <Text style={styles.rangeText}>{multiSliderValue[1]}</Text>
                                    </View>
                                    <Text style={styles.chooseOneText}>{'Home Country'}</Text>
                                    <CountryPickerModal
                                        width={(BaseStyle.WIDTH / 100) * 75}
                                        isOnSelect={(text) => { setCountry(text) }}
                                        placeholder={t('countryResidence')} />
                                    <Button
                                        onPress={renderFilter}
                                        borderRadius={50}
                                        fontSize={16}
                                        color={COLORS.white}
                                        height={40}
                                        marginTop={35}
                                        width={'60%'}
                                        title={'Done'}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>

                <View style={styles.listContainer}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        data={dataOfwishListDataList.data}
                        extraData={dataOfwishListDataList.data}
                        keyExtractor={item => item.id}
                        renderItem={({ item, index }) => {
                            return (<WishListCard
                                onClick={() => { onClickFev(item, index) }}
                                name={item.name}
                                gender={item.type}
                                age={item.age}
                                // country={item.country}
                                onPress={() => { selectedItem(item) }}
                                source={item.image}>
                                {item.is_wishlist ? <HeartFillSvg /> : <HeartSvg />}
                                {/* {(item.is_wishlist || (isFavItem === index)) ? <HeartFillSvg /> : <HeartSvg />} */}
                            </WishListCard>)
                        }}
                        numColumns={2} />
                </View>
            </View>
            <Modal
                visible={isItems}
                animationType="fade"
                transparent={true}
                onRequestClose={() => { setItems(false) }}>
                <View style={styles.blurView}>
                    <View style={styles.blurSubView}>
                        <Pressable onPress={() => setItems(false)} style={styles.closeBtn}>
                            <CloseSvg fill={COLORS.white} width={10} height={10} />
                        </Pressable>
                        <View style={{ justifyContent: 'center', alignItems: "center" }}>
                            {
                                [isItemsData].map((item) => {
                                    console.log("item===>", item);
                                    return (
                                        <>
                                            <Image source={item.image} style={styles.modalProfile} />
                                            <Text style={styles.modalTitleText}>{item.name}</Text>
                                            {item.gender && <Text style={styles.modalSubText}>User Type: {item.gender}</Text>}
                                            {item.age && <Text style={styles.modalSubText}>Age: {`${item.age} ${'years'}`}</Text>}
                                            {item.country && <Text style={styles.modalSubText}>Country: {item.country}</Text>}
                                            {item.watchlist_description && <Text style={styles.modalSubText}>{`${'Why'} ${item.name} ${'needs'} ${'it:'}${item.watchlist_description}`}</Text>}
                                            <Button
                                                onPress={() => { Linking.openURL('https://www.amazon.in/hz/wishlist/ls/9JG1X38OVUYE?ref_=wl_share') }}
                                                borderRadius={50}
                                                fontSize={16}
                                                color={COLORS.white}
                                                height={40}
                                                marginTop={35}
                                                width={'60%'}
                                                title={`${item.name}${`'s`} ${'Wishlist'}`}
                                            />
                                        </>
                                    )
                                })
                            }
                        </View>

                    </View>
                </View>
            </Modal>
            {/* {
                <Modal
                    visible={showModalFav}
                    animationType="fade"
                    transparent={true}
                    onRequestClose={() => { setShowModalFav(false) }}>
                    <View style={styles.blurView}>
                        <View style={styles.blurSubView}>
                            <Pressable onPress={() => setShowModalFav(false)} style={styles.closeBtn}>
                                <CloseSvg fill={COLORS.white} width={10} height={10} />
                            </Pressable>
                            <View style={{ justifyContent: 'center', alignItems: "center" }}>

                                <><Text style={styles.modalSubText}>Are you sure remove the list ? </Text>
                                    <Button
                                        onPress={() => { }}
                                        borderRadius={50}
                                        fontSize={16}
                                        color={COLORS.white}
                                        height={40}
                                        marginTop={35}
                                        width={'60%'}
                                        title={`YES`}
                                    />
                                </>
                            </View>

                        </View>
                    </View>
                </Modal>
            } */}
            <Indicator isLoader animate={loading} />
        </>
    );
};

export default WishLists;
