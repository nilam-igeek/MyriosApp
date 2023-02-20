import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, ScrollView, Pressable, FlatList, Image, TouchableOpacity } from 'react-native';
import { COLORS } from '../../common/style/Colors';
import { IMAGES } from '../../common/style/Images';
import Button from '../../components/core/Button';
import styles from './styles';
import CloseSvg from '../../common/svgs/CloseSvg';
import '../../../assets/i18n/i18n';
import { useTranslation } from 'react-i18next';
import { donorProfile, shelterProfile, refugeeProfile } from './ArrayList';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ROLE } from '../../constants/types';
import CloseButton from '../../components/core/CloseButton';
import { useDispatch, useSelector } from 'react-redux';
import { signUpDataOfUser } from '../../redux/actions/ApiActionCreator';
import ArrowLeftSvg from '../../common/svgs/ArrowLeftSvg';
const ChooseProfile = (props) => {

    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [roleOfProfile,setRoleOfProfile] = useState('')
    const onClickProfile = (item, index) => {
        const data = isRefugee ? refugeeProfile : isShelter ? shelterProfile : donorProfile
        
        if (item.id === data[index].id) {
            setRoleOfProfile(item.id)
        }
        //  dispatch(signUpDataOfUser(item.profile));
        // console.log("item============>", item.profile);
    }

    const [isRole, setIsRole] = useState('');
    const isRefugee = isRole === ROLE.REFUGEE
    const isShelter = isRole === ROLE.SHELTER
    useEffect(() => {
        async function check() {
            var item = await AsyncStorage.getItem('userType');
            setIsRole(item)
        }
        check();
    }, []);

    return (
        <>
            <ImageBackground
                resizeMode='cover'
                style={{ flex: 1 }}
                source={IMAGES.languageBg}>
                <CloseButton onPress={() => props.navigation.goBack()}>
                    <ArrowLeftSvg fill={COLORS.white}/>
                </CloseButton>
            </ImageBackground>
            <View style={styles.container}>
                <View style={styles.card}>
                    <Text style={styles.profileText}>{t('choosePhoto')}</Text>
                    <ScrollView showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ flexGrow: 1 }}
                        bounces={false}>
                        <View style={styles.subContainer}>
                            <Text style={styles.profileSubText}>{t('chooseSubDes')}</Text>
                            <View style={styles.MainContainer}>
                                <FlatList
                                    key={'list'}
                                    data={isRefugee ? refugeeProfile : isShelter ? shelterProfile : donorProfile}
                                    extraData={isRefugee ? refugeeProfile : isShelter ? shelterProfile : donorProfile}
                                    keyExtractor={item => item.id}
                                    renderItem={({ item,index }) =>
                                        <Pressable onPress={() => onClickProfile(item,index)}
                                            style={[styles.GridViewBlockStyle, {
                                                 borderWidth:roleOfProfile === index ? 1.5 : 0.5,
                                                borderColor:roleOfProfile=== index ? COLORS.blue: COLORS.grey,
                                            }]}>
                                            <Image resizeMode='contain' source={item.profile} style={styles.profilePic} />
                                        </Pressable>}
                                    numColumns={3} />
                            </View>
                            <Button
                                title={t('next')}
                                fontSize={18}
                                color={COLORS.white}
                                height={50}
                                marginBottom={30}
                                marginTop={20}
                                width={'60%'}
                                onPress={() => {
                                    // props.navigation.navigate('SignUpSecondScreen');
                                    props.navigation.goBack();
                                }} />
                        </View>
                    </ScrollView>
                </View>
            </View>

        </>
    );
};

export default ChooseProfile;
