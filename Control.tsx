import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';


type ControlProps = {
    name: string
}

export default function Control(props: ControlProps) { 
    return (
        <View style={styles.container}>
            <Text>A</Text>
        </View>
    );
}



const styles = StyleSheet.create({ 
    container:{
        backgroundColor:"green",
        display:"flex",
        flexBasis: "auto",
        flexGrow:1,
    },
});
