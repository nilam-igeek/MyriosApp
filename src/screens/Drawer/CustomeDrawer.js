import React, { useState, useEffect } from 'react';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { COLORS } from '../../common/style/Colors';
import CloseSvg from '../../common/svgs/CloseSvg';
import { Pressable, Text } from 'react-native';
import styles from './styles';
import BaseStyle from '../../common/style/BaseStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ROLE } from '../../constants/types';
import { useDispatch, useSelector } from 'react-redux';
import '../../../assets/i18n/i18n';
import { useTranslation } from 'react-i18next';
// import { wishListApi } from '../../redux/actions/ApiActionCreator';

export const CustomeDrawer = (props) => {
  const dispatch = useDispatch();
  const [menu, setMenu] = useState(0);
  const [isRole, setIsRole] = useState('');
  const isRefugee = isRole === ROLE.REFUGEE
  const isDonor = isRole === ROLE.DONOR
  const isShelter = isRole === ROLE.SHELTER
  const { t } = useTranslation();

  useEffect(() => {
    async function check() {
      var item = await AsyncStorage.getItem('userType');
      setIsRole(item)
    }
    check();
  }, []);



  const Donor_Shelter = [
    { id: 1, title: t('howTo') },
    { id: 2, title: isShelter ? t('wishList') : t('explore') },
    { id: 3, title: t('profile') },
    { id: 4, title: isShelter ? t('people') : 'FAVORITE' },
    { id: 5, title: t('contact') },
  ]

  const Refugee = [
    { id: 1, title: t('howTo') },
    { id: 2, title: t('wishList') },
    { id: 3, title: t('profile') },
    { id: 4, title: t('contact') },
  ]

  const Master = [
    { id: 1, title: t('refugeeType') },
    { id: 2, title: t('shelterType') },
    { id: 3, title: t('donorType') },
    { id: 5, title: t('contactType') },
    { id: 6, title: t('analytics') },
    { id: 7, title: t('schedulingCalls') },
  ]

  const Data = (isShelter || isDonor) ? Donor_Shelter : isRefugee ? Refugee : Master
  const onClickMenu = (item, i) => {

    if (item.title === t('howTo')) {
      props.navigation.navigate('HowToo')
    }
    else if (item.title === t('wishList')) {
      props.navigation.navigate('ShelterWishList')
    }
    else if (item.title === t('explore')) {
      props.navigation.navigate('WishLists')
    }
    else if (item.title === t('profile')) {
      props.navigation.navigate('Profile')
    }
    else if (item.title === t('people')) {
      props.navigation.navigate('Helped')
    }
    else if (item.title === 'FAVORITE') {
      props.navigation.navigate('Helped')
    }
    else if (item.title === t('contact')) {
      props.navigation.navigate('ContactUs')
    }
    else if (item.title === t('refugeeType')) {
      props.navigation.navigate('RefugeesListt')
    }
    else if (item.title === t('shelterType')) {
      props.navigation.navigate('SheltersList')
    }
    else if (item.title === t('donorType')) {
      props.navigation.navigate('DonorsList')
    }
    else if (item.title === t('contactType')) {
      props.navigation.navigate('ContactRequests')
    }
    else if (item.title === t('analytics')) {
      props.navigation.navigate('Analytics')
    }
    else if (item.title === t('schedulingCalls')) {
      props.navigation.navigate('SchedulingOfCalls')

    }
  }



  return (
    <DrawerContentScrollView {...props}>
      <Pressable onPress={() => { props.navigation.closeDrawer() }}
        style={styles.closeIcon}>
        <CloseSvg fill={COLORS.black} />
      </Pressable>
      {Data.map((item, i) => {
        return (
          <Pressable
            onPress={() => { setMenu(i), onClickMenu(item) }}
            style={{
              backgroundColor: menu === i ? COLORS.black : COLORS.transparent,
              width: (BaseStyle.WIDTH / 100) * 100,
              alignSelf: 'center',
            }}>
            <Text key={i} style={[styles.menuText, { color: menu === i ? COLORS.white : COLORS.black, }]}>{item.title}</Text>
          </Pressable>
        )
      })}
    </DrawerContentScrollView>
  );
}
