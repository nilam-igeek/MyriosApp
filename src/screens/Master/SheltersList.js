import React,{useEffect} from 'react';
import { View, Text, StatusBar, Image, FlatList, Pressable } from 'react-native';
import styles from './styles';
import '../../../assets/i18n/i18n';
import { useTranslation } from 'react-i18next';
import { COLORS } from '../../common/style/Colors';
import Header from '../../components/core/Header';
import ProfileSvg from '../../common/svgs/ProfileSvg';
import { sheltersListApi } from '../../redux/actions/ApiActionCreator';
import Indicator from '../../components/core/Indicator';
import { useDispatch, useSelector } from 'react-redux';
const SheltersList = (props) => {


    const { t } = useTranslation();
    const dispatch = useDispatch();
    const dataOfShelters = useSelector((state) => state.apiReducer.data);
    const isShelterData = dataOfShelters.data.data
    const success = useSelector((state) => state.apiReducer.data.success);
    const loading = useSelector((state) => state.apiReducer.loading);


    useEffect(() => {
        dispatch(sheltersListApi);
    }, [sheltersListApi]);


    return (
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.seashell} />
            <Header title={t('myrios')} onPress={() => { props.navigation.toggleDrawer() }} />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
                <Text style={styles.titleText}>{`${t('masterTitle')}\n${t('shelterType')}`}</Text>
                <View style={{ flex: 1 }}>
                    <FlatList
                        data={isShelterData}
                        extraData={isShelterData}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) =>
                            <Pressable style={[styles.itemCard, {}]} onPress={() => {props.navigation.navigate('ProfileOfRole')}}>
                                  <View style={styles.profile}>
                                        {item.image ? <Image
                                            resizeMode='cover'
                                            source={item.image}
                                            style={styles.profileStyle} />
                                        : <ProfileSvg height={30} width={30} />}
                                    </View>
                                <Text style={{ marginLeft: 20 }} >
                                    <Text style={styles.userName}>{item.name}</Text>
                                </Text>
                            </Pressable>} />
                </View>
            </View>
            <Indicator isLoader animate={loading}/>
        </View>
    );
};

export default SheltersList;
