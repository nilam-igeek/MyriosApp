import React from 'react';
import { ImageBackground, View, Text } from 'react-native';
import '../../../assets/i18n/i18n';
import { useTranslation } from 'react-i18next';
import { COLORS } from '../../common/style/Colors';
import Button from '../../components/core/Button';
import styles from './styles';
import { IMAGES } from '../../common/style/Images';
const Welcome = (props) => {

    const { t } = useTranslation();

    return (
        <ImageBackground
            resizeMode='cover'
            style={{ flex: 1 }}
            source={IMAGES.welcomeBg}>
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    <Text style={styles.welcomeText}>{t('welcome')}</Text>
                    <Text style={styles.subTitleText}>{t('welcomeSubDes')}</Text>
                    <Button
                        width={'100%'}
                        title={t('visit')}
                        bgColor={COLORS.white}
                        color={COLORS.black}
                        borderRadius={10}
                        fontSize={16} />
                    <Button
                        width={'100%'}
                        title={t('skipNow')}
                        bgColor={COLORS.black}
                        color={COLORS.white}
                        borderRadius={10}
                        marginTop={10}
                        fontSize={16}
                        onPress={() => {props.navigation.navigate('HowTo')}}
                    />
                </View>
            </View>
        </ImageBackground>
    );
};

export default Welcome;
