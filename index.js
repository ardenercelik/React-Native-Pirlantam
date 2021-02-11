import React from 'react';
import {AppRegistry} from 'react-native';
import {LogBox} from 'react-native';

import App from './src/App';
LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
  'Setting a timer',
  'Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state.',
]);
const RNTypescript = () => <App />;
AppRegistry.registerComponent('Pirlantam', () => RNTypescript);
