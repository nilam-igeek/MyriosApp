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
import { refugeesListApi } from '../../../redux/actions/ApiActionCreator';
import { useDispatch, useSelector } from 'react-redux';
import Indicator from '../../../components/core/Indicator';

import EditSvg from '../../../common/svgs/EditSvg';

import _, { forEach } from 'lodash';
import { RefreshControl } from 'react-native-gesture-handler';
const Helped = (props) => {

    const { t } = useTranslation();
    const [isRole, setIsRole] = useState('');
    const isShelter = isRole === ROLE.SHELTER
    const isDonor = isRole === ROLE.DONOR
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.apiReducer.loading);
    const [refreshing, setRefreshing] = useState(false)
    const dataOfPeople = useSelector((state) => !_.isEmpty(state.apiReducer.refugeeData) && state.apiReducer.refugeeData);
    const isDataPeople = (!_.isEmpty(dataOfPeople.data) && dataOfPeople.data);

    useEffect(() => {
        var item;
        async function check() {
            item = await AsyncStorage.getItem('userType');
            setIsRole(item)
            fetchData(item)
        }
        check();
    }, []);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        dispatch(refugeesListApi());
        setTimeout(() => {
            setRefreshing(false);
            dispatch(refugeesListApi());
        }, 2000);
    }, []);



    const fetchData = (role) => {

        { role === ROLE.SHELTER && dispatch(refugeesListApi()) }


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


    return (
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.seashell} />
            <Header title={t('myrios')} onPress={() => { props.navigation.toggleDrawer() }} />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
                <Text style={styles.titleText}>{isShelter ? t('people') : 'FAVORITE'}</Text>
                <Text style={styles.subText}>{isShelter ? t('peopleSubDes') : ''}</Text>
                {!_.isEmpty(isDataPeople.data) ?
                    (<View style={{ flex: 1 }}>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}
                            data={isDataPeople.data}
                            extraData={isDataPeople.data}
                            keyExtractor={item => item.id}
                            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                            renderItem={({ item }) => {
                                return (
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
                                            <Text style={[styles.userName]}>{item.name}</Text>
                                        </View>
                                        <TouchableOpacity onPress={() => onEditClick(item)}>
                                            <EditSvg width={20} height={20} />
                                        </TouchableOpacity>
                                    </View>

                                )
                            }
                            }
                        />
                    </View>) :
                    (<View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
                        <Text style={styles.notFoundText}>{`No registered refugees at your shelter yet! Click  "Add a Person"  to add the refugees at your shelter!`}</Text>
                    </View>)}
                <Button
                    borderRadius={10}
                    bgColor={COLORS.black}
                    title={t('addPerson')}
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