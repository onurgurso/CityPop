import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Home from "../screens/Home";
import ListScreen from "../screens/ListScreen";
import ResultScreen from "../screens/ResultScreen";
import SearchScreen from "../screens/SearchScreen";

const componentSwitch = {
  Search: { screen: SearchScreen },
  List: { screen: ListScreen },
  Result: { screen: ResultScreen },
};

const Switch = createSwitchNavigator(componentSwitch);

const mainScreens = {
  Home: {
    screen: Home,
    navigationOptions: { headerShown: false },
  },
  Switchables: Switch,
};

const HomeStack = createStackNavigator(mainScreens, {
  defaultNavigationOptions: {
    title: "CityPop",
    headerTintColor: "#2934D0",
    headerTitleStyle: { fontSize: 22, fontFamily: "righteous-regular" },
    headerStyle: { shadowColor: "transparent" },
  },
});

export default createAppContainer(HomeStack);
