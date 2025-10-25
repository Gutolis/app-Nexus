import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { theme } from '../styles/theme';
import Header from '../components/Header';
import Button from '../components/Button';

const Login = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Header 
          title="Installer - Firma"
          subtitle="Share public para integrarem..."
        />
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Relevante</Text>
          <View style={styles.options}>
            <Text style={styles.option}>• Ainda</Text>
            <Text style={styles.option}>• Banks</Text>
            <Text style={styles.option}>• LEGEND TEMPLAZERIA</Text>
          </View>
        </View>

        <Button 
          title="ENTRAR"
          onPress={() => navigation.navigate('UserType')}
          style={styles.enterButton}
        />

        <View style={styles.footer}>
          <Text style={styles.footerText}>Ainda não tem uma conta?</Text>
          <Button 
            title="Criar conta gratuita"
            variant="outline"
            onPress={() => navigation.navigate('UserType')}
          />
        </View>

        <Text style={styles.bottomText}>Firma de Porto</Text>
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
  section: {
    marginVertical: theme.spacing.lg,
  },
  sectionTitle: {
    ...theme.typography.h3,
    marginBottom: theme.spacing.md,
  },
  options: {
    marginLeft: theme.spacing.md,
  },
  option: {
    ...theme.typography.body,
    marginBottom: theme.spacing.sm,
  },
  enterButton: {
    marginVertical: theme.spacing.xl,
  },
  footer: {
    alignItems: 'center',
    marginVertical: theme.spacing.lg,
  },
  footerText: {
    ...theme.typography.body,
    marginBottom: theme.spacing.sm,
  },
  bottomText: {
    ...theme.typography.caption,
    textAlign: 'center',
    marginTop: theme.spacing.xl,
  }
});

export default Login;