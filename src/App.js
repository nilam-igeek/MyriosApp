
import React from 'react';
import {
  StatusBar,
  View,
  SafeAreaView,
  Platform
} from 'react-native';
import { COLORS } from './common/style/Colors';
import Router from './navigation/appNavigator';

const App = () => {
  return (
  <>
    {/* <SafeAreaView style={{backgroundColor:COLORS.transparent,flex:1}}> */}
      <StatusBar
         barStyle={Platform.OS === 'ios' ? 'light-content' :'dark-content'}
         backgroundColor={COLORS.transparent}/>
        <View style={{flex:1}}>
          <Router />
        </View>
      {/* </SafeAreaView> */}
      </>
  );
}
export default App;

