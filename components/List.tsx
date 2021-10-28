import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import Seperator from "../assets/seperator";
import { ChevronIcon } from "../assets/svg";
import { elements } from "../styles/elements";

export default function List({
  navigation,
  data,
  activeType,
}: {
  navigation: any;
  data: any;
  activeType: any;
}) {
  return (
    <FlatList
      style={elements.flatList}
      data={data}
      ItemSeparatorComponent={Seperator}
      keyExtractor={(item, i) => i.toString()}
      renderItem={({
        item,
      }: {
        item: { toponymName: string; countryName: string };
      }) => (
        <TouchableOpacity
          activeOpacity={0.8}
          style={elements.flatItem}
          onPress={() =>
            navigation.navigate(activeType.screen, { SelectedItem: item })
          }
        >
          <Text style={elements.flatTextOne}>{item.toponymName}</Text>
          <View style={elements.flatItemLeft}>
            <Text style={elements.flatTextTwo}>{item.countryName}</Text>
            <ChevronIcon />
          </View>
        </TouchableOpacity>
      )}
    />
  );
}
