import React, { useEffect, useState } from 'react';
import { View, Text, StatusBar, Image, FlatList, Pressable, Switch } from 'react-native';
import styles from './styles';
import '../../../assets/i18n/i18n';
import { useTranslation } from 'react-i18next';
import { COLORS } from '../../common/style/Colors';
import Header from '../../components/core/Header';
import ProfileSvg from '../../common/svgs/ProfileSvg';
import { refugeesListApi, userStatusApi } from '../../redux/actions/ApiActionCreator';
import { useDispatch, useSelector } from 'react-redux';
import Indicator from '../../components/core/Indicator';
import _ from 'lodash';
import ACTION_TYPES from '../../redux/actions/ActionTypes';
import { useFocusEffect } from '@react-navigation/native';
import { refugeesSuccess } from '../../redux/actions/ApiAction';
const RefugeesList = (props) => {

    const { t } = useTranslation();
    const dispatch = useDispatch();
    const dataOfRefugees = useSelector((state) => !_.isEmpty(state.apiReducer.refugeeData) && state.apiReducer.refugeeData);
    const refugeesList = (!_.isEmpty(dataOfRefugees.data) && dataOfRefugees.data)
    const loading = useSelector((state) => state.apiReducer.loading);


    useEffect(() => {
        function fetchProduct() {
            dispatch(refugeesListApi);
        }
        fetchProduct();
    }, [refugeesListApi]);


    const onClickUserStatus = (id) => {
        dispatch(userStatusApi(id));
    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.seashell} />
            <Header title={t('myrios')} onPress={() => { props.navigation.toggleDrawer() }} />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
                <Text style={styles.titleText}>{`${t('masterTitle')}\n${t('refugeeType')}`}</Text>
                <View style={{ flex: 1 }}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        data={refugeesList.data}
                        extraData={refugeesList.data}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => {
                            return (<View style={styles.itemCard}>
                                <Pressable
                                    onPress={() => { props.navigation.navigate('ProfileOfRole') }}
                                    style={{
                                        flexDirection: 'row', alignItems: 'center',
                                        width: (BaseStyle.WIDTH / 100) * 52,
                                        alignSelf: 'center',
                                    }}>
                                    <View style={styles.profile}>
                                        {item.image ? <Image
                                            resizeMode='cover'
                                            source={item.image}
                                            style={styles.profileStyle} />
                                            : <ProfileSvg height={30} width={30} />}
                                    </View>
                                    <Text style={{ marginLeft: 20 }} >
                                        <Text style={styles.userName}>{item.name}</Text>
                                        {item.country && <Text style={styles.userName}>{', '}{item.country}</Text>}
                                        {item.type && <Text style={styles.userName}>{', '}{item.type}</Text>}
                                        {item.age && <Text style={styles.userName}>{', '}{item.age}</Text>}
                                    </Text>
                                </Pressable>
                                {/* <Pressable
                                    onPress={() => onClickUserStatus(item.id)}
                                    style={{
                                        width: (BaseStyle.WIDTH / 100) * 25,
                                        alignSelf: 'center', backgroundColor: COLORS.blue, width: 100, borderRadius: 20
                                    }}>
                                    <Text style={{ color: COLORS.white, padding: 5, textAlign: 'center' }}>{item.is_active ? 'Active' : 'Deactivate'}</Text>
                                </Pressable> */}
                                <Switch
                                    value={item.is_active ? true : false}
                                    style={{ transform: [{ scaleX: .7 }, { scaleY: .7 }] }}
                                    onValueChange={() => onClickUserStatus(item.id)} />
                            </View>)
                        }
                        } />
                </View>
            </View>
            <Indicator isLoader animate={loading} />
        </View>
    );
};

export default RefugeesList;
