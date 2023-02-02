import React, { useState,useEffect } from 'react';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { COLORS } from '../../common/style/Colors';
import CloseSvg from '../../common/svgs/CloseSvg';
import { Pressable, Text } from 'react-native';
import styles from './styles';
import CloseButton from '../../components/core/CloseButton';
import BaseStyle from '../../common/style/BaseStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ROLE } from '../../constants/types';

export const CustomeDrawer = (props) => {
  const [menu, setMenu] = useState(0);
  const [isRole, setIsRole] = useState('');
  const isRefugee = isRole === ROLE.REFUGEE
  const isDonor = isRole === ROLE.DONOR
  const isShelter = isRole === ROLE.SHELTER

    useEffect(() => {
        async function check() {
            var item = await AsyncStorage.getItem('userType');
            setIsRole(item)
        }
        check();
    }, []);


  const Donor_Shelter = [
    { id: 1, title: 'HOW TO' },
    { id: 2, title: isShelter ? 'WISHLIST' : 'EXPLORE' },
    { id: 3, title: 'PROFILE' },
    { id: 4, title: isShelter ? 'PEOPLE' : 'HELPED' },
    { id: 5, title: 'CONTACT' },
  ]

  const Refugee = [
    { id: 1, title: 'HOW TO' },
    { id: 2, title: 'WISHLIST' },
    { id: 3, title: 'PROFILE' },
    { id: 4, title: 'CONTACT' },
  ]

  const Master = [
    { id: 1, title: 'REFUGEES' },
    { id: 2, title: 'SHELTERS' },
    { id: 3, title: 'DONORS' },
    { id: 5, title: 'CONTACT REQUESTS' },
    { id: 6, title: 'ANALYTICS' },
    { id: 7, title: 'SCHEDULING OF CALLS' },
  ]

  const Data =  (isShelter || isDonor) ? Donor_Shelter : isRefugee ? Refugee : Master
  const onClickMenu = (item, i) => {
    console.log("item=====>",item);

 if (item.title === "HOW TO") {
      props.navigation.navigate('HowToo')
    }
    else if(item.title === "WISHLIST") {
      props.navigation.navigate('ShelterWishList')
 }
     else if(item.title === "EXPLORE") {
      props.navigation.navigate('WishLists')
     }
    else if(item.title === "PROFILE") {
      props.navigation.navigate('Profile')
     }
    else if(item.title === "PEOPLE") {
      props.navigation.navigate('Helped')
 }
    else if(item.title === "HELPED") {
      props.navigation.navigate('Helped')
     }
    else if(item.title === "CONTACT") {
      props.navigation.navigate('ContactUs')
    }
    else if (item.title === "REFUGEES") {
      props.navigation.navigate('RefugeesListt')
    }
    else if (item.title === "SHELTERS") {
      props.navigation.navigate('SheltersList')
    }
    else if (item.title === "DONORS") {
      props.navigation.navigate('DonorsList')
    }
    else if (item.title === "CONTACT REQUESTS") {
      props.navigation.navigate('ContactRequests')
    }
    else if (item.title === "ANALYTICS") {
    }
 else if (item.title === "SCHEDULING OF CALLS") {
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
