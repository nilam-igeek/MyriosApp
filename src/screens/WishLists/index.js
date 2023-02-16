import React, { useState,useEffect } from 'react';
import { View, Text, StatusBar, FlatList} from 'react-native';
import '../../../assets/i18n/i18n';
import { useTranslation } from 'react-i18next';
import { COLORS } from '../../common/style/Colors';
import styles from './styles';
import Header from '../../components/core/Header';
import WishListCard from '../../components/core/WishListCard';
import { IMAGES } from '../../common/style/Images';
import HeartSvg from '../../common/svgs/HeartSvg';
import { wishListApi } from '../../redux/actions/ApiActionCreator';
import { useDispatch, useSelector } from 'react-redux';
const WishLists = (props) => {

    const { t } = useTranslation();
    const dispatch = useDispatch();
    const success = useSelector((state) => state.apiReducer.wishListData);
    console.log("successsuccesssuccesssuccess",success);
    // const loading = useSelector((state) => state.apiReducer.loading);
const wishListData = [
        { id: 1, image: IMAGES.wishList1, name: 'Kvitkas', gender: 'Girl', age: '6', country: 'Ukraine',selected:false },
        { id: 2, image: IMAGES.wishList2, name: 'Stefan', gender: 'Girl', age: '10', country: 'Ukraine',selected:false},
        { id: 3, image: IMAGES.wishList1, name: 'Zosia', gender: 'Girl', age: '2', country: 'Ukraine',selected:false },
        { id: 4, image: IMAGES.wishList2, name: 'Marta', gender: 'Mom', age: '32', country: 'Ukraine',selected:false },
        { id: 5, image: IMAGES.wishList1, name: 'Zosia', gender: 'Girl', age: '2', country: 'Ukraine',selected:false },
        { id: 6, image: IMAGES.wishList2, name: 'Marta', gender: 'Mom', age: '32', country: 'Ukraine',selected:false }
]
    
    useEffect(() => {
        var body = {
            type: 'Boy',
            country: 'India',
            name: 'Taksh',
            age:'24'
        }
         dispatch(wishListApi(body));
    })

return (
        <>
            <View style={styles.container}>
                <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.seashell} />
                <Header title={t('myrios')} onPress={() => {props.navigation.toggleDrawer()}} />
                <Text style={styles.wishListText}>{t('wishList')}</Text>
                <View style={styles.sortByContainer}>
                    <Text style={styles.sortByText}>{t('sortBy')}</Text>
                    <Text style={styles.sortByText}>{' >'}</Text>
                </View>
                <View style={styles.listContainer}>
                    <FlatList
                    data={wishListData}
                    extraData={wishListData}
                        keyExtractor={item => item.id}
                        showsVerticalScrollIndicator ={false}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) =>
                        {
                            return (<WishListCard
                                onClick={() => {onClickFev(item)}}
                                name={item.name}
                                gender={item.gender}
                                age={item.age}
                                country={item.country}
                                onPress={() => { }}
                                source={item.image} >
                                <HeartSvg HeartSvg stroke={COLORS.white} fill={COLORS.black} />
                            </WishListCard>)}}
                        numColumns={2} />
                </View>
            </View>
        </>
    );
};

export default WishLists;
