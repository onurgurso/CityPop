import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Home from "../screens/Home";
import ListScreen from "../screens/ListScreen";
import ResultScreen from "../screens/ResultScreen";
import SearchScreen from "../screens/SearchScreen";

const componentSwitch = {
  // Routes to switch between
  Search: { screen: SearchScreen },
  List: { screen: ListScreen },
  Result: { screen: ResultScreen },
};

const Switch = createSwitchNavigator(componentSwitch);

// the default routes- it takes the switch navigation screens as the second route
const mainScreens = {
  Home: {
    screen: Home,
    navigationOptions: { headerShown: false },
  },
  Switchables: Switch, //screens that are switched.
};

//default style options for the main navigation stack
const HomeStack = createStackNavigator(mainScreens, {
  defaultNavigationOptions: {
    title: "CityPop",
    headerTintColor: "#2934D0",
    headerTitleStyle: { fontSize: 22, fontFamily: "righteous-regular" },
    headerStyle: { shadowColor: "transparent" },
  },
});

export default createAppContainer(HomeStack);
