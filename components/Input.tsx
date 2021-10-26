import React, { useState } from "react";

import { TextInput, View, Text, StyleSheet } from "react-native";

interface Props {
  inputLabel: string;
  value: string;
  setValue: (v: string) => void;
  placeholder: string;
}
const styles = StyleSheet.create({
  inputStyle: {
    color: "#000",
    padding: 10,
    fontSize: 18,
    flex: 1,
    height: 50,
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 10,
    flex: 1,
  },
  containerStyle: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
});

export default function Input({
  inputLabel,
  placeholder,
  value,
  setValue,
}: Props) {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.labelStyle}>{inputLabel}</Text>
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
