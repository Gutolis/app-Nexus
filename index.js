import { AppRegistry } from 'react-native';
import App from './app';

const appName = require('./app.json').expo.name;

// === DESATIVA TUDO QUE CAUSA O ERRO VERMELHO ===
global.__turboModulesDisabled = true;
global.__useTurboModules = false;
global.__experimentalTurboModules = false;
global.__bridgeLess = false; // Nova Architecture
// =============================================

AppRegistry.registerComponent(appName, () => App);