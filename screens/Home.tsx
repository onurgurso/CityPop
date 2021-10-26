import React from "react";
import { StackNavigationProp } from "react-navigation-stack/lib/typescript/src/vendor/types";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import { styles } from "../styles/homeStyles";

interface Props {
  navigation: StackNavigationProp;
}

export default function Home({ navigation }: Props) {
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
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate("Search", { searchType: "city" })
            }
          >
            <Text style={styles.buttonText}>Search by city</Text>
          </TouchableOpacity>
          <TouchableOpacity
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
