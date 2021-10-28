import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: "column",
  },
  logo: {
    fontFamily: "righteous-regular",
    fontSize: 44,
    alignSelf: "center",
    color: "#fff",
  },
  imageBackground: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20%",
  },
  button: {
    width: 260,
    backgroundColor: "#fff",
    color: "#2934D0",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    alignSelf: "center",
  },
  buttonText: {
    fontFamily: "raleway-bold",
    color: "#2934D0",
    textTransform: "uppercase",
  },
});
