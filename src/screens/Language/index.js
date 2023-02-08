import React, { useState } from 'react';
import { View, Text, ImageBackground, ScrollView, Platform,Pressable,  LogBox,TouchableOpacity, StatusBar, SafeAreaView } from 'react-native';
import { COLORS } from '../../common/style/Colors';
import Button from '../../components/core/Button';
import styles from './styles';
import { SelectList } from 'react-native-dropdown-select-list'
import CloseSvg from '../../common/svgs/CloseSvg';
import { FONTS } from '../../common/style/Fonts';
import '../../../assets/i18n/i18n';
import { useTranslation } from 'react-i18next';
import CloseButton from '../../components/core/CloseButton';
const Language = (props) => {
// console.log("props.navigation----->",props.navigation.goBack());
    const { t, i18n } = useTranslation();
    const [currentLanguage, setLanguage] = useState('en');


    const dataLanguage = [
        { key: 'en', value: 'English' },
        { key: 'hi', value: 'Hindi' },
        { key: 'es', value: 'Spanish' },
        { key: 'uk', value: 'Ukrainian' },
    ]

    const changeLanguage = (key) => {
        i18n.changeLanguage(key)
            .then(() => setLanguage(key))
            .catch((e) => console.log(e))
    }

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
                        <View style={[styles.subContainer, { position: 'absolute', zIndex: 1 }]}>
                            <Text style={styles.titleText}>{t('Choose your language!')}</Text>
                            <Text style={styles.lanText}>{t('Language')}</Text>
                            <SelectList
                                placeholder={t('Select Language')}
                                dropdownStyles={{ width: '100%', zIndex: 2, backgroundColor: COLORS.white }}
                                // fontFamily={FONTS.Poppins_Regular}
                                setSelected={changeLanguage}
                                data={dataLanguage}
                                save="key"
                                boxStyles={{ borderRadius: 50, }} />
                        </View>
                        <View style={[styles.btnStyle, { zIndex: 0 }]}>
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
