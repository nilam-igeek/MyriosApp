import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GetStarted from '../screens/GetStarted';
import Language from '../screens/Language/index';
import TypesOfUser from '../screens/TypesOfUser/index';
import Login from '../screens/Login/index';
import SignUpFirstScreen from '../screens/SignUp/SignUpFirstScreen';
import SignUpSecondScreen from '../screens/SignUp/SignUpSecondScreen';
import ChooseProfile from '../screens/SignUp/ChooseProfile';
import Welcome from '../screens/Welcome/index';
import WishLists from '../screens/WishLists/index';
import ContactUs from '../screens/SideMenu/ContactUs/index';
import HowTo from '../screens/SideMenu/HowTo/index';
import Profile from '../screens/SideMenu/Profile/index';
import Helped from '../screens/SideMenu/Helped/index';
import Chat from '../screens/Chat/index';
const Stack = createNativeStackNavigator();
const Router = () => {
 
return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        transparentCard={true}
        initialRouteName={'Chat'}>
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="Language" component={Language} />
      <Stack.Screen name="TypesOfUser" component={TypesOfUser} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUpFirstScreen" component={SignUpFirstScreen} />
      <Stack.Screen name="SignUpSecondScreen" component={SignUpSecondScreen} />
      <Stack.Screen name="ChooseProfile" component={ChooseProfile} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="WishLists" component={WishLists} />
      <Stack.Screen name="ContactUs" component={ContactUs} />
      <Stack.Screen name="HowTo" component={HowTo} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Helped" component={Helped} />
      <Stack.Screen name="Chat" component={Chat} />
      
      
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
