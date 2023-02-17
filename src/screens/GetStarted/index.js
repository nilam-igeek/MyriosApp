import React from 'react';
import { View, Text, ImageBackground, Pressable } from 'react-native';
import { COLORS } from '../../common/style/Colors';
import RightArrowSvg from '../../common/svgs/RightArrowSvg';
import Button from '../../components/core/Button';
import styles from './styles';
import '../../../assets/i18n/i18n';
import {useTranslation} from 'react-i18next';
import { IMAGES } from '../../common/style/Images';
const GetStarted = (props) => {
    const {t} = useTranslation();
    return (
        <ImageBackground
            resizeMode='cover'
            style={{ flex: 1 }}
            source={IMAGES.myriosBg}>
            <View style={styles.blurView}>
                <View style={styles.myriosContainer}>
                    <Pressable onPress={()=> {props.navigation.navigate('Language')}} style={styles.myriosSubContainer}>
                        <Text style={styles.myriosText}>{t('myrios')}</Text>
                        <RightArrowSvg fill={COLORS.white} marginRight={10} />
                    </Pressable>
                </View>
                <View style={styles.btnView}>
                    <Pressable
                        onPress={()=> {props.navigation.navigate('Language')}}
                        style={{
                        width: 130, alignItems: "center",
                        backgroundColor: COLORS.transparent, borderWidth: 1, borderColor: COLORS.white, borderRadius: 20
                    }}>
                        <Text style={{padding:10,color:COLORS.white,fontSize:14}}>{t('getStarted')}</Text>
                    </Pressable>
                    {/* <Button title={t('getStarted')}
                        onPress={()=> {props.navigation.navigate('Language')}}
                        borderWidth={1}
                        borderColor={COLORS.white}
                        bgColor={COLORS.transparent}
                        color={COLORS.white}
                        width={130}
                        height={35}
                        fontSize={15}/> */}
                </View>
            </View>
        </ImageBackground>
    );
};

export default GetStarted;
