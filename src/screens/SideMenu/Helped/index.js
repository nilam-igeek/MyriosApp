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
import { peopleApi, helpedApi } from '../../../redux/actions/ApiActionCreator';
import { useDispatch, useSelector } from 'react-redux';
import Indicator from '../../../components/core/Indicator';
import _ from 'lodash';
const Helped = (props) => {

    const { t } = useTranslation();
    const [isRole, setIsRole] = useState('');
    const isShelter = isRole === ROLE.SHELTER
    const isDonor = isRole === ROLE.DONOR
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.apiReducer.loading);
    const dataOfPeople = useSelector((state) => !_.isEmpty(state.apiReducer.peopleData) && state.apiReducer.peopleData);
    const dataOfHelped = useSelector((state) => !_.isEmpty(state.apiReducer.helpedData) && state.apiReducer.helpedData);
    const isDataPeople = (!_.isEmpty(dataOfPeople.data) && dataOfPeople.data);
    const isDataHelped = (!_.isEmpty(dataOfHelped.data) && dataOfHelped.data);

    useEffect(() => {
        async function check() {
            var item = await AsyncStorage.getItem('userType');
            setIsRole(item)
        }
        check();
    }, []);

    const onClick = () => {
        if (isShelter) {
            props.navigation.navigate('AddPerson')
        }
    }

    useEffect(() => {
        { isShelter && dispatch(peopleApi) }
        { isDonor && dispatch(helpedApi) }
    }, [peopleApi, helpedApi])

    return (
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.seashell} />
            <Header title={t('myrios')} onPress={() => { props.navigation.toggleDrawer() }} />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
                <Text style={styles.titleText}>{isShelter ? t('people') : 'FAVORITE'}</Text>
                <Text style={styles.subText}>{isShelter ? t('peopleSubDes') : ''}</Text>
                {!_.isEmpty(isDataPeople.data) || !_.isEmpty(isDataHelped.data) ?
                    (<View style={{ flex: 1 }}>
                        <FlatList
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        data={isShelter? isDataPeople.data : isDataHelped.data}
                        extraData={isShelter? isDataPeople.data : isDataHelped.data}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) =>
                            <View style={styles.itemCard}>
                                <View style={styles.profile}>
                                    {item.image ?
                                        <Image
                                            resizeMode='cover'
                                            source={item.image}
                                            style={styles.profileStyle} />
                                        : <ProfileSvg height={30} width={30} />}
                                </View>
                                {isShelter ? <Text style={styles.userName}>{item.name}, {item.gender}, {item.age} {t('year')}</Text> :
                                    <Text style={styles.userName}>{item.name}</Text>}
                            </View>}
                    />
                </View>) :
                    (<View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
                        <Text style={styles.notFoundText}>{isShelter ? `No registered refugees at your shelter yet! Click  "Add a Person"  to add the refugees at your shelter!`:`Favorite Data is not found`}</Text>
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
