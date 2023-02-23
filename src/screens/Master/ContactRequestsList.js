import React, { useEffect } from 'react';
import { View, Text, StatusBar, Image, FlatList, Pressable } from 'react-native';
import styles from './styles';
import '../../../assets/i18n/i18n';
import { useTranslation } from 'react-i18next';
import { COLORS } from '../../common/style/Colors';
import Header from '../../components/core/Header';
import { requestsListApi } from '../../redux/actions/ApiActionCreator';
import { useDispatch, useSelector } from 'react-redux';
import ProfileSvg from '../../common/svgs/ProfileSvg';
import Indicator from '../../components/core/Indicator';
import _ from 'lodash';
const ContactRequests = (props) => {

    const { t } = useTranslation();
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.apiReducer.loading);
    const dataOfRequests = useSelector((state) => !_.isEmpty(state.apiReducer.requestContactData) && state.apiReducer.requestContactData);
    const isRequestsData = (!_.isEmpty(dataOfRequests.data) && dataOfRequests.data)


    useEffect(() => {
        dispatch(requestsListApi);
    }, [requestsListApi]);

    return (
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.seashell} />
            <Header title={t('myrios')} onPress={() => { props.navigation.toggleDrawer() }} />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
                <Text style={styles.titleText}>{`${t('masterTitle')}\n${t('contactType')}`}</Text>
                <View style={{ flex: 1 }}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        data={isRequestsData.data}
                        extraData={isRequestsData.data}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) =>
                            <Pressable style={[styles.itemCard, {}]} onPress={() => { props.navigation.navigate('ProfileOfRole') }}>
                                <View style={styles.profile}>
                                    {item.image ? <Image
                                        resizeMode='cover'
                                        source={item.image}
                                        style={styles.profileStyle} />
                                        : <ProfileSvg height={30} width={30} />}
                                </View><Text style={{ marginLeft: 20 }} >
                                    <Text style={styles.userName}>{item.name}</Text>
                                    {item.type && <Text style={styles.userName}>{', '}{item.type}</Text>}
                                </Text>
                                <View style={{ marginLeft: 30, backgroundColor: COLORS.blue, width: 100, borderRadius: 20 }}>
                                    <Text style={{ color: COLORS.white, padding: 5, textAlign: 'center' }}>Active</Text>
                                </View>
                            </Pressable>} />
                </View>
            </View>
            <Indicator isLoader animate={loading} />
        </View>
    );
};

export default ContactRequests;
