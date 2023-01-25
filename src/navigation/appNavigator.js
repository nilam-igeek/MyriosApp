import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GetStarted from '../screens/GetStarted/GetStarted';
import Language from '../screens/Language';

const Stack = createNativeStackNavigator();
const Router = () => {
 
return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        transparentCard={true}
            initialRouteName={'GetStarted'}
        >
            <Stack.Screen name="GetStarted" component={GetStarted} />
             <Stack.Screen name="Language" component={Language} />
        {/* <Stack.Screen name="MapScreen" component={MapScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
