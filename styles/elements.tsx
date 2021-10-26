import { StyleSheet } from "react-native";

export const elements = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
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
    alignSelf: "center",
    fontFamily: "raleway-bold",
    textTransform: "uppercase",
  },
  buttonText: {
    fontFamily: "raleway-bold",
    color: "white",
    textTransform: "uppercase",
  },
  boxShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
