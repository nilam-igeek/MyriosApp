import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  loginData,
  loginSuccess,
  loginError,
  refugeesData,
  refugeesSuccess,
  refugeesError,
  donorData,
  donorSuccess,
  donorError,
  sheltersData,
  sheltersSuccess,
  sheltersError,
  requestsData,
  requestsSuccess,
  requestsError,
  helpedData,
  helpedSuccess,
  helpedError,
  peopleData,
  peopleSuccess,
  peopleError,
  meetingData,
  meetingSuccess,
  meetingError
} from './ApiAction';


const url = "https://7112-2405-201-2014-3157-ed23-5c5a-72a8-b043.ngrok.io/api/"

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
  return new Promise(() => {
    axios
        .get(`${url}refugees`, {
          headers: {'Authorization': `Bearer ${isToken}`}
      })
      .then((response) => {
        dispatch(refugeesSuccess(response.data));
      })
      .catch((error) => {
      dispatch(refugeesError(error));
      });
    });
};

export const donorsListApi = async (dispatch) => {
  var isToken = await AsyncStorage.getItem('token');
  dispatch(donorData());
  return new Promise(() => {
    axios
        .get(`${url}donors`, {
          headers: {'Authorization': `Bearer ${isToken}`}
      })
      .then((response) => {
        dispatch(donorSuccess(response.data));
      })
      .catch((error) => {
      dispatch(donorError(error));
      });
    });
};

export const sheltersListApi = async (dispatch) => {
  var isToken = await AsyncStorage.getItem('token');
  dispatch(sheltersData());
  return new Promise(() => {
    axios
        .get(`${url}shelters`, {
          headers: {'Authorization': `Bearer ${isToken}`}
      })
      .then((response) => {
        dispatch(sheltersSuccess(response.data));
      })
      .catch((error) => {
      dispatch(sheltersError(error));
      });
    });
};

export const requestsListApi = async (dispatch) => {
  var isToken = await AsyncStorage.getItem('token');
  dispatch(requestsData());
  return new Promise(() => {
    axios
        .get(`${url}shelters`, {
          headers: {'Authorization': `Bearer ${isToken}`}
      })
      .then((response) => {
        dispatch(requestsSuccess(response.data));
      })
      .catch((error) => {
      dispatch(requestsError(error));
      });
    });
};

 //======================== HELPED ========================//
 export const helpedApi = async (dispatch) => {
  var isToken = await AsyncStorage.getItem('token');
  dispatch(helpedData());
  return new Promise(() => {
    axios
        .get(`${url}helped`, {
          headers: {'Authorization': `Bearer ${isToken}`}
      })
      .then((response) => {
        dispatch(helpedSuccess(response.data));
      })
      .catch((error) => {
      dispatch(helpedError(error));
      });
    });
 };

  //======================== PEOPLE ========================//
 export const peopleApi = async (dispatch) => {
  var isToken = await AsyncStorage.getItem('token');
  dispatch(peopleData());
  return new Promise(() => {
    axios
        .get(`${url}people`, {
          headers: {'Authorization': `Bearer ${isToken}`}
      })
      .then((response) => {
        dispatch(peopleSuccess(response.data));
      })
      .catch((error) => {
      dispatch(peopleError(error));
      });
    });
 };

  //======================== MEETING ========================//
 export const meetingsApi = async (dispatch) => {
  var isToken = await AsyncStorage.getItem('token');
  dispatch(meetingData());
  return new Promise(() => {
    axios
        .get(`${url}meetings`, {
          headers: {'Authorization': `Bearer ${isToken}`}
      })
      .then((response) => {
        dispatch(meetingSuccess(response.data));
      })
      .catch((error) => {
      dispatch(meetingError(error));
      });
    });
};