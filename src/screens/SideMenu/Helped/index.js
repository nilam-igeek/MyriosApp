import React, { useState, useEffect } from 'react';
import { View, Text, StatusBar, Image, FlatList, TouchableOpacity } from 'react-native';
import Button from '../../../components/core/Button';
import styles from './styles';
import '../../../../assets/i18n/i18n';
import { useTranslation } from 'react-i18next';
import { COLORS } from '../../../common/style/Colors';
import Header from '../../../components/core/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ROLE } from '../../../constants/types';
import ProfileSvg from '../../../common/svgs/ProfileSvg';
import { peopleApi, helpedApi, wishListApi, refugeesListApi } from '../../../redux/actions/ApiActionCreator';
import { useDispatch, useSelector } from 'react-redux';
import Indicator from '../../../components/core/Indicator';

import EditSvg from '../../../common/svgs/EditSvg';

import _, { forEach } from 'lodash';
const Helped = (props) => {

    const { t } = useTranslation();
    const [isRole, setIsRole] = useState('');
    const isShelter = isRole === ROLE.SHELTER
    const isDonor = isRole === ROLE.DONOR
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.apiReducer.loading);

    const dataOfPeople = useSelector((state) => !_.isEmpty(state.apiReducer.refugeeData) && state.apiReducer.refugeeData);
    //const dataOfPeople = useSelector((state) => !_.isEmpty(state.apiReducer.peopleData) && state.apiReducer.peopleData);
    // const dataOfHelped = useSelector((state) => !_.isEmpty(state.apiReducer.helpedData) && state.apiReducer.helpedData);
    const isDataPeople = (!_.isEmpty(dataOfPeople.data) && dataOfPeople.data);
    // const isDataHelped = (!_.isEmpty(dataOfHelped.data) && dataOfHelped.data);

    const dataOfwishListData = useSelector((state) => !_.isEmpty(state.apiReducer.wishListData) && state.apiReducer.wishListData);
    const dataOfwishListDataList = (!_.isEmpty(dataOfwishListData.data) && dataOfwishListData.data)

    useEffect(() => {
        var item;
        async function check() {
            item = await AsyncStorage.getItem('userType');
            setIsRole(item)


            fetchData(item)
        }
        check();


    }, []);

    const fetchData = (role) => {

        // console.log("role .....", role);
        { role === ROLE.SHELTER && dispatch(refugeesListApi) }
        { role === ROLE.DONOR && dispatch(helpedApi) }


    }

    const onClick = () => {
        if (isShelter) {
            props.navigation.navigate('AddPerson', { data: "" })
        } else {
            props.navigation.navigate('WishLists')
        }
    }

    const onEditClick = (item) => {

        if (isShelter) {
            props.navigation.navigate('AddPerson', { data: item })
        } else {
            props.navigation.navigate('WishLists')
        }

    }

    // useEffect(() => {

    //         console.log("role.....",role);
    //         { props.route.params.isShelter && dispatch(refugeesListApi) }
    //         { props.route.params.isDonor && dispatch(helpedApi) }


    //  }, [refugeesListApi, helpedApi])

    useEffect(() => {

        dispatch(wishListApi());

        // { isDonor && dispatch(helpedApi) }
    }, [wishListApi])

    return (
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.seashell} />
            <Header title={t('myrios')} onPress={() => { props.navigation.toggleDrawer() }} />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
                <Text style={styles.titleText}>{isShelter ? t('people') : 'FAVORITE'}</Text>
                <Text style={styles.subText}>{isShelter ? t('peopleSubDes') : ''}</Text>
                {!_.isEmpty(isDataPeople.data) || (!_.isEmpty(dataOfwishListDataList.data) && dataOfwishListDataList.data.find(data => data.is_wishlist == true)) ?
                    (<View style={{ flex: 1 }}>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}
                            data={isShelter ? isDataPeople.data : dataOfwishListDataList.data}
                            extraData={isShelter ? isDataPeople.data : dataOfwishListDataList.data}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => {
                                return (
                                    isShelter ?
                                        <View style={styles.itemCard}>
                                            <View style={styles.profile}>
                                                {item.image ?
                                                    <Image
                                                        resizeMode='cover'
                                                        source={item.image}
                                                        style={styles.profileStyle} />
                                                    : <ProfileSvg height={30} width={30} />}
                                            </View>
                                            <View style={{ width: '70%' }}>
                                                {isShelter ? <Text style={[styles.userName]}>{item.name}</Text> :
                                                    <Text style={styles.userName}>{item.name}</Text>}
                                            </View>
                                            {
                                                isShelter ?
                                                    <TouchableOpacity onPress={() => onEditClick(item)}>
                                                        <EditSvg width={20} height={20} />
                                                    </TouchableOpacity> : null
                                            }
                                        </View> :

                                        item.is_wishlist ?
                                            <View style={styles.itemCard}>
                                                <View style={styles.profile}>
                                                    {item.image ?
                                                        <Image
                                                            resizeMode='cover'
                                                            source={item.image}
                                                            style={styles.profileStyle} />
                                                        : <ProfileSvg height={30} width={30} />}
                                                </View>
                                                <View style={{ width: '70%' }}>
                                                    {isShelter ? <Text style={[styles.userName]}>{item.name}</Text> :
                                                        <Text style={styles.userName}>{item.name}</Text>}
                                                </View>
                                                {
                                                    isShelter ?
                                                        <TouchableOpacity onPress={() => onEditClick(item)}>
                                                            <EditSvg width={20} height={20} />
                                                        </TouchableOpacity> : null
                                                }
                                            </View> : null
                                )
                            }
                            }
                        />
                    </View>) :
                    (<View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
                        <Text style={styles.notFoundText}>{isShelter ? `No registered refugees at your shelter yet! Click  "Add a Person"  to add the refugees at your shelter!` : `Favorite Data is not found`}</Text>
                    </View>)}
                <Button
                    borderRadius={10}
                    bgColor={COLORS.black}
                    title={(isShelter ? t('addPerson') : t('moreWishList'))}
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

export default Helped;