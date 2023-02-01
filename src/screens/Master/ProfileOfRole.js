import React, { useState,useEffect } from 'react';
import { View, Text, StatusBar, Image, FlatList, Pressable } from 'react-native';
import styles from './styles';
import '../../../assets/i18n/i18n';
import { IMAGES } from '../../common/style/Images';
import { useTranslation } from 'react-i18next';
import { COLORS } from '../../common/style/Colors';
import Header from '../../components/core/Header';
const ProfileOfRole = (props) => {

    const { t } = useTranslation();
   
return (
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.seashell} />
            <Header title={'Myrios'} onPress={() => {props.navigation.toggleDrawer()}} />
        <View style={styles.subProContainer}>
            <Image resizeMode='contain' style={styles.roleOfProfile} source={IMAGES.donor1} />
            <Text style={styles.userTitleText}>{`John, France`}</Text>
            <Text style={[styles.commonText,{marginTop:20}]}>{`DESC/ ABOUT`}</Text>
             <Text style={styles.commonText}>{`Time of request submitted`}</Text>
             <Text style={styles.commonText}>{`Date of request submitted`}</Text>
             <Text style={styles.commonText}>{`Email:`}</Text>
            <Text style={styles.commonText}>{`Request:`}</Text>
            <Text style={styles.userTitleSubText}>{`RESPONSE`}</Text>
             <Text style={[styles.userTitleSubText,{textAlign:'right'}]}>{`SEND`}</Text>
            </View>
        </View>
    );
};

export default ProfileOfRole;
