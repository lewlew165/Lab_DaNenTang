import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Platform,
  ProgressViewIOS,
} from "react-native";
import Progress from "react-native-progress/Bar";
// import { ProgressBar } from "react-native-paper";
// import ProgressBarAndroid from "@react-native-community/progress-bar-android";

export default function App() {
  const [progress, setProgress] = useState(0);
  const [inputValues, setInputValues] = useState({
    field1: "",
    field2: "",
    field3: "",
  });

  const handleInputChange = (field, value) => {
    const updatedInputValues = { ...inputValues, [field]: value };
    setInputValues(updatedInputValues);

    // Calculate progress based on filled fields
    const filledFields = Object.values(updatedInputValues).filter(
      (val) => val
    ).length;
    setProgress(filledFields / 3);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      <TextInput
        style={styles.input}
        placeholder="Field 1"
        onChangeText={(value) => handleInputChange("field1", value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Field 2"
        onChangeText={(value) => handleInputChange("field2", value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Field 3"
        onChangeText={(value) => handleInputChange("field3", value)}
      />

      <Progress progress={progress} style={styles.progressBar} />
      {/* {Platform.OS === "ios" ? (
        <ProgressViewIOS style={styles.progressBar} progress={progress} />
      ) : (
        <ProgressBarAndroid style={styles.progressBar} progress={progress} />
      )} */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 32,
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  progressBar: {
    marginTop: 20,
  },
});
