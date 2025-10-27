import React from 'react';
import { StatusBar } from 'react-native';
import AppNavigator from './src/navigation/Appnavigator';

const App = () => {
  return (
    <>
      <StatusBar 
        barStyle="dark-content" 
        backgroundColor="#ffffff" 
        translucent={false}
      />
      <AppNavigator />
    </>
  );
};

export default App;