import React from 'react';
import {AppRegistry} from 'react-native';

import App from './src/App';

console.disableYellowBox = true;
const RNTypescript = () => <App />;
AppRegistry.registerComponent('Pirlantam', () => RNTypescript);
