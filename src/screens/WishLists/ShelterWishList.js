import React,{useState,useEffect} from 'react';
import { View, Text, ImageBackground, StatusBar,Platform } from 'react-native';
import styles from './styles';
import '../../../assets/i18n/i18n';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ROLE } from '../../constants/types';
import { IMAGES } from '../../common/style/Images';
import CloseButton from '../../components/core/CloseButton';
import CloseSvg from '../../common/svgs/CloseSvg';
import { COLORS } from '../../common/style/Colors';
const ShelterWishList = (props) => {
    const { t } = useTranslation();
    const [isRole, setIsRole] = useState('');
    const isShelter = isRole === ROLE.SHELTER
    
    useEffect(() => {
        async function check() {
            var item = await AsyncStorage.getItem('userType');
            setIsRole(item)
        }
        check();
    }, []);

    return (
        <ImageBackground
            resizeMode='cover'
            style={{ flex: 1 }}
            source={IMAGES.wishlistBg}>
        <StatusBar
          barStyle={Platform.OS === 'ios' ? 'light-content' : 'dark-content'}
          backgroundColor={COLORS.transparent} />
            <View style={styles.blurView}>
                  <CloseButton onPress={() => props.navigation.goBack()}>
                <CloseSvg fill={COLORS.white} />
                </CloseButton>
                {/* <Text style={styles.myriosTitleText}>{t('MYRIOS')}</Text> */}
                <View style={styles.myriosContainer}>
                    <Text style={styles.myriosText}>{`${t('hi')} ${isShelter ? 'Shelter Name': 'First Name'}`}</Text>
                    <Text style={styles.myriosSubText}>{t('seeWishList')}</Text>
                    <Text style={[styles.myriosSubText,{marginVertical:10}]}>{t('uploadWishList')}</Text>
                    <Text style={styles.myriosSubText}>{t('createWishList')}</Text>
                </View>
                </View>
        </ImageBackground>
    );
};

export default ShelterWishList;
