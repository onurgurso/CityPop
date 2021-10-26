import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: "column",
  },
  logo: {
    width: "150px",
    height: "50px",
    alignSelf: "center",
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
