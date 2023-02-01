import React,{useState,useEffect} from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from './styles';
import '../../../assets/i18n/i18n';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ROLE } from '../../constants/types';
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
            source={{ uri: 'https://images.statusfacebook.com/profile_pictures/kids-dp/kids-dp-101.jpg' }}>
            <View style={styles.blurView}>
                <Text style={styles.myriosTitleText}>{'MYRIOS'}</Text>
                <View style={styles.myriosContainer}>
                    <Text style={styles.myriosText}>{`${'Hi'}, ${isShelter ? 'Shelter Name': 'First Name'}`}</Text>
                    <Text style={styles.myriosSubText}>{'See My Wishlist'}</Text>
                    <Text style={styles.myriosSubText}>{'Upload Wishlist'}</Text>
                    <Text style={styles.myriosSubText}>{'Create Wishlist'}</Text>
                </View>
            </View>
        </ImageBackground>
    );
};

export default ShelterWishList;
