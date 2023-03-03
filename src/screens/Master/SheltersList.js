import React, { useEffect, useState } from 'react';
import { View, Text, StatusBar, Image, FlatList, Pressable, Switch } from 'react-native';
import styles from './styles';
import '../../../assets/i18n/i18n';
import { useTranslation } from 'react-i18next';
import { COLORS } from '../../common/style/Colors';
import Header from '../../components/core/Header';
import ProfileSvg from '../../common/svgs/ProfileSvg';
import { sheltersListApi, userStatusApi } from '../../redux/actions/ApiActionCreator';
import Indicator from '../../components/core/Indicator';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
const SheltersList = (props) => {

    const { t } = useTranslation();
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.apiReducer.loading);
    const dataOfShelters = useSelector((state) => !_.isEmpty(state.apiReducer.shelterData) && state.apiReducer.shelterData);
    const isShelterData = (!_.isEmpty(dataOfShelters.data) && dataOfShelters.data);

    const [showModalFav, setShowModalFav] = useState(false);

    const [isFavItem, setIsFavItem] = useState();
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        dispatch(sheltersListApi());
        setTimeout(() => {
            setRefreshing(false);
            dispatch(sheltersListApi());
        }, 2000);
    }, []);

    useEffect(() => {
        onRefresh();
    }, []);

    useEffect(() => {
        dispatch(sheltersListApi());
    }, [sheltersListApi])

    const onClickUserStatus = (item, index) => {
        setIsFavItem(index)
        if (item.is_active) {
            setShowModalFav(true);
            dispatch(userStatusApi(item.id))
            onRefresh();
        } else {
            dispatch(userStatusApi(item.id))
            onRefresh();
        }
    }


    return (
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.seashell} />
            <Header title={t('myrios')} onPress={() => { props.navigation.toggleDrawer() }} />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
                <Text style={styles.titleText}>{`${t('masterTitle')}\n${t('shelterType')}`}</Text>
                <View style={{ flex: 1 }}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        data={isShelterData.data}
                        extraData={isShelterData.data}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.itemCard}>
                                    <Pressable
                                        // onPress={() => { props.navigation.navigate('ProfileOfRole', {}) }}
                                        style={{
                                            flexDirection: 'row', alignItems: 'center',
                                            width: (BaseStyle.WIDTH / 100) * 52,
                                            alignSelf: 'center',
                                        }}>
                                        <View style={styles.profile}>
                                            {item.image ? <Image
                                                resizeMode='contain'
                                                source={{ uri: item.image }}
                                                style={styles.profileStyle} />
                                                :
                                                <View style={[styles.profile, { backgroundColor: COLORS.black }]}>
                                                    <ProfileSvg height={30} width={30} />
                                                </View>
                                            }
                                        </View>
                                        <Text style={{ marginLeft: 20 }} >
                                            <Text style={styles.userName}>{item.name}</Text>
                                        </Text>
                                    </Pressable>
                                    {/* <Pressable
                                        onPress={() => onClickUserStatus(item)}
                                        style={{
                                            width: (BaseStyle.WIDTH / 100) * 25,
                                            alignSelf: 'center', backgroundColor: COLORS.blue, width: 100, borderRadius: 20
                                        }}>
                                        <Text style={{ color: COLORS.white, padding: 5, textAlign: 'center' }}>{item.is_active === 1 ? 'Active' : 'Deactivate'}</Text>
                                    </Pressable> */}
                                    <Switch
                                        value={item.is_active === 1 ? true : false}
                                        style={{ transform: [{ scaleX: .7 }, { scaleY: .7 }] }}
                                        onValueChange={() => onClickUserStatus(item)} />
                                </View>)
                        }
                        } />
                </View>
            </View>
            <Indicator isLoader animate={refreshing} />
        </View>
    );
};

export default SheltersList;
