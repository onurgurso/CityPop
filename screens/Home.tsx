import React from "react";
import { StackNavigationProp } from "react-navigation-stack/lib/typescript/src/vendor/types";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { styles } from "../styles/homeStyles";

interface Props {
  navigation: StackNavigationProp;
}

export default function Home({ navigation }: Props) {
  const BackgroundImage = require("../assets/background.png");
  //show two options passing type to search screen using navigation
  return (
    <View style={styles.view}>
      <ImageBackground
        source={BackgroundImage}
        resizeMode="cover"
        style={styles.imageBackground}
      >
        <Text style={styles.logo}>CityPop</Text>
        <View>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.button}
            onPress={() =>
              navigation.navigate("Search", { searchType: "city" })
            }
          >
            <Text style={styles.buttonText}>Search by city</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.button}
            onPress={() =>
              navigation.navigate("Search", { searchType: "country" })
            }
          >
            <Text style={styles.buttonText}>Search by country</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
