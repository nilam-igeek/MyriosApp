import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, ScrollView, TextInput, Linking } from 'react-native';
import { COLORS } from '../../common/style/Colors';
import Button from '../../components/core/Button';
import styles from './styles';
import CloseSvg from '../../common/svgs/CloseSvg';
import '../../../assets/i18n/i18n';
import { useTranslation } from 'react-i18next';
import CloseButton from '../../components/core/CloseButton';
import { signUpDataOfUser } from '../../redux/actions/ApiActionCreator';
import { useDispatch, useSelector } from 'react-redux';
import { IMAGES } from '../../common/style/Images';
import ArrowLeftSvg from '../../common/svgs/ArrowLeftSvg';
import AsyncStorage from '@react-native-async-storage/async-storage';
const ScheduleNow = (props) => {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const [isShelterUser, setShelterUser] = useState('isDefault');
    const [name, setName] = useState('');
    const isdataProfile = useSelector((state) => state.apiReducer.dataProfile);
    const userData = useSelector((state) => state.apiReducer.regiData);
    const [isRole, setIsRole] = useState('');
    const onClick = (type) => {
        setShelterUser(type)
    }
    console.log("dd-->", props.route.params.islogin);

    const onSubmit = () => {
        var body = {
            ...isdataProfile,
            shelterName: name
        }
        dispatch(signUpDataOfUser(body));
        props.navigation.navigate('SignUpSecondScreen');
    }


    useEffect(() => {
        AsyncStorage.getItem("userType").then(value => {
            setIsRole(value);
        })
        // console.log("isRole_welcomepropsCustomeDrawer----->", isRpropole);
    })
    return (
        <>
            <ImageBackground
                resizeMode='cover'
                style={{ flex: 1 }}
                source={IMAGES.languageBg}>
                <CloseButton onPress={() =>
                    props.route.params.islogin === 'login' ?
                        props.navigation.navigate('TypesOfUser') :
                        isRole === 'Shelter' ?
                            props.navigation.navigate('SignUpSecondScreen') :
                            props.navigation.navigate('ShelterOrNot')
                }>
                    <ArrowLeftSvg fill={COLORS.white} />
                </CloseButton>
            </ImageBackground>
            <View style={styles.container}>
                <View style={styles.card}>
                    <ScrollView contentContainerStyle={{ flexGrow: 1, }} bounces={false}>
                        <View style={styles.subContainer}>
                            <Text style={styles.titleNameText}>{t('chat')}</Text>
                            <Text style={styles.subText}>{t('chatSubDes')}</Text>
                            <Button borderRadius={50} title={t('scheduleNow')} fontSize={18} color={COLORS.white} height={50} marginTop={35} width={'70%'}
                                onPress={() => {
                                    (userData.is_active === false) ?
                                        Linking.openURL('https://calendly.com/vatsal-igeek') :
                                        isRole === 'Shelter' ?
                                            Linking.openURL('https://calendly.com/vatsal-igeek') :
                                            props.navigation.navigate('ChooseProfile')

                                }}
                            />
                            {userData.is_active === false &&
                                <View style={{
                                    width: '70%', alignSelf: 'center',
                                    marginVertical: 30,
                                    backgroundColor: COLORS.transparent,
                                    //  borderRadius: 5, borderWidth: 0.5
                                }}>
                                    <Text style={styles.desText}>{`Thanks for signing up! In order to verify your account, schedule a call with myrios representative.`}</Text>
                                </View>
                            }
                        </View>
                    </ScrollView>
                </View>
            </View>
        </>
    );
};

export default ScheduleNow;
