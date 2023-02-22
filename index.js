/**
 * @format
 */

// import {AppRegistry} from 'react-native';
// // import 'react-native-gesture-handler';
// import App from './src/App';
// import {name as appName} from './app.json';
// AppRegistry.registerComponent(appName, () => App);

/**
 * @format
 */
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import React from 'react'
import { name as appName } from './app.json';
// import App from './storybook';
import App from './src/App';
const NewApp = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => NewApp);

