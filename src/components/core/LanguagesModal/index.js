import * as React from 'react';
import { View, Text, Pressable, ScrollView, Modal } from 'react-native';
import styles from './styles';
import { useTranslation } from 'react-i18next';
import '../../../../assets/i18n/i18n';
import { COLORS } from '../../../common/style/Colors';
import { FONTS } from '../../../common/style/Fonts';
import CloseSvg from '../../../common/svgs/CloseSvg';

const LanguagesModal = () => {

    const [showList, setShowList] = React.useState(false);
    const [isLanguage, setLanguage] = React.useState('English');
    const { i18n } = useTranslation();

    const [items, setItems] = React.useState([
        { selected: false, label: ('Bengali'), value: 'bn' },
        { selected: false, label: ('Belarusian'), value: 'be' },
        { selected: false, label: ('Bulgarian'), value: 'bg' },
        { selected: false, label: ('Croatian'), value: 'hr' },
        { selected: false, label: ('Czech'), value: 'cs' },
        { selected: false, label: ('Danish'), value: 'da' },
        { selected: false, label: ('Dutch'), value: 'nl' },
        { selected: true, label: ('English'), value: 'en' },
        { selected: false, label: ('French'), value: 'fr' },
        { selected: false, label: ('Farsi'), value: 'fa' },
        { selected: false, label: ('German'), value: 'de' },
        { selected: false, label: ('Hindi'), value: 'hi' },
        { selected: false, label: ('Hawaiian'), value: 'haw' },
        { selected: false, label: ('Hebrew'), value: 'he' },
        { selected: false, label: ('Indonesian'), value: 'id' },
        { selected: false, label: ('Irish'), value: 'ga' },
        { selected: false, label: ('Italian'), value: 'it' },
        { selected: false, label: ('Japanese'), value: 'ja' },
        { selected: false, label: ('Korean'), value: 'ko' },
        { selected: false, label: ('Mandarin'), value: 'zh' },
        { selected: false, label: ('MSArabic'), value: 'msa' },
        { selected: false, label: ('Marathi'), value: 'mr' },
        { selected: false, label: ('Portuguese'), value: 'pt' },
        { selected: false, label: ('Polish'), value: 'pl' },
        { selected: false, label: ('Punjabi'), value: 'pa' },
        { selected: false, label: ('Romanian'), value: 'ro' },
        { selected: false, label: ('Russian'), value: 'ru' },
        { selected: false, label: ('Spanish'), value: 'es' },
        { selected: false, label: ('Serbian'), value: 'sr' },
        { selected: false, label: ('Swedish'), value: 'sv' },
        { selected: false, label: ('Telugu'), value: 'te' },
        { selected: false, label: ('Turkish'), value: 'tr' },
        { selected: false, label: ('Ukrainian'), value: 'uk' },
        { selected: false, label: ('Urdu'), value: 'ur' },
        { selected: false, label: ('Vietnamese'), value: 'vi' },
    ])

    const changeLanguage = (key, i) => {
        const temp = items; temp.map((item, index) => {
            if (index === i) {
                if (item.selected === true) {
                    item.selected = false;
                } else {
                    item.selected = true; setShowList(false);
                    i18n.changeLanguage(key.value)
                    setLanguage(key.label);
                }
            } else {
                item.selected = false;
            }
        });
        let temp2 = []; temp.map((item) => {
            temp2.push(item)
        })
        setItems(temp2);
    }

    return (
        <>
            <Pressable onPress={() => setShowList(!showList)} style={styles.mainContainer}>
                <Text style={styles.titleText}>{isLanguage}</Text>
            </Pressable>
            <Modal
                animationType='fade'
                transparent={true}
                visible={showList}
                onRequestClose={() => { setShowList(!showList) }}>
                <View style={styles.blurView}>
                    <View style={styles.blurSubView}>
                        <Pressable onPress={() => { setShowList(false) }} style={styles.closeBtn}>
                            <CloseSvg fill={COLORS.white} width={10} height={10} />
                        </Pressable>
                        <Text style={styles.countryText}>{'Selecte Language'}</Text>
                        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                            {items.map((item, i) => {
                                return (
                                    <Pressable key={i} style={{ flex: 1 }} onPress={() => { changeLanguage(item, i) }}>
                                        <Text style={{
                                            fontSize: 16,
                                            padding: 12,
                                            color: item.selected ? COLORS.black : COLORS.grey,
                                            fontFamily: item.selected ? FONTS.Poppins_SemiBold : FONTS.Poppins_Regular
                                        }} >{item.label}</Text>
                                    </Pressable>
                                )
                            })}
                        </ScrollView>
                    </View>
                </View>
            </Modal>
        </>
    )
}
export default LanguagesModal;
