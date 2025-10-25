import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { theme } from '../styles/theme';
import Header from '../components/Header';
import Input from '../components/Input';
import Button from '../components/Button';

const CorporateData = ({ navigation }) => {
  const [formData, setFormData] = useState({
    biography: '',
    companySize: '',
    foundationYear: '',
    description: ''
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
          title="Dados Corporativos"
          subtitle="Diferencial de todos os seguros"
        />

        <Input
          label="Biografia *"
          placeholder="Estocolmo a valor"
          value={formData.biography}
          onChangeText={(value) => updateField('biography', value)}
          multiline
        />

        <Input
          label="Tamanho da Empresa *"
          placeholder="Estocolmo a incentivo"
          value={formData.companySize}
          onChangeText={(value) => updateField('companySize', value)}
        />

        <Input
          label="Ano de Fundação"
          placeholder="100%"
          value={formData.foundationYear}
          onChangeText={(value) => updateField('foundationYear', value)}
          keyboardType="numeric"
        />

        <Input
          label="Descrição da Empresa *"
          placeholder="Estocolmo a que a empresa foi"
          value={formData.description}
          onChangeText={(value) => updateField('description', value)}
          multiline
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
            onPress={() => navigation.navigate('ProfessionalProfile')}
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

export default CorporateData;