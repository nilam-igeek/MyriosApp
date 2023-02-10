
import React, { useEffect, useState } from 'react';
import {
  StatusBar,
  View,
  SafeAreaView,
  Platform
} from 'react-native';
import { COLORS } from './common/style/Colors';
import Router from './navigation/appNavigator';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import DeviceInfo from 'react-native-device-info';
import analytics from '@react-native-firebase/analytics';
const App = () => {
  const [id, setId] = useState('');
  useEffect(() => {
    DeviceInfo.getUniqueId().then((uniqueId) => {
      setId(uniqueId)
      // console.log("uniqueId=====>",uniqueId);
});
  }, [])
 
return (
  <>
      {/* <SafeAreaView style={{backgroundColor:COLORS.transparent,flex:1}}> */}
       <Provider store={store}>
       <StatusBar
         barStyle={Platform.OS === 'ios' ? 'light-content' :'dark-content'}
         backgroundColor={COLORS.transparent}/>
        <View style={{flex:1}}>
          <Router />
        </View>
        </Provider>
      {/* </SafeAreaView> */}
      </>
  );
}
export default App;

