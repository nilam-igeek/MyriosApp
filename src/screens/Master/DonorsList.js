import React from 'react';
import { View, Text, StatusBar, Image, FlatList, Pressable } from 'react-native';
import styles from './styles';
import '../../../assets/i18n/i18n';
import { useTranslation } from 'react-i18next';
import { COLORS } from '../../common/style/Colors';
import Header from '../../components/core/Header';
import { donorList } from './ArrayList'
const DonorsList = (props) => {


   

    const { t } = useTranslation();

    return (
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.seashell} />
            <Header title={'Myrios'} onPress={() => {props.navigation.toggleDrawer()  }} />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
                <Text style={styles.titleText}>{`${'MASTER LIST OF\n'} ${'DONORS'}`}</Text>
                <View style={{ flex: 1 }}>
                    <FlatList
                        data={donorList}
                        extraData={donorList}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) =>
                            <Pressable style={[styles.itemCard, {}]} onPress={() => {props.navigation.navigate('ProfileOfRole')}}>
                                <Image
                                    resizeMode='cover'
                                    source={item.profile}
                                    style={styles.profileStyle} />
                                <Text style={{ marginLeft: 20 }} >
                                    <Text style={styles.userName}>{item.name}</Text>
                                    {item.country && <Text style={styles.userName}>{', '}{item.country}</Text>}
                                </Text>
                            </Pressable>} />
                </View>
            </View>
        </View>
    );
};

export default DonorsList;
