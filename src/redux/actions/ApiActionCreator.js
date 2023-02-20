import axios from 'axios';
import ACTION_TYPES from './ActionTypes.js';
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
  registerData,
  registerSuccess,
  registerError,
  profileData,
  profileSuccess,
  profileError,
  addProfileData,
  addProfileSuccess,
  addProfileError,
  contactUsData,
  contactUsSuccess,
  contactUsError,
  wishlistData,
  wishlistSuccess,
  wishlistError
} from './ApiAction';
import Toast from 'react-native-simple-toast';

const url = "http://18.233.84.195/api/"

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
      if (response.data.success) {
         Toast.show(response.data.message);
        dispatch(loginSuccess(response.data));
        await AsyncStorage.setItem('token', response.data.data.token)
      } 
      })
    .catch((error) => {
      dispatch(loginError(error.response));
      if (!error.response.data.success) {
         Toast.show('Log in information not correct, please try again or sign up!');
      }
      return error
      });
  });
};

//======================== REGISTER ========================//
export const registerApi = (data) => async (dispatch) => {
  var role = await AsyncStorage.getItem('userType');
  dispatch(registerData());
  return new Promise(() => {
  axios
      .post(`${url}${role}/register`, data, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
       })
    .then(async (response) => {
      console.log("response.data====>",JSON.stringify(response));
       Toast.show(response.data.message);
          dispatch(registerSuccess(response.data));
      })
    .catch((error) => { 
      dispatch(registerError(error));
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
         Toast.show(response.data.message);
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
         Toast.show(response.data.message);
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
         Toast.show(response.data.message);
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
         Toast.show(response.data.message);
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
         Toast.show(response.data.message);
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
         Toast.show(response.data.message);
        dispatch(peopleSuccess(response.data));
      })
      .catch((error) => {
      dispatch(peopleError(error));
      });
    });
 };

//======================== SET_PROFILE ========================//
export const signUpDataOfUser = (data) => {
  return {
    type: ACTION_TYPES.PROFILE_SET_DATA,
    payload: data,
  };
};

//======================== PROFILE ========================//
export const updateProfileApi = (data) => async (dispatch) => {
  dispatch(profileData());
  return new Promise(() => {
  axios
      .post(`${url}update-profile`, data, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
       })
    .then(async (response) => {
          dispatch(profileSuccess(response.data));
      })
    .catch((error) => { 
      dispatch(profileError(error));
      return error
      });
  });
};

//======================== ADD PEOPLE ========================//
export const addPeopleApi = (data) => async (dispatch) => {
  var isToken = await AsyncStorage.getItem('token');
  dispatch(addProfileData());
  return new Promise(() => {
  axios
      .post(`${url}Refugee/add-people`, data, {
        headers: {
           'Authorization': `Bearer ${isToken}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
       })
    .then(async (response) => {
      Toast.show(response.data.message);
          dispatch(addProfileSuccess(response.data));
      })
    .catch((error) => { 
      dispatch(addProfileError(error));
      return error
      });
  });
};

//======================== CONTACT-US ========================//
export const contactUsApi = (data) => async (dispatch) => {
   var isToken = await AsyncStorage.getItem('token');
  dispatch(contactUsData());  
  return new Promise(() => {
  axios
      .post(`${url}contact-us`, data, {
        headers: {
            'Authorization': `Bearer ${isToken}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
       })
    .then(async (response) => {
      console.log("contactUsApi-------------->",response.data);
      Toast.show(response.data.message);
          dispatch(contactUsSuccess(response.data));
      })
    .catch((error) => { 
      dispatch(contactUsError(error));
      return error
      });
  });
};

//======================== WISHLISTS ========================//
export const wishListApi = (data) => async (dispatch) => {
  console.log("data=======>",data);
  var isToken = await AsyncStorage.getItem('token');
  dispatch(wishlistData());
  return new Promise(() => {
    axios
        .get(`${url}wishlists?${data.type}${data.country}${data.name}=${data.age}`, {
          headers: {'Authorization': `Bearer ${isToken}`}
      })
      .then((response) => {
        console.log("wishlistSuccess====response======>", JSON.stringify(response.data));
         Toast.show(response.data.message);
        dispatch(wishlistSuccess(response.data));
      })
      .catch((error) => {
      dispatch(wishlistError(error));
      });
    });
};