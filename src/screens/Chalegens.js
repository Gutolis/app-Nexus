import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { theme } from '../styles/theme';
import Header from '../components/Header';

const Challenges = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Header 
          title="Desafios"
        />

        <View style={styles.companyCard}>
          <Text style={styles.companyTitle}>TechCorp Brasil</Text>
          <Text style={styles.companySubtitle}>Constituiros Símbolares</Text>
          <Text style={styles.companyDescription}>
            Líder em soluções de software e transformação digital
          </Text>
        </View>

        <View style={styles.companyCard}>
          <Text style={styles.companyTitle}>TechCorp Brasil</Text>
          <Text style={styles.companySubtitle}>Constituiros Símbolares</Text>
          <Text style={styles.companyDescription}>
            Líder em soluções de software e transformação digital
          </Text>
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
  companyCard: {
    backgroundColor: theme.colors.card,
    padding: theme.spacing.lg,
    borderRadius: theme.borderRadius.lg,
    marginBottom: theme.spacing.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  companyTitle: {
    ...theme.typography.h2,
    marginBottom: theme.spacing.xs,
  },
  companySubtitle: {
    ...theme.typography.h3,
    color: theme.colors.primary,
    marginBottom: theme.spacing.sm,
  },
  companyDescription: {
    ...theme.typography.body,
    color: theme.colors.textLight,
  }
});

export default Challenges;