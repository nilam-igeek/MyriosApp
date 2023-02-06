import axios from 'axios';
import { loginData, loginSuccess, loginError, } from './ApiAction';
import APIS from '../../constants/index';

const loginApi = (data) => (dispatch) => {
  dispatch(loginData());
  return new Promise(() => {
  axios
      .post(`http://4204-49-36-91-14.ngrok.io/api/Donor/login`, data, {
         headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
       })
        .then((response) => {
          console.log("response of login api ====>",JSON.stringify(response.data));
        dispatch(loginSuccess(response.data));
      })
        .catch((error) => { 
        dispatch(loginError(error));
        console.log("error of login api==========>",error);
      });
  });
};
export default loginApi;

