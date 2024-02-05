import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import registerNNPushToken from 'native-notify';

export default function App() {
  registerNNPushToken(18835, 'FlqGO7s5Cm2H8b0E9JyGrt');
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
