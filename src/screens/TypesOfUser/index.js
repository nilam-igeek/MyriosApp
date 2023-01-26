import React from 'react';
import { View, Text, ImageBackground, ScrollView,Pressable } from 'react-native';
import { COLORS } from '../../common/style/Colors';
import Button from '../../components/core/Button';
import styles from './styles';
import CloseSvg from '../../common/svgs/CloseSvg';
import '../../../assets/i18n/i18n';
import {useTranslation} from 'react-i18next';
const TypesOfUser = (props) => {

const {t} = useTranslation();
   
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
                            <Text style={styles.titleText}>{t(`I'm a...`)}</Text>
                      <Button title={t('Refugee')} bgColor={COLORS.lemonchiffon} fontSize={18} color={COLORS.black} height={50}  width={'100%'} />
                        <Button title={t(`Shelter`)} bgColor={COLORS.lemonchiffon} fontSize={18} color={COLORS.black} height={50} marginTop={20} width={'100%'}/>
                        <Button title={t(`Donor`)} bgColor={COLORS.lemonchiffon} fontSize={18} color={COLORS.black} height={50} marginTop={20} width={'100%'}/>
                        <Button title={t(`Let's go!`)} fontSize={18} color={COLORS.white} height={50} marginTop={35} width={'80%'}
                        onPress={() => { props.navigation.navigate('Login') }}
                        />
                        </View> 
                    </ScrollView>
                </View>
            </View>
        </ImageBackground>
    );
};

export default TypesOfUser;
