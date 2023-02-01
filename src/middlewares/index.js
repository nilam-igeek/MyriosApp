import instance from './instance';
import * as RequestApi from './requestApi';
import { Alert } from 'react-native';
// import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-async-storage/async-storage';

const addToken = async () => {
  try {
    const token = await AsyncStorage.getItem('loginToken');

    return {
      headers: {
        token: token,
      },
    };
  } catch (err) {}
};

const sendError = (error, toast = false) => {
  let errorMessage = error?.response?.data?.error || error.message;
    if (toast) {
      Alert.alert(errorMessage)
  }
  return {
    success: false,
    error: errorMessage,
  };
};

const sendResponse = res => {
  if (res?.data?.success) {
    return res?.data;
  } else {
    return {
      success: false,
      error: 'something went wrong!',
    };
  }
};

export const loginApi = async code => {
  try {
    if (code.code) {
      const data = {
        id: code.code,
        date: code.currentDay,
      };
      const res = await instance.post(`${RequestApi.authRequest.login}`, data);
      return sendResponse(res);
    } else {
      return sendError('no code initialized !');
    }
  } catch (error) {
    return sendError(error, true);
  }
};

export const getRoutesApi = async (code, date) => {
  try {
    const headers = await addToken();
    const res = await instance.get(
      `${RequestApi.routeRequest.getRoute}?id=${code}&date=${date}`,
      null,
      headers,
    );
    return sendResponse(res);
  } catch (error) {
    return sendError(error, true);
  }
};

export const submitRouteApi = async data => {
  try {
    const headers = await addToken();

    const res = await instance.post(
      `${RequestApi.routeRequest.submitRoute}`,
      data,
      headers,
    );
    return sendResponse(res);
  } catch (error) {
    return sendError(error, true);
  }
};

export const imageUploadApi = async (data, isDriver) => {
  try {
    const headers = await addToken();
    const res = await instance.post(
      `${RequestApi.fileUploadRequest.imageUpload}?is_driver=${isDriver}`,
      data,
      {
        headers: {
          token: headers.headers.token,
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    return sendResponse(res);
  } catch (error) {
    return sendError(error);
  }
};

export const updateProfileApi = async data => {
  try {
    const headers = await addToken();

    const profileData = {
      id: data.id,
      name: data.name,
      phone: data.phone,
      photo: data.photo,
    };
    const res = await instance.post(
      `${RequestApi.updateProfileRequest.updateProfile}`,
      profileData,
      headers,
    );
    return sendResponse(res);
  } catch (error) {
    return sendError(error, true);
  }
};

export const updateLastLocation = async (data, headers) => {
  try {
    const res = await instance.post(
      `${RequestApi.updateProfileRequest.updateDriverLocation}`,
      data,
      headers,
    );
    return sendResponse(res);
  } catch (error) {
    return sendError(error, true);
  }
};

export const getUpdateLoginData = async data => {
  try {
    if (data) {
      const res = await instance.post(
        `${RequestApi.authRequest.getUpdateLoginData}`,
        data,
      );
      return sendResponse(res);
    } else {
      return sendError('no data initialized !');
    }
  } catch (error) {
    return sendError(error, true);
  }
};
