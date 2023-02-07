import axios from 'axios';
import { loginData, loginSuccess, loginError,refugeesData,refugeesSuccess, refugeesError} from './ApiAction';
import AsyncStorage from '@react-native-async-storage/async-storage';
const url = "http://9b31-2405-201-2014-3157-a1ff-4b9a-4f17-3151.ngrok.io/api/"

//======================== LOGIN =======================//
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
    .then(async (response) => {
          dispatch(loginSuccess(response.data));
          await AsyncStorage.setItem('token', response.data.data.token)
      })
    .catch((error) => { 
      dispatch(loginError(error));
      return error
      });
  });
};

//======================== MASTER =======================//
export const refugeesListApi = async (dispatch) => {
  var isToken = await AsyncStorage.getItem('token');
  dispatch(refugeesData());
  // return new Promise(() => {
    axios
      .get(`http://9b31-2405-201-2014-3157-a1ff-4b9a-4f17-3151.ngrok.io/api/refugees`, {headers: {'Authorization': `Bearer ${isToken}`}})
      .then((response) => {
        console.log("response--of refugee list-->",JSON.stringify(response.data));
        dispatch(refugeesSuccess(response.data));
      })
      .catch((error) => {
        dispatch(refugeesError(error));
        console.log(error);
      });
// });
};

