import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles } from './style';

export default function App() {


  return (
    <View style={styles.container}>

      {/* Added the header element  */}
      <View style={styles.header}>
        <Text style={styles.heroText}>Home  </Text>
        <Text style={styles.subText}>Good morning, Divine</Text>
      </View>

      <View style={styles.homeCardBlack}></View>
      <View style={styles.homeCardBlue}></View>
      <View style={styles.homeCardPurple}></View>
      <View style={styles.homeCardPink}></View>

      {/* <Text>Open up App.js to start working on your app!|</Text> */}
      <StatusBar style="auto" />
    </View>
  );
}

