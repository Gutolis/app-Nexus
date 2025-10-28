import { AppRegistry } from 'react-native';
import App from './App';

// Usa require() em vez de import (funciona 100% com JSON)
const appName = require('./app.json').expo.name;

// Desativa TurboModules no modo dev
if (__DEV__) {
  global.__turboModulesDisabled = true;
}

// Registra o app
AppRegistry.registerComponent(appName, () => App);