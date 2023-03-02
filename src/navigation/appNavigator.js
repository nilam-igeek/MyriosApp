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
// import Chat from '../screens/Chat/index';
import ProfileOfRole from '../screens/Master/ProfileOfRole';
import DonorsList from '../screens/Master/DonorsList';
import ContactRequests from '../screens/Master/ContactRequestsList';
import SheltersList from '../screens/Master/SheltersList';
import RefugeesList from '../screens/Master/RefugeesList';
import SchedulingOfCalls from '../screens/Master/SchedulingOfCalls';
import Analytics from '../screens/Master/Analytics';
import AddPerson from '../screens/SideMenu/Helped/AddPerson';
import ScheduleNow from '../screens/SignUp/ScheduleNow';
import EnterShelterName from '../screens/SignUp/EnterShelterName';
import ShelterOrNot from '../screens/SignUp/ShelterOrNot';
import analytics from '@react-native-firebase/analytics';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RefugeeProfile from '../screens/SideMenu/Profile/RefugeeProfile';

const Stack = createNativeStackNavigator();
const DrawerStack = createDrawerNavigator();
const Router = (props) => {
  const routeNameRef = React.useRef();
  const navigationRef = React.useRef();
  const [isToken, setIsToken] = useState('');
  const [isTokenRole, setIsRole] = useState('');
  // const initialRouteName = isToken !== '' ? 'Welcome' : 'GetStarted'

  const getAccessToken = async () => {
    const isToken = await AsyncStorage.getItem('token');
    setIsToken(isToken);
  };


  useEffect(() => {
    AsyncStorage.getItem("userType").then(value => {
      setIsRole(value)
    })
  })

  useEffect(() => {
    getAccessToken();
  }, [getAccessToken])

  console.log("isToken--------------->", isToken);

  function MyDrawer() {
    return (
      <DrawerStack.Navigator
        initialRouteName={props.initialRoute}
        screenOptions={{
          drawerStyle: {
            backgroundColor: COLORS.seashell,
            width: '100%',
          },
          // swipeEnabled: false,
          headerShown: false,
        }}
        drawerContent={(props) => <CustomeDrawer {...props} />}>
        <DrawerStack.Screen options={{ swipeEnabled: false }} name="GetStarted" component={GetStarted} />
        <DrawerStack.Screen options={{ swipeEnabled: false }} name="Language" component={Language} />
        <DrawerStack.Screen options={{ swipeEnabled: false }} name="TypesOfUser" component={TypesOfUser} />
        <DrawerStack.Screen options={{ swipeEnabled: false }} name="Login" component={Login} />
        <DrawerStack.Screen options={{ swipeEnabled: false }} name="SignUpFirstScreen" component={SignUpFirstScreen} />
        <DrawerStack.Screen options={{ swipeEnabled: false }} name="SignUpSecondScreen" component={SignUpSecondScreen} />
        <DrawerStack.Screen options={{ swipeEnabled: false }} name="ChooseProfile" component={ChooseProfile} />
        <DrawerStack.Screen options={{ swipeEnabled: false }} name="ScheduleNow" component={ScheduleNow} />
        <DrawerStack.Screen options={{ swipeEnabled: false }} name="EnterShelterName" component={EnterShelterName} />
        <DrawerStack.Screen options={{ swipeEnabled: false }} name="ShelterOrNot" component={ShelterOrNot} />
        <DrawerStack.Screen options={{ swipeEnabled: false }} name="Welcome" component={Welcome} />
        <DrawerStack.Screen options={{ swipeEnabled: false }} name="HowTo" component={HowTo} />
        <DrawerStack.Screen options={{ swipeEnabled: false }} name="WishLists" component={WishLists} />
        <DrawerStack.Screen options={{ swipeEnabled: false }} name="ContactUs" component={ContactUs} />
        <DrawerStack.Screen options={{ swipeEnabled: false }} name="RefugeeProfile" component={RefugeeProfile} />
        <DrawerStack.Screen options={{ swipeEnabled: false }} name="Profile" component={Profile} />
        <DrawerStack.Screen options={{ swipeEnabled: false }} name="Helped" component={Helped} />
        <DrawerStack.Screen options={{ swipeEnabled: false }} name="ShelterWishList" component={ShelterWishList} />
        <DrawerStack.Screen options={{ swipeEnabled: false }} name="RefugeesList" component={RefugeesList} />
        <DrawerStack.Screen options={{ swipeEnabled: false }} name="DonorsList" component={DonorsList} />
        <DrawerStack.Screen options={{ swipeEnabled: false }} name="ContactRequests" component={ContactRequests} />
        <DrawerStack.Screen options={{ swipeEnabled: false }} name="SheltersList" component={SheltersList} />
        <DrawerStack.Screen options={{ swipeEnabled: false }} name="ProfileOfRole" component={ProfileOfRole} />
        {/* <DrawerStack.Screen options={{ swipeEnabled: false }} name="Chat" component={Chat} /> */}
        <DrawerStack.Screen options={{ swipeEnabled: false }} name="SchedulingOfCalls" component={SchedulingOfCalls} />
        <DrawerStack.Screen options={{ swipeEnabled: false }} name="Analytics" component={Analytics} />
        <DrawerStack.Screen options={{ swipeEnabled: false }} name="AddPerson" component={AddPerson} />
      </DrawerStack.Navigator>
    );
  }


  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          transparentCard={true}
          initialRouteName={props.initialRoute}>
          <Stack.Screen options={{ gestureEnabled: false }} name={props.initialRoute} component={MyDrawer} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Router;
