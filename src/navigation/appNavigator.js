import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { COLORS } from '../common/style/Colors';
import { CustomeDrawer } from '../screens/Drawer/CustomeDrawer';
import GetStarted from '../screens/GetStarted';
import Welcome from '../screens/Welcome/index';
import Language from '../screens/Language/index';
import TypesOfUser from '../screens/TypesOfUser/index';
import Login from '../screens/Login/index';
import SignUpFirstScreen from '../screens/SignUp/SignUpFirstScreen';
import SignUpSecondScreen from '../screens/SignUp/SignUpSecondScreen';
import ChooseProfile from '../screens/SignUp/ChooseProfile';
import WishLists from '../screens/WishLists/index';
import ShelterWishList from '../screens/WishLists/ShelterWishList';
import ContactUs from '../screens/SideMenu/ContactUs/index';
import HowTo from '../screens/SideMenu/HowTo/index';
import Profile from '../screens/SideMenu/Profile/index';
import Helped from '../screens/SideMenu/Helped/index';
import Chat from '../screens/Chat/index';
import ProfileOfRole from '../screens/Master/ProfileOfRole';
import DonorsList from '../screens/Master/DonorsList';
import ContactRequests from '../screens/Master/ContactRequestsList';
import SheltersList from '../screens/Master/SheltersList';
import RefugeesList from '../screens/Master/RefugeesList';
import SchedulingOfCalls from '../screens/Master/SchedulingOfCalls';
import Analytics from '../screens/Master/Analytics';
import AddPerson from '../screens/SideMenu/Helped/AddPerson';
import analytics from '@react-native-firebase/analytics';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Router = (props) => {
  const routeNameRef = React.useRef();
  const navigationRef = React.useRef();
  const [isToken, setIsToken] = useState('');
  const initialRouteName = isToken !== '' ? 'Welcome' : 'GetStarted'

  const getAccessToken = async () => {
    const isToken = await AsyncStorage.getItem('token');
    setIsToken(isToken)

  };

  useEffect(() => {
    getAccessToken();
  }, [getAccessToken])

  function MyDrawer() {
    return (
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            backgroundColor: COLORS.seashell,
            width: '100%',
          },
          headerShown: false,
        }}
        drawerContent={(props) => <CustomeDrawer {...props} />}>
        <Drawer.Screen name="HowToo" component={HowTo} />
        <Drawer.Screen name="WishList" component={MyNewDrawer} />
        <Drawer.Screen name="ContactUs" component={ContactUs} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Helped" component={Helped} />
        <Drawer.Screen name="ShelterWishList" component={ShelterWishList} />
        <Drawer.Screen name="AddPerson" component={AddPerson} />
      </Drawer.Navigator>
    );
  }
  function MyNewDrawer() {
    return (
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            backgroundColor: COLORS.seashell,
            width: '100%',
          },
          headerShown: false,
        }}
        drawerContent={(props) => <CustomeDrawer {...props} />}>
        <Drawer.Screen name="WishLists" component={WishLists} />
        <Drawer.Screen name="HowToo" component={HowTo} />
        <Drawer.Screen name="ContactUs" component={ContactUs} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Helped" component={Helped} />
        <Drawer.Screen name="ShelterWishList" component={ShelterWishList} />
        <Drawer.Screen name="AddPerson" component={AddPerson} />
      </Drawer.Navigator>
    );
  }

  function MyMasterDrawer() {
    return (
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            backgroundColor: COLORS.seashell,
            width: '100%',
          },
          headerShown: false,
        }}
        drawerContent={(props) => <CustomeDrawer {...props} />}>
        <Drawer.Screen name="RefugeesListt" component={RefugeesList} />
        <Drawer.Screen name="DonorsList" component={DonorsList} />
        <Drawer.Screen name="ContactRequests" component={ContactRequests} />
        <Drawer.Screen name="SheltersList" component={SheltersList} />
        <Drawer.Screen name="ProfileOfRole" component={ProfileOfRole} />
        <Drawer.Screen name="SchedulingOfCalls" component={SchedulingOfCalls} />
        <Drawer.Screen name="Analytics" component={Analytics} />
      </Drawer.Navigator>
    );
  }

  return (
    <>
      {props.initialRoute === 'GetStarted'
        ?
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{ headerShown: false }}
            transparentCard={true}
            initialRouteName={'GetStarted'}>
            <Stack.Screen options={{ gestureEnabled: false }} name="GetStarted" component={GetStarted} />
            <Stack.Screen options={{ gestureEnabled: false }} name="Language" component={Language} />
            <Stack.Screen options={{ gestureEnabled: false }} name="TypesOfUser" component={TypesOfUser} />
            <Stack.Screen options={{ gestureEnabled: false }} name="Login" component={Login} />
            <Stack.Screen options={{ gestureEnabled: false }} name="SignUpFirstScreen" component={SignUpFirstScreen} />
            <Stack.Screen options={{ gestureEnabled: false }} name="SignUpSecondScreen" component={SignUpSecondScreen} />
            <Stack.Screen options={{ gestureEnabled: false }} name="ChooseProfile" component={ChooseProfile} />
            <Stack.Screen options={{ gestureEnabled: false }} name="Welcome" component={Welcome} />
            <Stack.Screen options={{ gestureEnabled: false }} name="HowTo" component={MyDrawer} />
            <Stack.Screen options={{ gestureEnabled: false }} name="WishLists" component={MyNewDrawer} />
            <Stack.Screen options={{ gestureEnabled: false }} name="ContactUs" component={ContactUs} />
            <Stack.Screen options={{ gestureEnabled: false }} name="Profile" component={Profile} />
            <Stack.Screen options={{ gestureEnabled: false }} name="Helped" component={Helped} />
            <Stack.Screen options={{ gestureEnabled: false }} name="ShelterWishList" component={ShelterWishList} />
            <Stack.Screen options={{ gestureEnabled: false }} name="RefugeesList" component={MyMasterDrawer} />
            <Stack.Screen options={{ gestureEnabled: false }} name="DonorsList" component={DonorsList} />
            <Stack.Screen options={{ gestureEnabled: false }} name="ContactRequests" component={ContactRequests} />
            <Stack.Screen options={{ gestureEnabled: false }} name="SheltersList" component={SheltersList} />
            <Stack.Screen options={{ gestureEnabled: false }} name="ProfileOfRole" component={ProfileOfRole} />
            <Stack.Screen options={{ gestureEnabled: false }} name="Chat" component={Chat} />
            <Stack.Screen options={{ gestureEnabled: false }} name="SchedulingOfCalls" component={SchedulingOfCalls} />
            <Stack.Screen options={{ gestureEnabled: false }} name="Analytics" component={Analytics} />
            <Stack.Screen options={{ gestureEnabled: false }} name="AddPerson" component={AddPerson} />
          </Stack.Navigator>
        </NavigationContainer> :
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{ headerShown: false }}
            transparentCard={true}
            initialRouteName={'Welcome'}>
            <Stack.Screen options={{ gestureEnabled: false }} name="Welcome" component={Welcome} />
            <Stack.Screen options={{ gestureEnabled: false }} name="HowTo" component={MyDrawer} />
            <Stack.Screen options={{ gestureEnabled: false }} name="WishLists" component={MyNewDrawer} />
            <Stack.Screen options={{ gestureEnabled: false }} name="ContactUs" component={ContactUs} />
            <Stack.Screen options={{ gestureEnabled: false }} name="Profile" component={Profile} />
            <Stack.Screen options={{ gestureEnabled: false }} name="Helped" component={Helped} />
            <Stack.Screen options={{ gestureEnabled: false }} name="ShelterWishList" component={ShelterWishList} />
            <Stack.Screen options={{ gestureEnabled: false }} name="RefugeesList" component={MyMasterDrawer} />
            <Stack.Screen options={{ gestureEnabled: false }} name="DonorsList" component={DonorsList} />
            <Stack.Screen options={{ gestureEnabled: false }} name="ContactRequests" component={ContactRequests} />
            <Stack.Screen options={{ gestureEnabled: false }} name="SheltersList" component={SheltersList} />
            <Stack.Screen options={{ gestureEnabled: false }} name="ProfileOfRole" component={ProfileOfRole} />
            <Stack.Screen options={{ gestureEnabled: false }} name="Chat" component={Chat} />
            <Stack.Screen options={{ gestureEnabled: false }} name="SchedulingOfCalls" component={SchedulingOfCalls} />
            <Stack.Screen options={{ gestureEnabled: false }} name="Analytics" component={Analytics} />
            <Stack.Screen options={{ gestureEnabled: false }} name="AddPerson" component={AddPerson} />
          </Stack.Navigator>
        </NavigationContainer>
      }
    </>

  );
};

export default Router;
