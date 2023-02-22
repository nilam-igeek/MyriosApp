import React, { useState, useEffect } from 'react';
import { View, Text, StatusBar, FlatList, Modal, Pressable, Linking, Image } from 'react-native';
import '../../../assets/i18n/i18n';
import { useTranslation } from 'react-i18next';
import { COLORS } from '../../common/style/Colors';
import styles from './styles';
import Header from '../../components/core/Header';
import WishListCard from '../../components/core/WishListCard';
import { IMAGES } from '../../common/style/Images';
import HeartSvg from '../../common/svgs/HeartSvg';
import { wishlistAddApi, wishListApi, wishListFilterApi } from '../../redux/actions/ApiActionCreator';
import { useDispatch, useSelector } from 'react-redux';
import Indicator from '../../components/core/Indicator';
import CloseSvg from '../../common/svgs/CloseSvg';
import Button from '../../components/core/Button';
import { FONTS } from '../../common/style/Fonts';
import BaseStyle from '../../common/style/BaseStyle';
import CountryPickerModal from '../../components/core/CountryPickerModal';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import _ from 'lodash';
const WishLists = (props) => {


    // const defaultValues = [
    //     getDefaultStartValue(rentRangeFilter),
    //     getDefaultEndValue(rentRangeFilter),
    // ];
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [isItems, setItems] = useState(false);
    const [country, setCountry] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [isFavItem, setIsFavItem] = useState();
    const [isItemsData, setItemsData] = useState([]);
    const [isSelected, setIsSelected] = useState('Girl');
    const [isValue, setIsValue] = useState(false);
    const [start, setStart] = useState([0]);
    const [end, setEnd] = useState([1]);
    const loading = useSelector((state) => state.apiReducer.loading);
    const dataOfwishListData = useSelector((state) => !_.isEmpty(state.apiReducer.wishListData) && state.apiReducer.wishListData);
    const dataOfwishListDataList = (!_.isEmpty(dataOfwishListData.data) && dataOfwishListData.data)
    // const dataOfwishListFilterData = useSelector((state) => !_.isEmpty(state.apiReducer.wishListFilterData) && state.apiReducer.wishListFilterData);
    // const dataOfwishListFilterDataList = (!_.isEmpty(dataOfwishListFilterData.data) && dataOfwishListFilterData.data)

    const wishListData = [
        { id: 1, image: IMAGES.wishList1, name: 'Kvitkas', gender: 'Girl', age: '6', country: 'Ukraine', selected: false },
        { id: 2, image: IMAGES.wishList2, name: 'Stefan', gender: 'Girl', age: '10', country: 'Ukraine', selected: false },
        { id: 3, image: IMAGES.wishList1, name: 'Zosia', gender: 'Girl', age: '2', country: 'Ukraine', selected: false },
        { id: 4, image: IMAGES.wishList2, name: 'Marta', gender: 'Mom', age: '32', country: 'Ukraine', selected: false },
        { id: 5, image: IMAGES.wishList1, name: 'Zosia', gender: 'Girl', age: '2', country: 'Ukraine', selected: false },
        { id: 6, image: IMAGES.wishList2, name: 'Marta', gender: 'Mom', age: '32', country: 'Ukraine', selected: false }
    ]

    const selectedItem = (item) => {
        setItemsData(item)
        setItems(true)
    }

    const onClickFev = (item, index) => {
        console.log("item---------->", item.id);
        console.log("item---------->", typeof item.id);
        setIsFavItem(index)
        dispatch(wishlistAddApi(item.id))
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

    return (
        <>
            <View style={styles.container}>
                <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.seashell} />
                <Header title={t('myrios')} onPress={() => { props.navigation.toggleDrawer() }} />
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
                                    <Text style={styles.chooseOneText}>{'User type'}</Text>
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
                                        <MultiSlider
                                            values={start}
                                            sliderLength={240}
                                            min={0}
                                            max={100}
                                            onValuesChange={(value) => { setStart(value) }} />
                                        <Text style={styles.rangeText}>{start}</Text>
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
                            // console.log("item=====fsdfd===>", item);
                            return (<WishListCard
                                onClick={() => { onClickFev(item, index) }}
                                name={item.name}
                                gender={item.type}
                                age={item.age}
                                // country={item.country}
                                onPress={() => { selectedItem(item) }}
                                source={item.image}>
                                <HeartSvg HeartSvg
                                    stroke={isFavItem === index ? COLORS.white : COLORS.black}
                                    fill={isFavItem === index ? COLORS.black : COLORS.white} />
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
                                    return (
                                        <>
                                            <Image source={item.image} style={styles.modalProfile} />
                                            <Text style={styles.modalTitleText}>{item.name}</Text>
                                            <Text style={styles.modalSubText}>Type: {item.gender}</Text>
                                            <Text style={styles.modalSubText}>Age: {`${item.age} ${'years'}`}</Text>
                                            <Text style={styles.modalSubText}>Country: {item.country}</Text>
                                            <Text style={styles.modalSubText}>Description: {''}</Text>
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
            {/* <Indicator isLoader animate={loading} /> */}
        </>
    );
};

export default WishLists;
