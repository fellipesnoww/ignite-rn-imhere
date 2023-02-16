import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>React</Text>
      <Text style={styles.eventDate}>Quinta feira, 16 de fevereiro de 2023</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24
  },
  eventName: {
    fontSize: 24,
    color: '#FDFCFE',
    fontWeight: 'bold',
    marginTop: 48
  },
  eventDate: {
    color: '#6b5b5b',
    fontSize: 16
  }
});
