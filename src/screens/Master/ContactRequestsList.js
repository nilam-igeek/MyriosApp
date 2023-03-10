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
        function fetchProduct() {
            dispatch(requestsListApi());
        }
        fetchProduct();
    }, []);

    const onClickUser = (item) => {
        props.navigation.navigate('ProfileOfRole', { data: item, role: 'contactRequest' })
    }


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
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.itemCard}>
                                    <Pressable
                                        onPress={() => onClickUser(item)}
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
                                            {item.type && <Text style={styles.userName}>{', '}{item.type}</Text>}
                                        </Text>
                                    </Pressable>
                                </View>)
                        }
                        }
                    />
                </View>
            </View>
            <Indicator isLoader animate={loading} />
        </View>
    );
};

export default ContactRequests;
