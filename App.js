import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Footer from './Components/Footer';

export default function App() {
  return (
    <View style={styles.container}>
      <Navbar />
      <Banner />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
