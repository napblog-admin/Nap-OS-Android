import { StyleSheet } from 'react-native';
import { supabase } from '../../lib/supabase';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
  console.log('Supabase client:', supabase);

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Nap OS</ThemedText>
      <ThemedText style={styles.subtitle}>
        Expo app is running successfully.
      </ThemedText>
      <ThemedText style={styles.text}>
        Supabase client is connected in the project setup.
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  subtitle: {
    marginTop: 12,
    fontSize: 16,
    textAlign: 'center',
  },
  text: {
    marginTop: 8,
    fontSize: 14,
    textAlign: 'center',
  },
});
