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
    paddingVertical: 20,
    paddingHorizontal: 15,
    fontSize: 18,
    // width: 260,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.24,
    shadowRadius: 6.27,
    elevation: 10,
    borderRadius: 4,
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
  },
  containerStyle: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
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
