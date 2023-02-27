import React from 'react';
import { View, Text, ImageBackground, ScrollView } from 'react-native';
import { COLORS } from '../../common/style/Colors';
import Button from '../../components/core/Button';
import styles from './styles';
import '../../../assets/i18n/i18n';
import { useTranslation } from 'react-i18next';
import CloseButton from '../../components/core/CloseButton';
import { IMAGES } from '../../common/style/Images';
import ArrowLeftSvg from '../../common/svgs/ArrowLeftSvg';
import LanguagesModal from '../../components/core/LanguagesModal';
const Language = (props) => {

    const { t } = useTranslation();

    return (
        <>
            <ImageBackground
                resizeMode='cover'
                style={{ flex: 1 }}
                source={IMAGES.languageBg}>
                <CloseButton onPress={() => props.navigation.goBack()}>
                    <ArrowLeftSvg fill={COLORS.white} />
                </CloseButton>
            </ImageBackground>
            <View style={styles.container}>
                <View style={styles.card}>
                    <Text style={styles.titleText}>{t('chooselanguage')}</Text>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        nestedScrollEnabled={true}
                        contentContainerStyle={{ flexGrow: 1 }}
                        bounces={false}>
                        <View style={[styles.subContainer]}>
                            <Text style={styles.lanText}>{t('language')}</Text>
                            <LanguagesModal />
                        </View>
                        <View style={[styles.btnStyle]}>
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
