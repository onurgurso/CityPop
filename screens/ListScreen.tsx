import React from "react";
import { View, Text } from "react-native";
import { StackNavigationProp } from "react-navigation-stack/lib/typescript/src/vendor/types";

interface Props {
  navigation: StackNavigationProp;
}

export default function ListScreen({ navigation }: Props) {
  const searchResult = navigation.getParam("searchResult");

  return (
    <View>
      <Text>{searchResult}</Text>
      <Text>List item</Text>
      <Text>List item</Text>
      <Text onPress={() => navigation.navigate("Result")}>List Screen</Text>
    </View>
  );
}
