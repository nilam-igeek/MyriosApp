import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, ScrollView, Pressable, FlatList, Image } from 'react-native';
import { COLORS } from '../../common/style/Colors';
import { IMAGES } from '../../common/style/Images';
import Button from '../../components/core/Button';
import styles from './styles';
import CloseSvg from '../../common/svgs/CloseSvg';
import '../../../assets/i18n/i18n';
import { useTranslation } from 'react-i18next';
import { donorProfile,shelterProfile,refugeeProfile } from './ArrayList';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { USER } from '../../constants/types';
import CloseButton from '../../components/core/CloseButton';
const ChooseProfile = (props) => {

    const { t } = useTranslation();
 const [isType, setIsType] = useState('');
 
    const onClickProfile = (item) => {
        // console.log("item============>", item.profile);
    }

   useEffect(() => {
    async function check() {
        var item = await AsyncStorage.getItem('userType');
        setIsType(item)
    }
    check();
  }, [])

    return (
        <ImageBackground
            resizeMode='cover'
            style={{ flex: 1 }}
            source={{ uri: 'https://images.statusfacebook.com/profile_pictures/kids-dp/kids-dp-101.jpg' }}>
             <CloseButton onPress={() => props.navigation.goBack()}>
                <CloseSvg fill={COLORS.white} />
            </CloseButton>
            <View style={styles.container}>
                <View style={styles.card}>
                    <ScrollView contentContainerStyle={{ flexGrow: 1, }}>
                        <View style={styles.subContainer}>
                            <Text style={styles.profileText}>{t('Choose Your Profile Photo...')}</Text>
                            <Text style={styles.profileSubText}>{t('To protect your privacy we want you\n to select a profile picture that\n matches your personality!')}</Text>
                            <View style={styles.MainContainer}>
                                <FlatList
                                    data={isType=== USER.SHELTER ? shelterProfile: donorProfile}
                                    renderItem={({ item }) =>
                                        <Pressable onPress={()=> onClickProfile(item)} style={styles.GridViewBlockStyle}>
                                            <Image resizeMode='contain' source={item.profile} style={styles.profilePic} />
                                        </Pressable>}
                                    numColumns={3} />
                            </View>
                            <Button
                            title={t('Next')}
                            fontSize={18}
                            color={COLORS.white}
                            height={50}
                            marginTop={20}
                            width={'60%'}
                            onPress={() => { props.navigation.navigate('SignUpSecondScreen'); }} />
                        </View>
                    </ScrollView>
                </View>
            </View>
        </ImageBackground>
    );
};

export default ChooseProfile;
