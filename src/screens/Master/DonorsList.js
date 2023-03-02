import React, { useEffect, useState } from 'react';
import { View, Text, StatusBar, RefreshControl, Image, FlatList, Pressable } from 'react-native';
import styles from './styles';
import '../../../assets/i18n/i18n';
import { useTranslation } from 'react-i18next';
import { COLORS } from '../../common/style/Colors';
import Header from '../../components/core/Header';
import ProfileSvg from '../../common/svgs/ProfileSvg';
import { donorsListApi, userStatusApi } from '../../redux/actions/ApiActionCreator';
import Indicator from '../../components/core/Indicator';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
const DonorsList = (props) => {

    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [refreshing, setRefreshing] = React.useState(false);
    const loading = useSelector((state) => state.apiReducer.loading);
    const dada = useSelector((state) => state.apiReducer.userStatusData);
    const dataOfDonors = useSelector((state) => !_.isEmpty(state.apiReducer.donorData) && state.apiReducer.donorData);
    const isDonorData = (!_.isEmpty(dataOfDonors.data) && dataOfDonors.data)

    useEffect(() => {
        dispatch(donorsListApi);
    }, [donorsListApi]);


    return (
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.seashell} />
            <Header title={t('myrios')} onPress={() => { props.navigation.toggleDrawer() }} />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
                <Text style={styles.titleText}>{`${t('masterTitle')}\n${t('donorType')}`}</Text>
                <View style={{ flex: 1 }}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        data={isDonorData.data}
                        extraData={isDonorData.data}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.itemCard}>
                                    <Pressable
                                        // onPress={() => { props.navigation.navigate('ProfileOfRole') }}
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
                                        </Text>
                                    </Pressable>
                                </View>)
                        }} />
                </View>
            </View>
            <Indicator isLoader animate={loading} />
        </View>
    );
};

export default DonorsList;
