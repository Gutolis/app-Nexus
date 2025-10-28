import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// CORRIGINDO NOMES DOS ARQUIVOS
import Login from '../screens/Login';
import UserType from '../screens/UserType';
import CompanyData from '../screens/CompanyData';
import CompanyAddress from '../screens/CompanyAddress'; // ← Corrigido
import CorporateData from '../screens/CorporateData';   // ← Nome com C maiúsculo
import ProfessionalProfile from '../screens/ProfessionalProfile';
import JobsScreen from '../screens/JobsScreen';           // ← Nome correto

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Login"
        screenOptions={{
          headerStyle: { backgroundColor: '#2563eb' },
          headerTintColor: '#ffffff',
          headerTitleStyle: { fontWeight: '600' },
        }}
      >
        <Stack.Screen 
          name="Login" 
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="UserType" 
          component={UserType}
          options={{ title: 'Tipo de Usuário' }}
        />
        <Stack.Screen 
          name="CompanyData" 
          component={CompanyData}
          options={{ title: 'Dados da Empresa' }}
        />
        <Stack.Screen 
          name="CompanyAddress" 
          component={CompanyAddress}
          options={{ title: 'Endereço' }}
        />
        <Stack.Screen 
          name="CorporateData" 
          component={CorporateData}
          options={{ title: 'Dados Corporativos' }}
        />
        <Stack.Screen 
          name="ProfessionalProfile" 
          component={ProfessionalProfile}
          options={{ title: 'Perfil Profissional' }}
        />
        <Stack.Screen 
          name="Jobs" 
          component={JobsScreen}
          options={{ title: 'Vagas' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;