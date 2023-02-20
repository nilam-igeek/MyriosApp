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
import { IMAGES } from '../../common/style/Images';
import ArrowRightSvg from '../../common/svgs/ArrowRightSvg';
import ArrowLeftSvg from '../../common/svgs/ArrowLeftSvg';
// import RNRestart from 'react-native-restart';
const Language = (props) => {

    const { t, i18n } = useTranslation();
    const changeLanguage = (key) => {
        i18n.changeLanguage(key.value)
            .catch((e) => console.log(e))
        //   RNRestart.restart();
    }
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: t('English'), value: 'en' },
        { label: t('Mandarin'), value: 'zh' },
        { label: t('Hindi'), value: 'hi' },
        { label: t('Spanish'), value: 'es' },
        { label: t('French'), value: 'fr' },
        { label: t('Bengali'), value: 'bn' },
        { label: t('MSArabic'), value: 'msa' },
        { label: t('Farsi'), value: 'fa' },
        { label: t('Russian'), value: 'ru' },
        { label: t('Portuguese'), value: 'pt' },
        { label: t('Indonesian'), value: 'id' },
        { label: t('German'), value: 'de' },
        { label: t('Japanese'), value: 'ja' },
        { label: t('Nigerian'), value: 'ng' },
        { label: t('Turkish'), value: 'tr' },
        { label: t('Cantonese'), value: 'yue' },
        { label: t('Vietnamese'), value: 'vi' },
        { label: t('Korean'), value: 'ko' },
        { label: t('Belarusian'), value: 'be' },
        { label: t('Bulgarian'), value: 'bg' },
        { label: t('Polish'), value: 'pl' },
        { label: t('Ukrainian'), value: 'uk' },
        { label: t('Croatian'), value: 'hr' },
        { label: t('Czech'), value: 'cs' },
        { label: t('Danish'), value: 'da' },
        { label: t('Dutch'), value: 'nl' },
        { label: t('Hawaiian'), value: 'haw' },
        { label: t('Hebrew'), value: 'he' },
        { label: t('Irish'), value: 'ga' },
        { label: t('Italian'), value: 'it' },
        { label: t('Romanian'), value: 'ro' },
        { label: t('Serbian'), value: 'sr' },
        { label: t('Swedish'), value: 'sv' },
        { label: t('Urdu'), value: 'ur' },
        { label: t('Punjabi'), value: 'pa' },
        { label: t('Telugu'), value: 'te' },
        { label: t('Marathi'), value: 'mr' },
    ]);

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
                    <Text style={styles.titleText}>{t('chooselanguage')}</Text>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ flexGrow: 1 }}
                        bounces={false}>
                        <View style={[styles.subContainer,
                            // { zIndex: 1 }
                        ]}>
                            <Text style={styles.lanText}>{t('language')}</Text>
                            <DropDownPicker
                                style={styles.dropDownPicker}
                                listMode='MODAL'
                                placeholder={t('selectLan')}
                                open={open}
                                value={value}
                                items={items}
                                setOpen={setOpen}
                                setValue={setValue}
                                setItems={setItems}
                                modalAnimationType={'none'}
                                // dropDownDirection={'BOTTOM'}
                                dropDownContainerStyle={styles.dropDownContainerStyle}
                                onSelectItem={(item) => { changeLanguage(item) }}
                                modalContentContainerStyle={{
                                    backgroundColor:COLORS.transparent,
                            //   backgroundColor: 'rgba(240, 240, 240,0.6)',
                                // marginVertical: 30,
                                //     marginHorizontal: 30,
                                //     height: 700,
                                // width:300
                                }}
                                modalTitleStyle={{
                                    fontWeight: 'normal',
                                      backgroundColor:COLORS.transparent,
                                    // backgroundColor:'red'
                                }}
                                modalTitle="Select an item"
                            />
                        </View>
                        <View style={[styles.btnStyle,
                            // { zIndex: 0 }
                        ]}>
                            <Button title={t('go')}
                                fontSize={18}
                                color={COLORS.white}
                                height={50}
                                width={'60%'}
                                onPress={() => { props.navigation.navigate('TypesOfUser') }} />
                        </View>
                    </ScrollView>
                </View>
            </View>

        </>
    );
};

export default Language;
