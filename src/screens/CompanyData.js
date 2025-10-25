import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { theme } from '../styles/theme';
import Header from '../components/Header';
import Input from '../components/Input';
import Button from '../components/Button';

const CompanyData = ({ navigation }) => {
  const [formData, setFormData] = useState({
    companyName: '',
    cnpj: '',
    email: '',
    phone: '',
    website: ''
  });

  const updateField = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Header 
          title="Dados da Empresa"
          subtitle="Vamos consigo com uma informação básica:"
        />

        <Input
          label="Nome da Empresa*"
          placeholder="Seu nome completo"
          value={formData.companyName}
          onChangeText={(value) => updateField('companyName', value)}
        />

        <Input
          label="CNPJ*"
          placeholder="00.000.000/0000-00"
          value={formData.cnpj}
          onChangeText={(value) => updateField('cnpj', value)}
          keyboardType="numeric"
        />

        <Input
          label="Email Companhia*"
          placeholder="Contato@empresa.com"
          value={formData.email}
          onChangeText={(value) => updateField('email', value)}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Input
          label="Telefone*"
          placeholder="(11) 3000-0000"
          value={formData.phone}
          onChangeText={(value) => updateField('phone', value)}
          keyboardType="phone-pad"
        />

        <Input
          label="Website"
          placeholder="https://www.empresa.com"
          value={formData.website}
          onChangeText={(value) => updateField('website', value)}
          autoCapitalize="none"
        />

        <View style={styles.buttonContainer}>
          <Button 
            title="Voltar"
            variant="outline"
            onPress={() => navigation.goBack()}
            style={styles.button}
          />
          <Button 
            title="Continuar"
            onPress={() => navigation.navigate('CompanyAddress')}
            style={styles.button}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    padding: theme.spacing.lg,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: theme.spacing.xl,
    gap: theme.spacing.md,
  },
  button: {
    flex: 1,
  }
});

export default CompanyData;