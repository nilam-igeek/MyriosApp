import React, {useState} from 'react';
import { View, Text, ImageBackground, ScrollView,Pressable } from 'react-native';
import { COLORS } from '../../common/style/Colors';
import Button from '../../components/core/Button';
import styles from './styles';
import { SelectList } from 'react-native-dropdown-select-list'
import CloseSvg from '../../common/svgs/CloseSvg';
import { FONTS } from '../../common/style/Fonts';
import '../../../assets/i18n/i18n';
import {useTranslation} from 'react-i18next';
const Language = (props) => {

const {t, i18n} = useTranslation();
const [currentLanguage, setLanguage] = useState('en');

  
    const data = [
        { key: 'en', value: 'English'},
        { key: 'hi', value: 'Hindi' },
        { key: 'es', value: 'Spanish' },
        { key: 'uk', value: 'Ukrainian' },
    ]

    const changeLanguage = (key) => {
        i18n.changeLanguage(key)
        .then(() => setLanguage(key))
        .catch((e)=> console.log(e))
    }
    
return (
        <ImageBackground
            resizeMode='cover'
            style={{ flex: 1 }}
            source={{ uri: 'https://images.statusfacebook.com/profile_pictures/kids-dp/kids-dp-101.jpg' }}>
            <Pressable onPress={() => props.navigation.goBack()}>
            <CloseSvg marginLeft={25} marginTop={20} fill={COLORS.white} />
            </Pressable>
            <View style={styles.container}>
                <View style={styles.card}>
                    <ScrollView contentContainerStyle={{ flexGrow: 1, }}>
                        <View style={styles.subContainer}>
                            <Text style={styles.titleText}>{t('Choose your language!')}</Text>

                            <Text style={styles.lanText}>{t('Language')}</Text>
                        <SelectList
                            placeholder={t('Select Language')}
                            // fontFamily={FONTS.Poppins_Regular}
                                setSelected={changeLanguage}
                                data={data}
                                save="key"
                                boxStyles={{ borderRadius: 50, }}/>
                        </View>
                        <View style={styles.btnStyle}>
                        <Button title={t(`Let's go!`)} fontSize={18} color={COLORS.white} height={50}
                            onPress={() => { props.navigation.navigate('TypesOfUser') }} />
                        </View> 
                    </ScrollView>
                </View>
            </View>
        </ImageBackground>
    );
};

export default Language;
