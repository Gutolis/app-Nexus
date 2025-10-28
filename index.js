// index.js
import { AppRegistry } from 'react-native';
import App from './App';

const appName = require('./app.json').expo.name;

// === REMOVA ESTAS LINHAS: ===
// global.__EXPO_USE_LEGACY_BRIDGE = true;
// global.__turboModulesDisabled = true;
// global.__useTurboModules = false;
// global.__bridgeLess = false;
// =============================

// Registra o app
AppRegistry.registerComponent(appName, () => App);