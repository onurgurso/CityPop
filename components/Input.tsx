import React from "react";

import { TextInput, View, StyleSheet } from "react-native";

interface Props {
  inputLabel: string;
  value: string;
  setValue: (v: string) => void;
  placeholder: string;
}
const styles = StyleSheet.create({
  inputStyle: {
    color: "#000",
    flex: 1,
    height: "100%",
    padding: 18,
    fontSize: 18,
  },
  containerStyle: {
    flex: 1,
  },
});

export default function Input({ placeholder, value, setValue }: Props) {
  return (
    <View style={styles.containerStyle}>
      <TextInput
        style={styles.inputStyle}
        autoCorrect={false}
        placeholder={placeholder}
        onChangeText={setValue}
        value={value}
      />
    </View>
  );
}
