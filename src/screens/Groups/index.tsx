import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121214",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontWeight: "700",
    fontSize: 36,
  },
});

export const Groups: React.FC = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Groups</Text>
  </View>
);
