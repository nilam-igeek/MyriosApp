
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Router from './navigation/appNavigator';
import Button from './components/core/Button';
import Input from './components/core/InputField';

const App = () => {
return (
    <SafeAreaView style={{backgroundColor:'white',flex:1}}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'white'}/>
        <View style={{flex:1}}>
          <Router />
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
