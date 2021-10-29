import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { StackNavigationProp } from "react-navigation-stack/lib/typescript/src/vendor/types";
import { sortByPopulation } from "../globalFunctions";
import List from "./../components/List";
import { elements } from "./../styles/elements";

interface Props {
  navigation: StackNavigationProp;
}

export default function ListScreen({ navigation }: Props) {
  const [responseData, setResponseData] = useState({});

  const selectedItem = navigation.getParam("SelectedItem");
  const activeType = { screen: "Result" };

  useEffect(() => {
    fetch(
      `http://api.geonames.org/searchJSON?username=weknowit&country=${selectedItem.countryCode}&cities1500&maxRows=10&orderby=population&featureCode=PPLA&featureCode=PPLC&&featureCode=PPL`
    )
      .then((data) => data.json())
      .then((data) => {
        setResponseData(sortByPopulation(data.geonames));
      });
  }, []);

  return (
    <View style={elements.container}>
      <View style={elements.headerGroupContainer}>
        <Text style={elements.headerGroupOne}>{selectedItem.name}</Text>
        <Text style={elements.headerGroupTwo}>Most Populated Cities</Text>
      </View>
      <List
        data={responseData}
        activeType={activeType}
        navigation={navigation}
      />
    </View>
  );
}
