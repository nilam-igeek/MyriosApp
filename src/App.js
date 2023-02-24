
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
  const [isToken, setIsToken] = useState('');
  const dispatch = useDispatch();
  const [initialRouteName, setInitialRouteName] = useState('GetStarted');
  const [isRole, setIsRole] = useState('');
  const isMaster = isRole === ROLE.MASTER
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

  useEffect(() => {
    async function check() {
      var item = await AsyncStorage.getItem('userType');
      setIsRole(item)
    }
    check();
  }, []);



  const getAccessToken = async () => {
    const token = await AsyncStorage.getItem('token');
    const isPassword = await AsyncStorage.getItem('userPassword');
    const isEmail = await AsyncStorage.getItem('userEmail');
    console.log("isPassword", isPassword);
    console.log("isEmail", isEmail);
    setIsToken(token)
    if (token) {

      if (isMaster) {
        setInitialRouteName('RefugeesList')
      } else {
        setInitialRouteName('Welcome')
        var body = {
          password: isPassword,
          email: isEmail
        };
        dispatch(loginApi(body));
      }
    } else {
      setInitialRouteName('GetStarted')
    }
    await AsyncStorage.setItem('token', token)
    console.log("isToken--111->", isToken);
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

