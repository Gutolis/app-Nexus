import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

// Desativa TurboModules no modo desenvolvimento (resolve o erro vermelho)
if (__DEV__) {
  global.__turboModulesDisabled = true;
}

AppRegistry.registerComponent(appName, () => App);