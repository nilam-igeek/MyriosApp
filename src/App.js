
import React, { useEffect, useState } from 'react';
import {
  StatusBar,
  View,
  Platform
} from 'react-native';
import { COLORS } from './common/style/Colors';
import Router from './navigation/appNavigator';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import DeviceInfo from 'react-native-device-info';
import analytics from '@react-native-firebase/analytics';

const App = () => {
  const [id, setId] = useState('');
  useEffect(() => {
    onProductView();
    DeviceInfo.getUniqueId().then((uniqueId) => {
      setId(uniqueId)
    });
  }, [])

  async function onProductView() {
    await analytics().logEvent('product_view', {
      id: '123456789',
      color: 'red',
      via: 'ProductCatalog',
    });
  }


  return (
    <Provider store={store}>
      <StatusBar
        barStyle={Platform.OS === 'ios' ? 'light-content' : 'dark-content'}
        backgroundColor={COLORS.transparent} />
      <View style={{ flex: 1 }}>
        <Router />
      </View>
    </Provider>
  );
}
export default App;

