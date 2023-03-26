import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

function GoalItem({ text, onDeleteItem }) {
  return (
    <View style={styles.goalItem}>
      <TouchableOpacity
        onPress={onDeleteItem.bind(this.id)}
        android_ripple={{ color: "#210064" }}
        style={({ pressed }) => pressed && styles.pressedItem} // for ios ripple
      >
        <Text style={styles.goalText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
    padding: 8,
  },
  pressedItem: {
    opacity: 0.5,
  },
});
