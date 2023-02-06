// import {configureStore} from '@reduxjs/toolkit';
// import userReducer from './reducers/user';

// export default configureStore({
//   reducer: {
//     users: userReducer,
//   },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//       immutableCheck: {
//         ignoredPaths: ['users.currentlocation'],
//       },
//     }),
// });
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import apiReducer from '../redux/reducers/ApiReducer';

const appReducers = combineReducers({
  apiReducer,
});

const rootReducer = (state, action) => appReducers(state, action);

const logger = createLogger();

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));