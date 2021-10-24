import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import { styles } from "../styles/homeStyles";

export default function Home({ navigation }) {
  const Logo = require("../assets/CityPop.svg");
  const BackgroundImage = require("../assets/background.png");

  return (
    <View style={styles.view}>
      <ImageBackground
        source={BackgroundImage}
        resizeMode="cover"
        style={styles.imageBackground}
      >
        <Image source={Logo} style={styles.logo} resizeMode="contain" />
        <View style={styles.viewBar}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Search")}
          >
            <Text style={styles.buttonText}>Search by city</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Search")}
          >
            <Text style={styles.buttonText}>Search by country</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
