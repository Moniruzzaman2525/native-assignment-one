import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Navbar() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <View>
          <Image style={styles.bannerImage} source={require('../assets/avatar.png')}></Image>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.navbarTextHeader}>The Octocat </Text>
          <Text style={styles.navbarMiddleText}>aoctocat</Text>
          <Text style={styles.navbarEndText}>Joined 25 Jan 2011</Text>
        </View>
      </View>
      <View style={styles.bannerTextContainer}>
        <Text style={styles.bannerText}>Lorem ipsum dolor sit amet. consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    marginTop: 100,
    gap: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannerImage: {
    width: 100,
    height: 100
  },
  navbarTextHeader: {
    fontWeight: 'bold',
    fontSize: 30
  },
  navbarMiddleText: {
    fontSize: 16,
    color: 'blue'
  },
  navbarEndText: {
    fontSize: 18,
    color: 'gray'
  },
  textContainer: {
    gap: 10
  },
  bannerText: {
    fontSize: 20,
    color: 'gray',
    padding: 20,
    lineHeight: 30
  },
});
