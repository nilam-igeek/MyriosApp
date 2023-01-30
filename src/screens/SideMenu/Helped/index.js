import React, { useState,useEffect } from 'react';
import { View, Text, StatusBar, Image, FlatList } from 'react-native';

import Button from '../../../components/core/Button';
import styles from './styles';
import '../../../../assets/i18n/i18n';
import { IMAGES } from '../../../common/style/Images';
import { useTranslation } from 'react-i18next';
import { COLORS } from '../../../common/style/Colors';
import Header from '../../../components/core/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { USER } from '../../../constants/types';
const Helped = (props) => {

    const { t } = useTranslation();
 const [isType, setIsType] = useState('');
    const list = [
        { id: 1, name: 'Kvitkas', profile: IMAGES.donor1 },
        { id: 1, name: 'Ola', profile: IMAGES.donor1 },
        { id: 1, name: 'Sophie', profile: IMAGES.donor1 },
    ]

      const listOfShelter = [
        { id: 1, name: 'Kvitkas',gender:'Girl',age:'6', profile: IMAGES.donor1 },
        { id: 1, name: 'Ola',gender:'Mom',age:'20', profile: IMAGES.donor1 },
        { id: 1, name: 'Sophie', gender:'Boy',age:'1',profile: IMAGES.donor1 },
    ]

  useEffect(() => {
    async function check() {
        var item = await AsyncStorage.getItem('userType');
        setIsType(item)
    }
    check();
  }, [])

    return (
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.seashell} />
            <Header title={'Myrios'} onPress={() => { }} />

            <View style={{flex:1, justifyContent: 'center', alignItems: "center" }}>
                <Text style={styles.titleText}>{isType === USER.SHELTER ?'PEOPLE':'HELPED'}</Text>
                <Text style={styles.subText}>{isType === USER.SHELTER ?
                    'Here you can see and upload all the refugees in your shelter who are using Myrios in order to verify them!' :
                    'Here you can see all the people you have helped'}</Text>
                <View style={{ flex: 1 }}>
                    <FlatList
                        data={isType === USER.SHELTER ? listOfShelter : list}
                        renderItem={({ item }) =>
                            <View style={styles.itemCard}>
                                <Image
                                    resizeMode='cover'
                                    source={item.profile}
                                    style={styles.profileStyle} />
                                <Text style={styles.userName}>{item.name}, {item.gender}, {item.age} Years</Text>
                            </View>}
                    />
                </View>

                 <Button
                    borderRadius={10}
                    bgColor={COLORS.black}
                    title={(isType === USER.SHELTER ? 'ADD A PERSON':'SEE MORE WISHLIST')}
                    fontSize={18}
                    color={COLORS.white}
                    height={50}
                    marginBottom={30}
                    width={(BaseStyle.WIDTH / 100) * 80}
                    onPress={() => { }}
                />



            </View>
        </View>
    );
};

export default Helped;
