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
import { refugeesListApi } from '../../redux/actions/ApiActionCreator';
import { useDispatch, useSelector } from 'react-redux';
import Indicator from '../../components/core/Indicator';
import CloseSvg from '../../common/svgs/CloseSvg';
import Button from '../../components/core/Button';
import { FONTS } from '../../common/style/Fonts';
import _ from 'lodash';
const WishLists = (props) => {

    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [isItems, setItems] = useState(false);
    const [isFavItem, setIsFavItem] = useState();
    const [isItemsData, setItemsData] = useState([]);
    const dataOfRefugees = useSelector((state) => !_.isEmpty(state.apiReducer.refugeeData) && state.apiReducer.refugeeData);
    const refugeesList = (!_.isEmpty(dataOfRefugees.data) && dataOfRefugees.data)
    console.log("refugeesList--asdsfs--->", refugeesList);
    const loading = useSelector((state) => state.apiReducer.loading);



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

    const onClickFev = (index) => {
        setIsFavItem(index)
    }

    useEffect(() => {
        dispatch(refugeesListApi);
    }, [refugeesListApi]);
    return (
        <>
            <View style={styles.container}>
                <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.seashell} />
                <Header title={t('myrios')} onPress={() => { props.navigation.toggleDrawer() }} />
                <Text style={styles.wishListText}>{t('wishList')}</Text>
                <View style={styles.sortByContainer}>
                    <Text style={styles.sortByText}>{t('sortBy')}</Text>
                    <Text style={styles.sortByText}>{' >'}</Text>
                </View>
                <View style={styles.listContainer}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        data={refugeesList.data}
                        extraData={refugeesList.data}
                        keyExtractor={item => item.id}
                        renderItem={({ item, index }) => {
                            // console.log("item=====fsdfd===>", item);
                            return (<WishListCard
                                onClick={() => { onClickFev(index) }}
                                name={item.name}
                                gender={item.type}
                                age={item.age}
                                // country={item.country}
                                onPress={() => { selectedItem(item) }}
                                source={item.image}
                            >
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
