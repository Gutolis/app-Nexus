import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { theme } from '../styles/theme';
import Header from '../components/Header';
import Input from '../components/Input';
import Button from '../components/Button';

const CompanyAddress = ({ navigation }) => {
  const [formData, setFormData] = useState({
    fullAddress: '',
    city: '',
    cep: '',
    state: ''
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
          title="Encatego"
          subtitle="Localizado de nos empresa"
        />

        <Input
          label="Encatego Completo *"
          placeholder="Rua, Número, bairro"
          value={formData.fullAddress}
          onChangeText={(value) => updateField('fullAddress', value)}
        />

        <Input
          label="Cidade *"
          placeholder="São Paulo"
          value={formData.city}
          onChangeText={(value) => updateField('city', value)}
        />

        <Input
          label="CEP *"
          placeholder="06000-000"
          value={formData.cep}
          onChangeText={(value) => updateField('cep', value)}
          keyboardType="numeric"
        />

        <Input
          label="Estado *"
          placeholder="SP"
          value={formData.state}
          onChangeText={(value) => updateField('state', value)}
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
            onPress={() => navigation.navigate('CorporateData')}
            style={styles.button}
          />
        </View>

        <Text style={styles.footerText}>
          Verd a parte poderá gerar essas configurações depois.
        </Text>
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
  },
  footerText: {
    ...theme.typography.caption,
    textAlign: 'center',
    marginTop: theme.spacing.lg,
  }
});

export default CompanyAddress;