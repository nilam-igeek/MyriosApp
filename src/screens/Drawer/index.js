


// import React, { useState, useEffect } from 'react';
// import { View, Text, StatusBar, FlatList, Modal, Alert, Pressable } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { ROLE } from '../../constants/types';
// import { COLORS } from '../../common/style/Colors';
// import CloseButton from '../../components/core/CloseButton';
// import CloseSvg from '../../common/svgs/CloseSvg';
// import BaseStyle from '../../common/style/BaseStyle';
// import { FONTS } from '../../common/style/Fonts';
// import { Donor, Shelter, Refugee, Master } from './ArrayList';
// import { useNavigation } from '@react-navigation/native';
// import { createDrawerNavigator, DrawerContentScrollView,
//   DrawerItemList,
//   DrawerItem, } from '@react-navigation/drawer';
// function CustomDrawerContent(props) {




//     return (
// <DrawerContentScrollView {...props}>
    
//       {/* <DrawerItemList {...props} /> */}
//       <Pressable onPress={() => {props.navigation.closeDrawer()}}
//                 style={{
//                   width: 50,
//                   height: 50,
//                   marginLeft: 20,
//                   marginTop: 20,
//                   marginBottom: 50,
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                 }}
//             >
//                 <CloseSvg fill={COLORS.black} />
//             </Pressable>
    
//       <DrawerItem
//         labelStyle={{ paddingLeft: 28,
//         paddingVertical: 20,
//         fontSize: 18,
//           fontFamily: FONTS.Poppins_SemiBold,
//         color:COLORS.black}}
//         label="HOW TO"
//         onPress={() => { }}
//       />
//        <DrawerItem
//         label="EXPLORE"
//        onPress={() => { }}
//       />
//        <DrawerItem
//         label="PROFILE"
//        onPress={() => { }}
//       />
//         <DrawerItem
//         label="PEOPLE"
//        onPress={() => { }}
//       />
//        <DrawerItem
//         label="CONTACT"
//        onPress={() => { }}
//       />
//       {/* <DrawerItem
//         label="Close drawer"
//         onPress={() => props.navigation.closeDrawer()}
//       />
//       <DrawerItem
//         label="Toggle drawer"
//         onPress={() => props.navigation.toggleDrawer()}
//       /> */}
//     </DrawerContentScrollView>

//     );
// };

// export default CustomDrawerContent;
