import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome'

export default function Footer() {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <FontAwesome style={styles.footerIcon} name='location-arrow' />
        <Text style={styles.footerText}>San Francisco</Text>
      </View>
      <View style={styles.iconContainer}>
        <FontAwesome style={styles.footerIcon} name='link' />
        <Text style={styles.footerText}>https://github.blog</Text>
      </View>
      <View style={styles.iconContainer}>
        <FontAwesome style={styles.footerIcon} name='twitter' />
        <Text style={styles.footerText}>Not Available</Text>
      </View>
      <View style={styles.iconContainer}>
        <FontAwesome style={styles.footerIcon} name='github' />
        <Text style={styles.footerText}>github</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    gap: 10
  },
  iconContainer : {
    flexDirection: 'row',
    gap: 20,
  },
  footerIcon: {
    fontSize: 25,
    color: '#c2cfd8'
  },
  footerText: {
    fontSize: 25,
    color: 'gray'
  }
});
