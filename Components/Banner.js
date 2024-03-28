import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Banner() {
  return (
    <View style={styles.container}>
      <View style={styles.bannerContainer}>
        <Text style={styles.bannerText}>Repos</Text>
        <Text style={styles.bannerSmallText}>8</Text>
      </View>
      <View style={styles.bannerContainer}>
        <Text style={styles.bannerText}>Followers</Text>
        <Text style={styles.bannerSmallText}>3938</Text>
      </View>
      <View style={styles.bannerContainer}>
        <Text style={styles.bannerText}>Following</Text>
        <Text style={styles.bannerSmallText}>9</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 40,
    margin: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e7eaf6',
    padding: 28,
    borderRadius: 10
  },
  bannerContainer: {
    gap: 10
  },
  bannerText: {
    fontSize: 16
  },
  bannerSmallText: {
    fontSize: 20,
    textAlign: 'center'
  }

});
