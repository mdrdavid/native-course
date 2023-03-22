import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        {/* <Text style={styles.dummyText}>Week For React Native</Text> */}
        <TextInput placeholder="Your course goal!" style={styles.textInput}/>
        <Button title="Add Goal" />
      </View>
      <View>
        <Text>List of goals...</Text>
      </View>
      {/* <Text
        style={{ margin: 16, borderWidth: 2, borderColor: "red", padding: 16 }}
      >
        Moving forward
      </Text>
      <Button title="Click Here" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
  inputContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textInput:{
    borderWidth:1,
    borderColor: '#cccccc',
    width: "80%",
    marginRight: 8,
    padding:8,
  },
  dummyText: {
    margin: 16,
    borderWidth: 2,
    borderColor: "red",
    padding: 16,
  },
});
