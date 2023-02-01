import {createSlice} from '@reduxjs/toolkit';
import {login, logout} from '../actions/authentication';

const initialState = {
  user: null,
  loggedIn: false,
  loading: false,
  token: '',
  currentlocation: [],
  isCallApiInBackground: false,
  isForcefullyLogout: true,
};
export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    init: (state, action) => {
      state.user = action.payload;
      state.loggedIn = true;
    },
    updateLocation: (state, action) => {
      state.currentlocation = action.payload;
    },
    initToken: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.loading = false;
      state.loggedIn = true;
    },
    setLoggedOut: state => {
      state.loggedIn = false;
    },
    updateUser: (state, action) => {
      state.user = action.payload.user;
      state.loggedIn = true;
    },
    setCallApiInBackground: (state, action) => {
      state.isCallApiInBackground = action.payload.isCallApi;
    },
    setIsForcefullyLogout: (state, action) => {
      state.isForcefullyLogout = action.payload;
    },
  },
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      let res = action.payload;

      if (res.success) {
        return {
          ...state,
          loggedIn: true,
          user: res.data,
          token: res.token,
          loading: false,
        };
      } else {
        return {
          ...state,
          loggedIn: false,
          loading: false,
        };
      }
    },
    [login.pending]: (state, action) => {
      return {
        ...state,
        loading: true,
      };
    },
    [login.rejected]: (state, action) => {
      return {
        ...state,
        loading: false,
      };
    },
    [logout.fulfilled]: (state, action) => {
      return {
        ...state,
        loggedIn: false,
        user: null,
        token: null,
        loading: false,
      };
    },
  },
});

export const {
  init,
  initToken,
  setLoggedOut,
  updateUser,
  updateLocation,
  setCallApiInBackground,
  setIsForcefullyLogout,
} = userSlice.actions;

export default userSlice.reducer;
