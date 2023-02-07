import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { COLORS } from '../common/style/Colors';
import { CustomeDrawer } from '../screens/Drawer/CustomeDrawer';
import GetStarted from '../screens/GetStarted';
import Language from '../screens/Language/index';
import TypesOfUser from '../screens/TypesOfUser/index';
import Login from '../screens/Login/index';
import SignUpFirstScreen from '../screens/SignUp/SignUpFirstScreen';
import SignUpSecondScreen from '../screens/SignUp/SignUpSecondScreen';
import ChooseProfile from '../screens/SignUp/ChooseProfile';
import Welcome from '../screens/Welcome/index';
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
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Router = () => {

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
        <Drawer.Screen name="WishLists" component={WishLists} />
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
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        transparentCard={true}
        initialRouteName={'GetStarted'}>
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="Language" component={Language} />
        <Stack.Screen name="TypesOfUser" component={TypesOfUser} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUpFirstScreen" component={SignUpFirstScreen} />
        <Stack.Screen name="SignUpSecondScreen" component={SignUpSecondScreen} />
        <Stack.Screen name="ChooseProfile" component={ChooseProfile} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="HowTo" component={MyDrawer} />
        <Stack.Screen name="WishLists" component={WishLists} />
        <Stack.Screen name="ContactUs" component={ContactUs} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Helped" component={Helped} />
        <Stack.Screen name="ShelterWishList" component={ShelterWishList} />
        <Stack.Screen name="RefugeesList" component={MyMasterDrawer} />
        <Stack.Screen name="DonorsList" component={DonorsList} />
        <Stack.Screen name="ContactRequests" component={ContactRequests} />
        <Stack.Screen name="SheltersList" component={SheltersList} />
        <Stack.Screen name="ProfileOfRole" component={ProfileOfRole} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="SchedulingOfCalls" component={SchedulingOfCalls} />
        <Stack.Screen name="Analytics" component={Analytics} />
        <Stack.Screen name="AddPerson" component={AddPerson} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
