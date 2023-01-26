import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { COLORS } from '../../common/style/Colors';
import RightArrowSvg from '../../common/svgs/RightArrowSvg';
import Button from '../../components/core/Button';
import styles from './styles';
import '../../../assets/i18n/i18n';
import {useTranslation} from 'react-i18next';
const GetStarted = (props) => {
    const {t} = useTranslation();
    return (
        <ImageBackground
            resizeMode='cover'
            style={{ flex: 1 }}
            source={{ uri: 'https://images.statusfacebook.com/profile_pictures/kids-dp/kids-dp-101.jpg' }}>
            <View style={styles.blurView}>
                <View style={styles.myriosContainer}>
                    <View style={styles.myriosSubContainer}>
                        <Text style={styles.myriosText}>Myrios</Text>
                        <RightArrowSvg fill={COLORS.white} marginRight={10} />
                    </View>
                </View>
                <View style={styles.btnView}>
                    <Button title={t('Get Started')}
                        onPress={()=> {props.navigation.navigate('Language')}}
                        borderWidth={1}
                        borderColor={COLORS.white}
                        bgColor={COLORS.transparent}
                        color={COLORS.white}
                        width={120}
                        height={30}
                    />
                </View>
            </View>
        </ImageBackground>
    );
};

export default GetStarted;
