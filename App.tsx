import React from "react";
import { useFonts } from "expo-font";
import Navigator from "./routes/Navigator";

export default function App() {
  const [loaded] = useFonts({
    "raleway-bold": require("./assets/fonts/Raleway-Bold.ttf"),
    "raleway-regular": require("./assets/fonts/Raleway-Regular.ttf"),
    "righteous-regular": require("./assets/fonts/Righteous-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return <Navigator />;
}
