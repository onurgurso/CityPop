import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "react-navigation-stack/lib/typescript/src/vendor/types";
import Input from "../components/Input";
import List from "../components/List";
import { ArrowIcon } from "../assets/svg";
import { elements } from "./../styles/elements";

interface Props {
  navigation: StackNavigationProp;
}

export default function SearchScreen({ navigation }: Props) {
  const [search, setSearch] = useState("");
  const [responseData, setResponseData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const searchType: keyof typeof types = navigation.getParam("searchType");
  // const APIusername = "weknowit";
  const APIusername = "ksuhiyp";

  const types = {
    city: {
      title: "Search By City",
      screen: "Result",
      API_URL: `http://api.geonames.org/searchJSON?username=${APIusername}&q=${search}&cities1500&maxRows=10&orderby=relevence&featureCode=PPLA&featureCode=PPLC&&featureCode=PPL&isNameRequired=true`,
    },
    country: {
      title: "Search By Country",
      screen: "List",
      API_URL: `http://api.geonames.org/searchJSON?username=${APIusername}&q=${search}&orderby=relevence&maxRows=10&featureCode=PCLI&featureCode=ADM1&featureCode=PCL&isNameRequired=true`,
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
    fetch(activeType.API_URL)
      .then((response) => response.json())
      .then((data) => {
        setResponseData(sortByPopulation(data.geonames));
        setLoading(false);
        if (data.length < 1) {
          setError(true);
        }
      })
      .catch((err) => {
        setError(true);
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
      console.log(responseData);
    }, 300);
    return () => {
      setLoading(true);
      clearTimeout(timer);
    };
  }, [search]);

  return (
    <View style={elements.container}>
      <Text style={elements.header}>{activeType.title}</Text>
      <View style={elements.inputBox}>
        <Input
          inputLabel={activeType.title}
          placeholder={`Enter a ${searchType}`}
          value={search}
          setValue={setSearch}
        />
        {loading ? (
          <ActivityIndicator
            size="small"
            color="#2934D0"
            style={elements.arrowIcon}
          />
        ) : (
          <TouchableOpacity
            activeOpacity={0.8}
            style={elements.arrowIcon}
            onPress={() => navigation.navigate("List", { searchTerm: search })}
          >
            <ArrowIcon />
          </TouchableOpacity>
        )}
      </View>
      {!loading && responseData && (
        <List
          data={responseData}
          activeType={activeType}
          navigation={navigation}
        />
      )}
      {error && <Text>The {searchType} was not found.</Text>}
    </View>
  );
}
