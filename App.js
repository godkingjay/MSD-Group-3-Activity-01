import styles from './assets/styles/global';
import { Text, View } from 'react-native';
import ExternalFile from './assets/components/ExternalFile';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <ExternalFile />
    </View>
  );
}