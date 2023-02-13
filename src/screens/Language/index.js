import React, { useState } from 'react';
import { View, Text, ImageBackground, ScrollView } from 'react-native';
import { COLORS } from '../../common/style/Colors';
import Button from '../../components/core/Button';
import styles from './styles';
import CloseSvg from '../../common/svgs/CloseSvg';
import '../../../assets/i18n/i18n';
import { useTranslation } from 'react-i18next';
import CloseButton from '../../components/core/CloseButton';
import DropDownPicker from 'react-native-dropdown-picker';
const Language = (props) => {

    const { t, i18n } = useTranslation();
    const changeLanguage = (key) => {
        i18n.changeLanguage(key.value)
            .catch((e) => console.log(e))
    }
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'English', value: 'en' },
        { label: 'Hindi', value: 'hi' },
        { label: 'Spanish', value: 'es' },
        { label: 'Ukrainian', value: 'uk' },
    ]);

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
                    <ScrollView contentContainerStyle={{ flexGrow: 1, }} bounces={false}>
                        <View style={[styles.subContainer, { zIndex: 1 }]}>
                            <Text style={styles.titleText}>{t('Choose your language!')}</Text>
                            <Text style={styles.lanText}>{t('Language')}</Text>
                            <DropDownPicker
                                style={styles.dropDownPicker}
                                listMode={'FLATLIST'}
                                placeholder={t('Select Language')}
                                open={open}
                                value={value}
                                items={items}
                                setOpen={setOpen}
                                setValue={setValue}
                                setItems={setItems}
                                dropDownDirection={'BOTTOM'}
                                dropDownContainerStyle={styles.dropDownContainerStyle}
                                onSelectItem={(item)=> {changeLanguage(item)}}/>
                        </View>
                        <View style={[styles.btnStyle, { zIndex: 0 }]}>
                            <Button title={t(`Let's go!`)}
                                fontSize={18}
                                color={COLORS.white}
                                height={50}
                                width={'60%'}
                                onPress={() => { props.navigation.navigate('TypesOfUser') }} />
                        </View>
                    </ScrollView>
                </View>
            </View>
        </ImageBackground>
    );
};

export default Language;
