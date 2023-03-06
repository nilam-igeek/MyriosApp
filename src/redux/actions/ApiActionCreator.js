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
  wishlistError,
  imagesListData,
  imagesListSuccess,
  imagesListError,
  wishlistAddData,
  wishlistAddSuccess,
  wishlistAddError,
  wishlistRemoveData,
  wishlistRemoveSuccess,
  wishlistRemoveError,
  userStatusData,
  userStatusSuccess,
  userStatusError,
  editProfileData,
  editProfileSuccess,
  editProfileError
} from './ApiAction';
import Toast from 'react-native-simple-toast';

const url = "http://18.233.84.195/api/"

//======================== LOGIN =======================//
export const loginApi = (data) => async (dispatch) => {
  console.log("data");
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
        console.log("loginApi=response=====>", response.data.data);
        console.log("response.data.data.token-login---->", response.data.data.token);
        if (response.data.success) {
          // Toast.show(response.data.message);
          dispatch(loginSuccess(response.data.data.user));
          // dispatch(loginToken(response.data.data.token));

          // await AsyncStorage.setItem('userType', role);
          await AsyncStorage.setItem('userPassword', data.password);
          await AsyncStorage.setItem('userEmail', data.email);
          if (response && response.data && response.data.data.token) {
            // dispatch(loginToken(response.data.data.token));
            await AsyncStorage.setItem('token', response.data.data.token)
          }
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
  console.log("registerApi111====>", data);
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
        console.log("registerApi=response=====>", JSON.stringify(response.data));
        // console.log("response.data.data.token rig----->", response.data.data.token);
        if (response.data.success) {
          dispatch(registerSuccess(response.data.data.user));
          dispatch(registerToken(response.data.data.token));
          // console.log("response.data.data.token rig----->", response.data.data.token);
          // if (response && response.data && response.data.data.token) {
          //   dispatch(registerToken(response.data.data.toke));
          //   // await AsyncStorage.setItem('token', response.data.data.token)
          // }
          // if (response && response.data && response.data.data.token && role === 'Donor') {
          //   await AsyncStorage.setItem('token', response.data.data.token)
          // }
        }
      })
      .catch((error) => {
        // console.log("rroor222211=111ddada1==qeqw111=>", JSON.stringify(error.response.data.data.email[0]));
        console.log("rroor222211=111ddada1==qeqw221111=>", JSON.stringify(error.response));
        dispatch(registerError(error.response));
        // if (error.response.data.data.email) {
        //   Toast.show(JSON.stringify(error.response.data.data.email[0]), );
        // }
        // if (!error.response.data.success) {
        //   Toast.show(`Thanks for signing up! In order to finalize your account, you need to your shelter to register you as a Myrios verified refugee on their 'People' page, and if your shelter does not user Myrios, register your account with 'not currently staying at shelter', so you can schedule a 5-minute call with a Myrios representative to get verified!`)
        // }
        return error
      });
  });
};


//======================== MASTER =======================//
export const refugeesListApi = (data) => async (dispatch) => {
  var isToken = await AsyncStorage.getItem('token');
  dispatch(refugeesData());
  return new Promise(() => {
    axios
      .get(`http://18.233.84.195/api/refugees`, {
        headers: { 'Authorization': `Bearer ${isToken}` }
      })
      .then((response) => {
        if (response.data.success) {
          // Toast.show(response.data.message);
          dispatch(refugeesSuccess(response.data));
        }
      })
      .catch((error) => {
        dispatch(refugeesError(error));
        // if (!error.response.data.success) {
        //   Toast.show('Refugees data is not found');
        // }
        return error
      });
  });
};
export const sheltersListApi = (data) => async (dispatch) => {
  var isToken = await AsyncStorage.getItem('token');
  dispatch(sheltersData());
  return new Promise(() => {
    axios
      .get(`http://18.233.84.195/api/shelters`, {
        headers: { 'Authorization': `Bearer ${isToken}` }
      })
      .then((response) => {
        if (response.data.success) {
          // Toast.show(response.data.message);
          dispatch(sheltersSuccess(response.data));
        }
      })
      .catch((error) => {
        dispatch(sheltersError(error));
        // if (!error.response.data.success) {
        //   Toast.show('Refugees data is not found');
        // }
        return error
      });
  });
};


export const donorsListApi = async (dispatch) => {
  var isToken = await AsyncStorage.getItem('token');
  dispatch(donorData());
  return new Promise(() => {
    axios
      .get(`${url}donors`, {
        headers: { 'Authorization': `Bearer ${isToken}` }
      })
      .then((response) => {
        // Toast.show(response.data.message);
        dispatch(donorSuccess(response.data));
      })
      .catch((error) => {
        dispatch(donorError(error));
      });
  });
};


