/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import RootComponent from './Router';
import {name as appName} from './app.json';
import Main from './src/Main';
import Profile from './src/Profile';

AppRegistry.registerComponent(appName, () => RootComponent);
