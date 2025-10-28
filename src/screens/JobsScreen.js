import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { theme } from '../styles/theme';
import Header from '../components/Header';
import Input from '../components/Input';

const JobsScreen = ({ navigation }) => {
  const [jobs, setJobs] = useState([
    {
      id: '1',
      title: 'Desenvolvedor Front-end React',
      company: 'TechCorp Brasil',
      location: 'São Paulo, SP',
      type: 'Tempo Integral',
      salary: 'R$ 5.000 - R$ 8.000',
      description: 'Líder em soluções de software e transformação digital',
      requirements: ['React', 'JavaScript', 'CSS', 'HTML'],
      posted: '2 dias atrás'
    },
    {
      id: '2',
      title: 'Desenvolvedor Full Stack',
      company: 'Vector Path',
      location: 'Remoto',
      type: 'Remoto',
      salary: 'R$ 6.000 - R$ 9.000',
      description: 'Trabalhe com tecnologias modernas em ambiente dinâmico',
      requirements: ['Node.js', 'React', 'MongoDB', 'TypeScript'],
      posted: '1 dia atrás'
    },
    {
      id: '3',
      title: 'UI/UX Designer',
      company: 'Create Center',
      location: 'Rio de Janeiro, RJ',
      type: 'Tempo Integral',
      salary: 'R$ 4.500 - R$ 7.000',
      description: 'Crie experiências incríveis para nossos usuários',
      requirements: ['Figma', 'Adobe XD', 'Prototipagem', 'Design System'],
      posted: '3 dias atrás'
    }
  ]);

  const [search, setSearch] = useState('');
  const [selectedJob, setSelectedJob] = useState(null);

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(search.toLowerCase()) ||
    job.company.toLowerCase().includes(search.toLowerCase())
  );

  const JobCard = ({ job }) => (
    <TouchableOpacity
      style={styles.jobCard}
      onPress={() => setSelectedJob(job)}
    >
      <View style={styles.jobHeader}>
        <Text style={styles.jobTitle}>{job.title}</Text>
        <Text style={styles.jobSalary}>{job.salary}</Text>
      </View>
      
      <Text style={styles.companyName}>{job.company}</Text>
      <Text style={styles.jobDescription}>{job.description}</Text>
      
      <View style={styles.jobDetails}>
        <View style={styles.detailTag}>
          <Text style={styles.detailText}>{job.location}</Text>
        </View>
        <View style={styles.detailTag}>
          <Text style={styles.detailText}>{job.type}</Text>
        </View>
      </View>

      <View style={styles.requirements}>
        {job.requirements.slice(0, 3).map((req, index) => (
          <View key={index} style={styles.requirementTag}>
            <Text style={styles.requirementText}>{req}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.postedDate}>{job.posted}</Text>
    </TouchableOpacity>
  );

  const JobDetail = ({ job }) => (
    <View style={styles.jobDetail}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => setSelectedJob(null)}
      >
        <Text style={styles.backButtonText}>← Voltar</Text>
      </TouchableOpacity>

      <Text style={styles.detailTitle}>{job.title}</Text>
      <Text style={styles.detailCompany}>{job.company}</Text>
      <Text style={styles.detailDescription}>{job.description}</Text>

      <View style={styles.detailSection}>
        <Text style={styles.sectionTitle}>Localização</Text>
        <Text style={styles.sectionContent}>{job.location}</Text>
      </View>

      <View style={styles.detailSection}>
        <Text style={styles.sectionTitle}>Tipo</Text>
        <Text style={styles.sectionContent}>{job.type}</Text>
      </View>

      <View style={styles.detailSection}>
        <Text style={styles.sectionTitle}>Salário</Text>
        <Text style={styles.sectionContent}>{job.salary}</Text>
      </View>

      <View style={styles.detailSection}>
        <Text style={styles.sectionTitle}>Requisitos</Text>
        <View style={styles.requirementsList}>
          {job.requirements.map((req, index) => (
            <View key={index} style={styles.requirementItem}>
              <Text style={styles.requirementItemText}>• {req}</Text>
            </View>
          ))}
        </View>
      </View>

      <TouchableOpacity style={styles.applyButton}>
        <Text style={styles.applyButtonText}>Candidatar-se</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {!selectedJob ? (
        <>
          <Header 
            title="Vagas Disponíveis"
            subtitle="Encontre as melhores oportunidades"
          />
          
          <Input
            placeholder="Buscar vagas, empresas..."
            value={search}
            onChangeText={setSearch}
            style={styles.searchInput}
          />

          <FlatList
            data={filteredJobs}
            renderItem={({ item }) => <JobCard job={item} />}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.listContent}
          />
        </>
      ) : (
        <ScrollView style={styles.detailContainer}>
          <JobDetail job={selectedJob} />
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing.lg,
  },
  searchInput: {
    marginBottom: theme.spacing.lg,
  },
  listContent: {
    paddingBottom: theme.spacing.xl,
  },
  jobCard: {
    backgroundColor: theme.colors.card,
    padding: theme.spacing.lg,
    borderRadius: theme.borderRadius.lg,
    marginBottom: theme.spacing.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  jobHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: theme.spacing.sm,
  },
  jobTitle: {
    ...theme.typography.h3,
    flex: 1,
    marginRight: theme.spacing.sm,
  },
  jobSalary: {
    ...theme.typography.h3,
    color: theme.colors.primary,
  },
  companyName: {
    ...theme.typography.body,
    fontWeight: '600',
    marginBottom: theme.spacing.xs,
  },
  jobDescription: {
    ...theme.typography.body,
    color: theme.colors.textLight,
    marginBottom: theme.spacing.md,
  },
  jobDetails: {
    flexDirection: 'row',
    marginBottom: theme.spacing.md,
  },
  detailTag: {
    backgroundColor: theme.colors.background,
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.xs,
    borderRadius: theme.borderRadius.sm,
    marginRight: theme.spacing.sm,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  detailText: {
    fontSize: 12,
    color: theme.colors.textLight,
  },
  requirements: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: theme.spacing.sm,
  },
  requirementTag: {
    backgroundColor: theme.colors.primary,
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.xs,
    borderRadius: theme.borderRadius.sm,
    marginRight: theme.spacing.sm,
    marginBottom: theme.spacing.sm,
  },
  requirementText: {
    fontSize: 12,
    color: '#ffffff',
    fontWeight: '500',
  },
  postedDate: {
    ...theme.typography.caption,
    color: theme.colors.textLight,
  },
  jobDetail: {
    flex: 1,
  },
  backButton: {
    marginBottom: theme.spacing.lg,
  },
  backButtonText: {
    ...theme.typography.body,
    color: theme.colors.primary,
    fontWeight: '600',
  },
  detailTitle: {
    ...theme.typography.h1,
    marginBottom: theme.spacing.sm,
  },
  detailCompany: {
    ...theme.typography.h3,
    color: theme.colors.primary,
    marginBottom: theme.spacing.lg,
  },
  detailDescription: {
    ...theme.typography.body,
    marginBottom: theme.spacing.xl,
    lineHeight: 24,
  },
  detailSection: {
    marginBottom: theme.spacing.lg,
  },
  sectionTitle: {
    ...theme.typography.h3,
    marginBottom: theme.spacing.sm,
  },
  sectionContent: {
    ...theme.typography.body,
    color: theme.colors.textLight,
  },
  requirementsList: {
    marginLeft: theme.spacing.sm,
  },
  requirementItem: {
    marginBottom: theme.spacing.sm,
  },
  requirementItemText: {
    ...theme.typography.body,
  },
  applyButton: {
    backgroundColor: theme.colors.primary,
    padding: theme.spacing.lg,
    borderRadius: theme.borderRadius.lg,
    alignItems: 'center',
    marginTop: theme.spacing.xl,
  },
  applyButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default JobsScreen;