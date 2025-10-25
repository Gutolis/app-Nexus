import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { theme } from '../styles/theme';
import Header from '../components/Header';
import Input from '../components/Input';
import Button from '../components/Button';

const ProfessionalProfile = ({ navigation }) => {
  const [formData, setFormData] = useState({
    responsibleName: '',
    position: '',
    responsibleEmail: '',
    responsiblePhone: '',
    interestAreas: ''
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
          title="Perfil Professional"
          subtitle="Existence sans habilitations et représentants"
        />

        <Input
          label="Gens de Responsável *"
          placeholder="Gens Groupiers"
          value={formData.responsibleName}
          onChangeText={(value) => updateField('responsibleName', value)}
        />

        <Input
          label="Zarge *"
          placeholder="TASSEA CPS, Service de RH"
          value={formData.position}
          onChangeText={(value) => updateField('position', value)}
        />

        <Input
          label="Email de Responsável *"
          placeholder="admin@empresa.com"
          value={formData.responsibleEmail}
          onChangeText={(value) => updateField('responsibleEmail', value)}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Input
          label="Telefone de Responsável"
          placeholder="(11) 99999-9999"
          value={formData.responsiblePhone}
          onChangeText={(value) => updateField('responsiblePhone', value)}
          keyboardType="phone-pad"
        />

        <Input
          label="Accès de Interesse"
          placeholder="administrateurs, zarge"
          value={formData.interestAreas}
          onChangeText={(value) => updateField('interestAreas', value)}
        />

        <View style={styles.buttonContainer}>
          <Button 
            title="Voltar"
            variant="outline"
            onPress={() => navigation.goBack()}
            style={styles.button}
          />
          <Button 
            title="Finalizar Cadastro"
            onPress={() => navigation.navigate('Jobs')}
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

export default ProfessionalProfile;