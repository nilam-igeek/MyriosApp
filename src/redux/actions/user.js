import {loginApi} from '../../middlewares/index';
import {createAsyncThunk} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const login = createAsyncThunk('users/login', async code => {
  const res = await loginApi(code);
  await AsyncStorage.setItem('loginToken', res.token);
  await AsyncStorage.setItem('user', JSON.stringify(res.data));
  return res;
});

export const logout = createAsyncThunk('users/logout', async () => {
  await AsyncStorage.removeItem('getRoutedataOffline');
  await AsyncStorage.removeItem('loginToken');
  const res = await AsyncStorage.removeItem('user');
  return res;
});
