import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { StackNavigationProp } from "react-navigation-stack/lib/typescript/src/vendor/types";
import Input from "../components/Input";
import { elements } from "../styles/elements";

interface Props {
  navigation: StackNavigationProp;
}

export default function SearchScreen({ navigation }: Props) {
  const [search, setSearch] = useState("");
  const [fetchdata, setFetchdata] = useState([]);
  const [loading, setLoading] = useState(false);

  const arrowIcon = require("../assets/arrow_forward.png");
  const chevron = require("../assets/white.png");

  const searchType: keyof typeof types = navigation.getParam("searchType");

  const username = "weknowit";
  const types = {
    city: {
      title: "Search By City",
      apiUrl: `http://api.geonames.org/searchJSON?username=${username}&q=${search}&cities1500&maxRows=10&orderby=relevence&featureCode=PPLA&featureCode=PPLC`,
    },
    country: {
      title: "Search By Country",
      apiUrl: `http://api.geonames.org/searchJSON?username=${username}&q=${search}&maxRows=10&orderby=relevence&featureCode=PPLC&featureCode=PPLA`,
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
        setFetchdata(sortByPopulation(data.geonames));
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
    <View style={elements.container}>
      <Text style={elements.header}>{activeType.title}</Text>
      <View style={(elements.boxShadow, { width: "90%", alignSelf: "center" })}>
        <Input
          inputLabel={activeType.title}
          placeholder={`Enter a ${searchType}`}
          value={search}
          setValue={setSearch}
        />
        {loading && (
          <ActivityIndicator
            size="small"
            style={{ position: "absolute", top: "40%", right: 5 }}
          />
        )}
      </View>
      {!loading && fetchdata && (
        <FlatList
          data={fetchdata}
          renderItem={({
            item,
          }: {
            item: { toponymName: string; countryName: string };
          }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("List", { searchTerm: search })
              }
            >
              <Text>{item.toponymName}</Text>
              <Text style={{ color: "#a5a5a5" }}>{item.countryName}</Text>
            </TouchableOpacity>
          )}
        />
      )}

      <TouchableOpacity
        style={elements.button}
        onPress={() => navigation.navigate("List", { searchTerm: search })}
      >
        Search
      </TouchableOpacity>
    </View>
  );
}
