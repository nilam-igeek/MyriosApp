import axios from 'axios';
import { loginData, loginSuccess, loginError, } from './ApiAction';
import AsyncStorage from '@react-native-async-storage/async-storage';
const url = "http://9b31-2405-201-2014-3157-a1ff-4b9a-4f17-3151.ngrok.io/api/"

export const loginApi = (data) => async (dispatch) => {
  var role = await AsyncStorage.getItem('userType');
  dispatch(loginData());
  return new Promise(() => {
  axios
      .post(`${url}${role}/login`, data, {
         headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
       })
        .then((response) => {
          dispatch(loginSuccess(response.data));
      })
    .catch((error) => { 
      dispatch(loginError(error));
      return error
      });
  });
};