export const requestsListApi = async (dispatch) => {
  var isToken = await AsyncStorage.getItem('token');
  dispatch(requestsData());
  return new Promise(() => {
    axios
      .get(`http://18.233.84.195/api/requests`, {
        headers: { 'Authorization': `Bearer ${isToken}` }
      })
      .then((response) => {
        // Toast.show(response.data.message);
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
        headers: { 'Authorization': `Bearer ${isToken}` }
      })
      .then((response) => {
        // Toast.show(response.data.message);
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
        headers: { 'Authorization': `Bearer ${isToken}` }
      })
      .then((response) => {
        // Toast.show(response.data.message);
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
  console.log("updateProfileApi-111-111------>", data);
  var isToken = await AsyncStorage.getItem('token');
  // dispatch(profileData());
  return new Promise(() => {
    axios
      .post(`${url}update-profile`, data, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${isToken}`
        },
      })
      .then(async (response) => {
        console.log("updateProfileApi response1111111--->", response.data);
        Toast.show(response.data.message);
        dispatch(loginSuccess(response.data.data));
        dispatch(profileSuccess(response.data));
      })
      .catch((error) => {
        console.log("res1111=====11---->", error);
        // dispatch(profileError(error));
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
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${isToken}`
          //    Accept: 'application/json',

        },
      })
      .then(async (response) => {
        // Toast.show(response.data.message);
        dispatch(addProfileSuccess(response.data));

      })
      .catch((error) => {
        dispatch(addProfileError(error));
        return error
      });
  });
};

//======================== Edit PEOPLE ========================//
export const editPeopleApi = (data, userid) => async (dispatch) => {
  var isToken = await AsyncStorage.getItem('token');
  dispatch(editProfileData());
  console.log("data......", userid);
  return new Promise(() => {
    axios
      .post(`${url}Refugee/add-people/${userid}`, data, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${isToken}`,
        },
      })
      .then(async (response) => {
        Toast.show(response.data.message);
        dispatch(editProfileSuccess(response.data));
      })
      .catch((error) => {
        dispatch(editProfileError(error));
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
        // Toast.show(response.data.message);
        dispatch(contactUsSuccess(response.data));
      })
      .catch((error) => {
        dispatch(contactUsError(error));
        return error
      });
  });
};

// //======================== WISHLISTS ========================//
// export const wishListFilterApi = (data) => async (dispatch) => {
//   var isToken = await AsyncStorage.getItem('token');
//   dispatch(wishlistData());
//   return new Promise(() => {
//     axios
//       .get(`${url}wishlists?${data.type}${data.country}${data.age}`, {
//         headers: { 'Authorization': `Bearer ${isToken}` }
//       })
//       .then((response) => {
//         if (response.data.success) {
//           // Toast.show(response.data.message);
//           dispatch(wishlistSuccess(response.data));
//         }
//       })
//       .catch((error) => {
//         dispatch(wishlistError(error.response));
//         if (!error.response.data.success) {
//           // Toast.show('please try again');
//         }
//         return error
//       });
//   });
// };

//======================== WISHLISTS ========================//
export const wishListApi = () => async (dispatch) => {
  var isToken = await AsyncStorage.getItem('token');
  dispatch(wishlistData());
  return new Promise(() => {
    axios
      .get(`http://18.233.84.195/api/wishlists`, {
        headers: { 'Authorization': `Bearer ${isToken}` }
      })
      .then((response) => {
        if (response.data.success) {
          // console.log("dsff=========>", response.data);
          // Toast.show(response.data.message);
          dispatch(wishlistSuccess(response.data));
        }
      })
      .catch((error) => {
        dispatch(wishlistError(error.response));
        if (!error.response.data.success) {
          // Toast.show('please try again');
        }
        return error
      });
  });
};

//======================== WISHLISTS ADD ========================//	
export const wishlistAddApi = (data) => async (dispatch) => {
  var isToken = await AsyncStorage.getItem('token');
  dispatch(wishlistAddData());
  return new Promise(() => {
    axios
      .post(`http://18.233.84.195/api/add-wishlist/${data}`, null, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${isToken}`
        },
      })
      .then((response) => {
        console.log("wishlistAddApi of response=========>", JSON.stringify(response.data));
        if (response.data.success) {
          // Toast.show(response.data.message);	
          dispatch(wishlistAddSuccess(response.data));
        }
      })
      .catch((error) => {
        console.log("wishlistAddError----->", error.response.data);
        dispatch(wishlistAddError(error.response));
        if (!error.response.data.success) {
          // Toast.show('please try again');	
        }
        return error
      });
  });
};

//======================== WISHLISTS DELETE========================//	
export const wishlistRemoveApi = (data) => async (dispatch) => {
  console.log("data--sdsdssdf->", data);
  var isToken = await AsyncStorage.getItem('token');
  dispatch(wishlistRemoveData());
  return new Promise(() => {
    axios
      .delete(`http://18.233.84.195/api/add-wishlist/${data}`, {
        headers: { 'Authorization': `Bearer ${isToken}` }
      })
      .then((response) => {
        console.log("wishlistRemoveApi of response=========>", JSON.stringify(response));
        if (response.data.success) {
          // Toast.show(response.data.message);	
          dispatch(wishlistRemoveSuccess(response.data));
        }
      })
      .catch((error) => {
        console.log("error.response---------->", JSON.stringify(error.response));
        dispatch(wishlistRemoveError(error.response));
        if (!error.response.data.success) {
          // Toast.show('please try again');	
        }
        return error
      });
  });
};


//======================== IMAGES_LIST =======================//
export const imagesListOfRoleApi = () => async (dispatch) => {
  // console.log("data=====>", data);
  var role = await AsyncStorage.getItem('userType');
  dispatch(imagesListData());
  return new Promise(() => {
    axios
      .get(`${url}images/${role}`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      .then(async (response) => {
        console.log("responseasdasd-d11111------->", JSON.stringify(response.data));
        dispatch(imagesListSuccess(response.data));
      })
      .catch((error) => {
        dispatch(imagesListError(error.response));
      });
  });
};

//======================== USER STATUS ========================//
export const userStatusApi = (id) => async (dispatch) => {
  var isToken = await AsyncStorage.getItem('token');
  dispatch(userStatusData());
  return new Promise(() => {
    axios
      .post(`http://18.233.84.195/api/user/change-status/${id}`, null, {
        headers: {
          'Authorization': `Bearer ${isToken}`
        },
      })
      .then(async (response) => {
        console.log("error.response.data.11111----->", response.data.message);
        dispatch(userStatusSuccess(response.data));
        if (response.data.success) {
          Toast.show(response.data.message);
        }
      })
      .catch((error) => {
        dispatch(userStatusError(error));

        return error
      });
  });
};