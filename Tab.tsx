import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Footer from "./Footer"
import Page from "./Page"

export default function Tab() { 
    return (
        <View style={styles.container}>
            <Page></Page>
            <Footer></Footer>
        </View>
    );
}



const styles = StyleSheet.create({ 
    container:{
        backgroundColor:"red",
        width:"100vw",
        height:"100vh",
        display:"flex",
        flexDirection: "column",
    },
});
