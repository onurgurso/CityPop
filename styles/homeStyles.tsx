import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  view: {
    flex: 1,

    flexDirection: "column",
  },
  logo: {
    width: "150px",
    height: "50px",
    marginTop: "100px",
    alignSelf: "center",
  },
  imageBackground: {
    flex: 1,
    display: "flex",
  },
  button: {
    backgroundColor: "#2934D0",
    color: "white",
    alignItems: "center",
    borderRadius: 10,
    height: 50,
    alignContent: "center",
    justifyContent: "center",
    marginVertical: 5,
  },
  buttonText: {
    color: "white",
    textTransform: "uppercase",
  },
  viewBar: {
    marginTop: "auto",
    backgroundColor: "white",
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
