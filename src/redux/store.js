import {configureStore} from '@reduxjs/toolkit';
import userReducer from './reducers/user';

export default configureStore({
  reducer: {
    users: userReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: {
        ignoredPaths: ['users.currentlocation'],
      },
    }),
});
