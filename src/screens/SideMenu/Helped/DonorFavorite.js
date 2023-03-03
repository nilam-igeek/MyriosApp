import React, { useState, useEffect } from 'react';
import { View, Text, StatusBar, Image, FlatList } from 'react-native';
import Button from '../../../components/core/Button';
import styles from './styles';
import '../../../../assets/i18n/i18n';
import { useTranslation } from 'react-i18next';
import { COLORS } from '../../../common/style/Colors';
import Header from '../../../components/core/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ROLE } from '../../../constants/types';
import ProfileSvg from '../../../common/svgs/ProfileSvg';
import { wishListApi } from '../../../redux/actions/ApiActionCreator';
import { useDispatch, useSelector } from 'react-redux';
import Indicator from '../../../components/core/Indicator';
import _ from 'lodash';
const DonorFavorite = (props) => {

    const { t } = useTranslation();
    const [isRole, setIsRole] = useState('');
    const isShelter = isRole === ROLE.SHELTER
    const isDonor = isRole === ROLE.DONOR
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.apiReducer.loading);
    const dataOfwishListData = useSelector((state) => !_.isEmpty(state.apiReducer.wishListData) && state.apiReducer.wishListData);
    const dataOfwishListDataList = (!_.isEmpty(dataOfwishListData.data) && dataOfwishListData.data)

    useEffect(() => {
        AsyncStorage.getItem("userType").then(value => {
            setIsRole(value);
            if (value === isDonor) {
                dispatch(wishListApi());
            }

        })
    })

    const onClick = () => {
        props.navigation.navigate('WishLists')
    }


    return (
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.seashell} />
            <Header title={t('myrios')} onPress={() => { props.navigation.toggleDrawer() }} />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
                <Text style={styles.titleText}>{isShelter ? t('people') : 'FAVORITE'}</Text>
                <Text style={styles.subText}>{isShelter ? t('peopleSubDes') : ''}</Text>
                {dataOfwishListDataList ?
                    (<View style={{ flex: 1 }}>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}
                            data={dataOfwishListDataList.data}
                            extraData={dataOfwishListDataList.data}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => {
                                return (
                                    item.is_wishlist ?
                                        <View style={styles.itemCard}>
                                            <View style={styles.profile}>
                                                {item.image ?
                                                    <Image
                                                        resizeMode='cover'
                                                        source={{ uri: item.image }}
                                                        style={styles.profileStyle} />
                                                    :
                                                    <View style={[styles.profile, { backgroundColor: COLORS.black }]}>
                                                        <ProfileSvg height={30} width={30} />
                                                    </View>}
                                            </View>
                                            <View style={{ width: '70%' }}>
                                                <Text style={styles.userName}>{item.name}</Text>
                                            </View>
                                        </View> : null
                                )
                            }}
                        />
                    </View>
                    ) :
                    (<View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
                        <Text style={styles.notFoundText}>{`Favorite Data is not found`}</Text>
                    </View>)}
                <Button
                    borderRadius={10}
                    bgColor={COLORS.black}
                    title={(t('moreWishList'))}
                    fontSize={18}
                    color={COLORS.white}
                    height={50}
                    marginBottom={50}
                    width={(BaseStyle.WIDTH / 100) * 80}
                    onPress={onClick}
                />
            </View>
            <Indicator isLoader animate={loading} />
        </View>
    );
};

export default DonorFavorite;