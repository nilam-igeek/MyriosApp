import React, { useState, useEffect } from 'react';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { COLORS } from '../../common/style/Colors';
import CloseSvg from '../../common/svgs/CloseSvg';
import { LogBox, Pressable, Text } from 'react-native';
import styles from './styles';
import BaseStyle from '../../common/style/BaseStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ROLE } from '../../constants/types';
import { useDispatch, useSelector } from 'react-redux';
import '../../../assets/i18n/i18n';
import { useTranslation } from 'react-i18next';
import RNRestart from 'react-native-restart';
import { refugeesListApi } from '../../redux/actions/ApiActionCreator';
// import { wishListApi } from '../../redux/actions/ApiActionCreator';
import { useIsFocused } from '@react-navigation/native';
export const CustomeDrawer = (props) => {
  // console.log("propsCustomeDrawer======>", props);
  const dispatch = useDispatch();
  const [menu, setMenu] = useState(0);
  const [isRole, setIsRole] = useState('');
  const [isTure, setTrue] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    AsyncStorage.getItem("userType").then(value => {
      setIsRole(value);
    })
    // console.log("isRole_welcomepropsCustomeDrawer----->", isRole);
  })

  useEffect(() => {
    isRole === ROLE.MASTER && dispatch(refugeesListApi)
  }, [refugeesListApi])

  // const fetchData = () => {
  //   { isRole === ROLE.MASTER && dispatch(refugeesListApi) }
  // }


  const Donor = [
    { id: 1, title: t('howTo') },
    { id: 2, title: t('explore') },
    { id: 3, title: t('profile') },
    { id: 4, title: 'FAVORITE' },
    { id: 5, title: t('contact') },
  ]
  const Shelter = [
    { id: 1, title: t('howTo') },
    { id: 2, title: t('wishList') },
    { id: 3, title: t('profile') },
    { id: 4, title: t('people') },
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
    { id: 8, title: 'SIGN OUT' },
  ]

  const logout = async () => {
    try {
      // await AsyncStorage.removeItem('token');
      // await AsyncStorage.removeItem('userType');
      await AsyncStorage.clear();
      RNRestart.restart();
      return true;
    }
    catch (exception) {
      return false;
    }
  }

  //   useEffect(() => {
  //     fetchData();
  // }, []);

  // const fetchData = () => {
  //     dispatch(refugeesListApi)
  // }

  //   const onClickRefugee = () => {
  //     console.log("fdfgdfg");
  //     // dispatch(refugeesListApi());
  //   };

  // const Data = (isShelter || isDonor) ? Donor_Shelter : isRefugee ? Refugee : Master

  const onClickMenu = async (item, i) => {

    console.log("item----->", item);

    if (item.title === t('howTo')) {
      props.navigation.navigate('HowTo')
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
      props.navigation.navigate('RefugeesList')
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
    else if (item.title === 'SIGN OUT') {
      logout();
    }
  }
  console.log("isRole-custom drawer--->", isRole);


  return (
    <DrawerContentScrollView {...props}>
      <Pressable onPress={() => { props.navigation.closeDrawer() }}
        style={styles.closeIcon}>
        <CloseSvg fill={COLORS.black} />
      </Pressable>
      {
        isRole === 'Refugee' ?
          <>
            {Refugee.map((item, i) => {
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
          </> :

          isRole === 'Shelter' ?
            <>
              {Shelter.map((item, i) => {
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
            </> :

            isRole === 'Donor' ?
              <>
                {Donor.map((item, i) => {
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
              </> :
              <>
                {Master.map((item, i) => {
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
              </>
      }
    </DrawerContentScrollView>
  );
}
