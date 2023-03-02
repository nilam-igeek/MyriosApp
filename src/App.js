
import React, { useEffect, useState } from 'react';
import {
  StatusBar,
  View,
  Platform
} from 'react-native';
import { COLORS } from './common/style/Colors';
import Router from './navigation/appNavigator';
import { Provider, useDispatch } from 'react-redux';
import { store } from './redux/store';
import DeviceInfo from 'react-native-device-info';
import analytics from '@react-native-firebase/analytics';
import SplashScreen from "react-native-splash-screen";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loginApi } from './redux/actions/ApiActionCreator';
import { ROLE } from './constants/types';
const App = () => {

  const [id, setId] = useState('');
  const dispatch = useDispatch();
  const [initialRouteName, setInitialRouteName] = useState('GetStarted');
  const [isRole, setIsRole] = useState('');
  const isMaster = isRole === ROLE.MASTER
  const isDonor = isRole === ROLE.DONOR
  const isRefugee = isRole === ROLE.REFUGEE
  const isShelter = isRole === ROLE.SHELTER

  useEffect(() => {
    // onProductView();
    DeviceInfo.getUniqueId().then((uniqueId) => {
      setId(uniqueId)
    });
  }, [])

  // async function onProductView() {
  //   await analytics().logEvent('product_view', {
  //     id: '123456789',
  //     color: 'red',
  //     via: 'ProductCatalog',
  //   });
  // }

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000)
  }, []);

  // useEffect(() => {
  //   async function check() {
  //     var item = await AsyncStorage.getItem('userType');
  //     setIsRole(item)
  //   }
  //   check();
  // }, []);


  useEffect(() => {
    AsyncStorage.getItem("userType").then(value => {
      setIsRole(value)
    })

  })

  console.log("isRole111----->", isRole);
  const getAccessToken = async () => {
    const token = await AsyncStorage.getItem('token');
    const isPassword = await AsyncStorage.getItem('userPassword');
    const isEmail = await AsyncStorage.getItem('userEmail');

    if (token) {
      if (isDonor) {
        const body = {
          password: isPassword,
          email: isEmail
        };
        dispatch(loginApi(body));
        setInitialRouteName('WishLists');
      }
      else if (isRefugee) {
        const body = {
          password: isPassword,
          email: isEmail
        };
        dispatch(loginApi(body));
        setInitialRouteName('ShelterWishList')
      }
      else if (isShelter) {
        const body = {
          password: isPassword,
          email: isEmail
        };
        dispatch(loginApi(body));
        setInitialRouteName('ShelterWishList')
      }
      else if (isMaster) {
        const body = {
          password: isPassword,
          email: isEmail
        };
        dispatch(loginApi(body));
        setInitialRouteName('RefugeesList')
      }
    } else {
      setInitialRouteName('GetStarted')
    }
  };

  useEffect(() => {
    getAccessToken();
  }, [getAccessToken])



  return (
    // <Provider store={store}>
    <>
      <StatusBar
        barStyle={Platform.OS === 'ios' ? 'light-content' : 'dark-content'}
        backgroundColor={COLORS.transparent} />
      <View style={{ flex: 1 }}>
        <Router initialRoute={initialRouteName} />
      </View>
    </>

    // </Provider>
  );
}
export default App;

