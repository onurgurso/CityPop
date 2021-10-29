import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "react-navigation-stack/lib/typescript/src/vendor/types";
import Input from "../components/Input";
import List from "../components/List";
import { ArrowIcon } from "../assets/svg";
import { elements } from "./../styles/elements";
import { sortByPopulation } from "./globalFunctions";

interface Props {
  navigation: StackNavigationProp;
}

export default function SearchScreen({ navigation }: Props) {
  const [search, setSearch] = useState("");
  const [responseData, setResponseData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const searchType: keyof typeof types = navigation.getParam("searchType");

  const APIusername = "weknowit";

  const types = {
    city: {
      title: "Search By City",
      screen: "Result",
      API_URL: `http://api.geonames.org/searchJSON?username=${APIusername}&q=${search}&cities1000&maxRows=10&orderby=relevence&featureCode=PPLA&featureCode=PPLC&&featureCode=PPL&isNameRequired=true`,
    },
    country: {
      title: "Search By Country",
      screen: "List",
      API_URL: `http://api.geonames.org/searchJSON?username=${APIusername}&q=${search}&orderby=relevence&maxRows=10&featureCode=PCLI&featureCode=ADM1&featureCode=PCL&isNameRequired=true`,
    },
  };

  let activeType = types[searchType];

  const fetchData = () => {
    fetch(activeType.API_URL)
      .then((response) => response.json())
      .then((data) => {
        setResponseData(sortByPopulation(data.geonames));
        setLoading(false);
        if (responseData.length < 1) {
          setError(true);
        } else {
          setError(false);
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
            onPress={() => {
              if (responseData.length == 0) {
                setError(true);
              } else {
                setError(false);
                navigation.navigate(activeType.screen, {
                  //parameters thats needed in the next screen
                  SelectedItem: responseData[0],
                  SearchTerm: search,
                  Types: types,
                  ActiveType: activeType,
                  SetError: setError,
                  SetLoading: setLoading,
                });
              }
            }}
          >
            <ArrowIcon />
          </TouchableOpacity>
        )}
      </View>
      {error && (
        <Text style={{ alignSelf: "center", padding: 30 }}>
          The {searchType} was not found.
        </Text>
      )}
      {!loading && responseData && (
        <List
          data={responseData}
          activeType={activeType}
          navigation={navigation}
        />
      )}
    </View>
  );
}
