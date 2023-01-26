import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GetStarted from '../screens/GetStarted';
import Language from '../screens/Language/index';
import TypesOfUser from '../screens/TypesOfUser/index';
import Login from '../screens/Login/index';
import Signup from '../screens/SignUp/index';
import Welcome from '../screens/Welcome/index';
const Stack = createNativeStackNavigator();
const Router = () => {
 
return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        transparentCard={true}
        initialRouteName={'GetStarted'}>
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="Language" component={Language} />
      <Stack.Screen name="TypesOfUser" component={TypesOfUser} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
       <Stack.Screen name="Welcome" component={Welcome} />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
