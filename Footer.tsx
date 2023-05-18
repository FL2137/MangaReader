import { StyleSheet, Text, View } from 'react-native';
import Control from "./Control"

export default function App() {
    return (
      <View style={styles.container}>
            <Control name="Home"></Control>
            <Control name="Library"></Control>
            <Control name="Settings"></Control>
      </View>
    );
  }
  


const styles = StyleSheet.create({
    container:{
        backgroundColor: "blue",
        flexGrow: 1,

        display:"flex",
        flexDirection:"row",

    },
});