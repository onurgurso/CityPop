import React from "react";
import { StackNavigationProp } from "react-navigation-stack/lib/typescript/src/vendor/types";
import { View, Text } from "react-native";
import { elements } from "./../styles/elements";
import { numberFormatter } from "../globalFunctions";

interface Props {
  navigation: StackNavigationProp;
}

export default function ResultScreen({ navigation }: Props) {
  const selectedItem = navigation.getParam("SelectedItem");

  //show screen with city and its population
  return (
    <View style={elements.container}>
      <View style={elements.headerGroupContainer}>
        <Text style={elements.headerGroupOne}>{selectedItem.name}</Text>
        <Text style={elements.headerGroupTwo}>{selectedItem.countryName}</Text>
      </View>
      <View style={elements.resultCard}>
        <Text style={elements.cardHeader}>Population</Text>
        <Text style={elements.cardContent}>
          {numberFormatter(selectedItem.population)}
        </Text>
      </View>
    </View>
  );
}
