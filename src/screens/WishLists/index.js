import React, { useState } from 'react';
import { View, Text, StatusBar, FlatList, Modal, Alert, Pressable } from 'react-native';
import '../../../assets/i18n/i18n';
import { useTranslation } from 'react-i18next';
import { COLORS } from '../../common/style/Colors';
import styles from './styles';
import Header from '../../components/core/Header';
import WishListCard from '../../components/core/WishListCard';
import { IMAGES } from '../../common/style/Images';
import HeartSvg from '../../common/svgs/HeartSvg';
import CloseButton from '../../components/core/CloseButton';
import CloseSvg from '../../common/svgs/CloseSvg';
import BaseStyle from '../../common/style/BaseStyle';
import { FONTS } from '../../common/style/Fonts';
const WishLists = (props) => {

    const { t } = useTranslation();
    const [isFev, setIsFev] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [menu, setMenu] = useState(0);


    const wishListData = [
        { id: 1, image: IMAGES.wishList1, name: 'Kvitkas', gender: 'Girl', age: '6', country: 'Ukraine' },
        { id: 2, image: IMAGES.wishList2, name: 'Stefan', gender: 'Girl', age: '10', country: 'Ukraine' },
        { id: 3, image: IMAGES.wishList1, name: 'Zosia', gender: 'Girl', age: '2', country: 'Ukraine' },
        { id: 4, image: IMAGES.wishList2, name: 'Marta', gender: 'Mom', age: '32', country: 'Ukraine' },
        { id: 5, image: IMAGES.wishList1, name: 'Zosia', gender: 'Girl', age: '2', country: 'Ukraine' },
        { id: 6, image: IMAGES.wishList2, name: 'Marta', gender: 'Mom', age: '32', country: 'Ukraine' }
    ]

    const menuData = [
        { id: 1, title: 'HOW TO' },
        { id: 2, title: 'EXPLORE' },
        { id: 3, title: 'PROFILE' },
        { id: 4, title: 'HELPED' },
        { id: 5, title: 'CONTACT' },

    ]

    return (
        <>
            <View style={styles.container}>
                <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.seashell} />
                <Header title={'Myrios'} onPress={() => { setShowModal(!showModal) }} />
                <Text style={styles.wishListText}>{'WISHLISTS'}</Text>
                <View style={styles.sortByContainer}>
                    <Text style={styles.sortByText}>{'Sort By'}</Text>
                    <Text style={styles.sortByText}>{' >'}</Text>
                </View>
                <View style={styles.listContainer}>
                    <FlatList
                        data={wishListData}
                        renderItem={({ item }) =>
                            <WishListCard
                                onClick={() => { setIsFev(!isFev) }}
                                name={item.name}
                                gender={item.gender}
                                age={item.age}
                                country={item.country}
                                onPress={() => { }}
                                source={item.image} >
                                <HeartSvg HeartSvg fill={isFev ? COLORS.black : COLORS.white} stroke={COLORS.black} />
                            </WishListCard>}
                        numColumns={2} />
                </View>

                <Modal
                    animationType="fade"
                    transparent={false}
                    visible={showModal}
                    onRequestClose={() => { setShowModal(!showModal) }}>

                    <View style={{ flex: 1, backgroundColor: COLORS.seashell }}>
                        <CloseButton onPress={() => { setShowModal(false) }}>
                            <CloseSvg fill={COLORS.black} />
                        </CloseButton>
                        <View style={{ marginTop: 150 }}>
                            {menuData.map((item, i) => {
                                return (
                                    <Pressable
                                        onPress={() => { setMenu(i) }}
                                        style={{
                                            backgroundColor: menu === i ? COLORS.black : COLORS.transparent,
                                            width: (BaseStyle.WIDTH / 100) * 100,
                                            alignSelf: 'center',
                                        }}>
                                        <Text key={i} style={[styles.menuText, { color: menu === i ? COLORS.white : COLORS.black, }]}>{item.title}</Text>
                                    </Pressable>
                                )
                            })}
                        </View>
                    </View>
                </Modal>
            </View>
        </>

    );
};

export default WishLists;
