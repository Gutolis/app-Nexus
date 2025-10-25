import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { theme } from '../styles/theme';
import Header from '../components/Header';
import Button from '../components/Button';

const UserType = ({ navigation }) => {
  const [selectedType, setSelectedType] = useState('student');

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Header 
          title="Como você gostaria de usar o Nexus?"
          subtitle="É assim o que ela pedir que ambos os requisitos."
        />

        <View style={styles.optionsContainer}>
          <TouchableOpacity
            style={[
              styles.optionCard,
              selectedType === 'student' && styles.optionCardSelected
            ]}
            onPress={() => setSelectedType('student')}
          >
            <Text style={styles.optionTitle}>Sou Estudante</Text>
            <Text style={styles.optionDescription}>
              Buscar estágios,{'\n'}
              de desafios e{'\n'}
              desenvolva sua{'\n'}
              carreira
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.optionCard,
              selectedType === 'company' && styles.optionCardSelected
            ]}
            onPress={() => setSelectedType('company')}
          >
            <Text style={styles.optionTitle}>Sou Empresa</Text>
            <Text style={styles.optionDescription}>
              Publicar vagas,{'\n'}
              era desafios e{'\n'}
              encontre os{'\n'}
              melhores talentos.
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.selectedIndicator}>
          <Text style={styles.selectedText}>Selecionado</Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button 
            title="Voltar"
            variant="outline"
            onPress={() => navigation.goBack()}
          />
          <Button 
            title="Continuar"
            onPress={() => navigation.navigate('CompanyData')}
          />
        </View>

        <Text style={styles.footerText}>
          Você pode poderá ajudar essas configurações claras?
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
  optionsContainer: {
    marginVertical: theme.spacing.lg,
  },
  optionCard: {
    backgroundColor: theme.colors.card,
    padding: theme.spacing.lg,
    borderRadius: theme.borderRadius.lg,
    marginBottom: theme.spacing.md,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  optionCardSelected: {
    borderColor: theme.colors.primary,
  },
  optionTitle: {
    ...theme.typography.h2,
    marginBottom: theme.spacing.md,
  },
  optionDescription: {
    ...theme.typography.body,
    lineHeight: 24,
  },
  selectedIndicator: {
    backgroundColor: theme.colors.primary,
    padding: theme.spacing.sm,
    borderRadius: theme.borderRadius.sm,
    alignSelf: 'flex-start',
    marginBottom: theme.spacing.lg,
  },
  selectedText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 14,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: theme.spacing.md,
  },
  footerText: {
    ...theme.typography.caption,
    textAlign: 'center',
    marginTop: theme.spacing.lg,
  }
});

export default UserType;