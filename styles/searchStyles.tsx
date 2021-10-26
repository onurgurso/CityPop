import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: "column",
  },
  header: {
    padding: 30,
    alignSelf: "flex-start",
    fontFamily: "raleway-bold",
    fontSize: 32,
  },
  imageBackground: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  button: {
    width: 240,
    backgroundColor: "#2934D0",
    color: "white",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
    alignSelf: "center",
  },
  buttonText: {
    fontFamily: "raleway-bold",
    color: "white",
    textTransform: "uppercase",
  },
});
