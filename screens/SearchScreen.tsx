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

interface Props {
  navigation: StackNavigationProp;
}

export default function SearchScreen({ navigation }: Props) {
  const [search, setSearch] = useState("");
  const [fetchdata, setFetchdata] = useState([]);
  const [loading, setLoading] = useState(false);

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
      });
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
      console.log(search);
    }, 300);
    return () => {
      setLoading(true);
      clearTimeout(timer);
    };
  }, [search]);

  return (
    <View>
      <View style={{ position: "relative" }}>
        <Input
          inputLabel={activeType.title}
          placeholder={`Enter a ${searchType}`}
          value={search}
          setValue={setSearch}
        />
        {loading && (
          <ActivityIndicator
            size="small"
            style={{ position: "absolute", top: "50%", right: 0 }}
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
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 10,
              }}
            >
              <Text>{item.toponymName}</Text>
              <Text style={{ color: "#a5a5a5" }}>{item.countryName}</Text>
            </TouchableOpacity>
          )}
        />
      )}

      <Button
        title="Search"
        onPress={() => navigation.navigate("List", { searchTerm: search })}
      />
    </View>
  );
}
