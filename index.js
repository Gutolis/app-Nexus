import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

// Desativa TurboModules no modo dev (resolve erro vermelho)
if (__DEV__) {
  global.__turboModulesDisabled = true;
}

// Registro seguro
AppRegistry.registerComponent(appName, () => App);