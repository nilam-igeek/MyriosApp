import ACTION_TYPES from './ActionTypes.js';

//======================== LOGIN =======================//
export const loginData = () => ({
  type: ACTION_TYPES.LOGIN_API_PENDING,
});

export const loginSuccess = (data) => ({
  type: ACTION_TYPES.LOGIN_API_SUCCESS,
  payload: data,
});

export const loginError = (error) => ({
  type: ACTION_TYPES.LOGIN_API_ERROR,
  payload: error,
});

//======================== REGISTER ========================//
export const registerData = () => ({
  type: ACTION_TYPES.REGISTER_API_PENDING,
});

export const registerSuccess = (data) => ({
  type: ACTION_TYPES.REGISTER_API_SUCCESS,
  payload: data,
});

export const registerError = (error) => ({
  type: ACTION_TYPES.REGISTER_API_ERROR,
  payload: error,
});

//======================== WISHLISTS ========================//
export const wishlistData = () => ({
  type: ACTION_TYPES.WISHLISTS_API_PENDING,
});

export const wishlistSuccess = (data) => ({
  type: ACTION_TYPES.WISHLISTS_API_SUCCESS,
  payload: data,
});

export const wishlistError = (error) => ({
  type: ACTION_TYPES.WISHLISTS_API_ERROR,
  payload: error,
});

export const wishlistAddData = () => ({
  type: ACTION_TYPES.WISHLISTS_ADD_API_PENDING,
});

export const wishlistAddSuccess = (data) => ({
  type: ACTION_TYPES.WISHLISTS_ADD_API_SUCCESS,
  payload: data,
});

export const wishlistAddError = (error) => ({
  type: ACTION_TYPES.WISHLISTS_ADD_API_ERROR,
  payload: error,
});

//======================== MASTERS ========================//
export const refugeesData = () => ({
  type: ACTION_TYPES.REFUGEES_API_PENDING,
});

export const refugeesSuccess = (data) => ({
  type: ACTION_TYPES.REFUGEES_API_SUCCESS,
  payload: data,
});

export const refugeesError = (error) => ({
  type: ACTION_TYPES.REFUGEES_API_ERROR,
  payload: error,
});


export const donorData = () => ({
  type: ACTION_TYPES.DONOR_API_PENDING,
});

export const donorSuccess = (data) => ({
  type: ACTION_TYPES.DONOR_API_SUCCESS,
  payload: data,
});

export const donorError = (error) => ({
  type: ACTION_TYPES.DONOR_API_ERROR,
  payload: error,
});


export const sheltersData = () => ({
  type: ACTION_TYPES.SHELTERS_API_PENDING,
});

export const sheltersSuccess = (data) => ({
  type: ACTION_TYPES.SHELTERS_API_SUCCESS,
  payload: data,
});

export const sheltersError = (error) => ({
  type: ACTION_TYPES.SHELTERS_API_ERROR,
  payload: error,
});


export const requestsData = () => ({
  type: ACTION_TYPES.REQUESTS_API_PENDING,
});

export const requestsSuccess = (data) => ({
  type: ACTION_TYPES.REQUESTS_API_SUCCESS,
  payload: data,
});

export const requestsError = (error) => ({
  type: ACTION_TYPES.REQUESTS_API_ERROR,
  payload: error,
});


export const meetingStatusData = () => ({
  type: ACTION_TYPES.MEETING_STATUS_API_PENDING,
});

export const meetingStatusSuccess = (data) => ({
  type: ACTION_TYPES.MEETING_STATUS_API_SUCCESS,
  payload: data,
});

export const meetingStatusError = (error) => ({
  type: ACTION_TYPES.MEETING_STATUS_API_ERROR,
  payload: error,
});

//======================== PROFILE ========================//
export const profileData = () => ({
  type: ACTION_TYPES.PROFILE_API_PENDING,
});

export const profileSuccess = (data) => ({
  type: ACTION_TYPES.PROFILE_API_SUCCESS,
  payload: data,
});

export const profileError = (error) => ({
  type: ACTION_TYPES.PROFILE_API_ERROR,
  payload: error,
});

//======================== CONTACT-US ========================//
export const contactUsData = () => ({
  type: ACTION_TYPES.CONTACT_US_API_PENDING,
});

export const contactUsSuccess = (data) => ({
  type: ACTION_TYPES.CONTACT_US_API_SUCCESS,
  payload: data,
});

export const contactUsError = (error) => ({
  type: ACTION_TYPES.CONTACT_US_API_ERROR,
  payload: error,
});

//======================== HELPED ========================//
export const helpedData = () => ({
  type: ACTION_TYPES.HELPED_API_PENDING,
});

export const helpedSuccess = (data) => ({
  type: ACTION_TYPES.HELPED_API_SUCCESS,
  payload: data,
});

export const helpedError = (error) => ({
  type: ACTION_TYPES.HELPED_API_ERROR,
  payload: error,
});


//======================== PEOPLE ========================//
export const peopleData = () => ({
  type: ACTION_TYPES.PEOPLE_API_PENDING,
});

export const peopleSuccess = (data) => ({
  type: ACTION_TYPES.PEOPLE_API_SUCCESS,
  payload: data,
});

export const peopleError = (error) => ({
  type: ACTION_TYPES.PEOPLE_API_ERROR,
  payload: error,
});

//======================== CREATE-MEETING ========================//
export const createMeetingData = () => ({
  type: ACTION_TYPES.CREATE_MEETING_API_PENDING,
});

export const createMeetingSuccess = (data) => ({
  type: ACTION_TYPES.CREATE_MEETING_API_SUCCESS,
  payload: data,
});

export const createMeetingError = (error) => ({
  type: ACTION_TYPES.CREATE_MEETING_API_ERROR,
  payload: error,
});

//======================== MEETING ========================//
export const meetingData = () => ({
  type: ACTION_TYPES.MEETING_API_PENDING,
});

export const meetingSuccess = (data) => ({
  type: ACTION_TYPES.MEETING_API_SUCCESS,
  payload: data,
});

export const meetingError = (error) => ({
  type: ACTION_TYPES.MEETING_API_ERROR,
  payload: error,
});