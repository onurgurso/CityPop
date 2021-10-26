import React, { useState, useEffect } from "react";
import { View, Button, Text } from "react-native";
import { StackNavigationProp } from "react-navigation-stack/lib/typescript/src/vendor/types";
import Input from "../components/Input";

interface Props {
  navigation: StackNavigationProp;
}

export default function SearchScreen({ navigation }: Props) {
  const [search, setSearch] = useState("");
  const [responseData, setResponseData] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchType: keyof typeof types = navigation.getParam("searchType");

  const username = "weknowit";
  const types = {
    city: {
      title: "Search by city",
      apiUrl: `http://api.geonames.org/searchJSON?username=${username}&q=${search}&maxRows=10&orderby=population&isNameRequired=true&featureCode=PPLA&featureCode=PPLA2&featureCode=PPLC`,
    },
    country: {
      title: "Search by country",
      apiUrl: `http://api.geonames.org/searchJSON?username=${username}&q=${search}&maxRows=10&orderby=relevence&featureCode=PPLC&featureCode=PPLA`, //förbättra queries
    },
  };
  let activeType = types[searchType];

  const sortByPopulation = (array: []) => {
    return array.sort(
      (a: { population: number }, b: { population: number }) =>
        b.population - a.population
    );
  };

  const fetchData = () => {
    fetch(activeType.apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setResponseData(sortByPopulation(data.geonames));
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    if (!search) {
      setLoading(false);
      return;
    }
    let timer = setTimeout(function () {
      fetchData();
    }, 300);
    return () => {
      setLoading(true);
      clearTimeout(timer);
    };
  }, [search]);

  return (
    <View>
      <Input
        inputLabel={activeType.title}
        placeholder="Enter a city"
        value={search}
        setValue={setSearch}
      />

      <Button
        title="Search"
        onPress={() =>
          navigation.navigate("List", { searchResult: responseData })
        }
      />
    </View>
  );
}
