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
  headerGroupContainer: {
    flexDirection: "column",
    padding: 30,
  },
  headerGroupOne: {
    alignSelf: "flex-start",
    fontFamily: "raleway-bold",
    fontSize: 32,
  },
  headerGroupTwo: {
    alignSelf: "flex-start",
    fontFamily: "raleway-bold",
    fontSize: 18,
    color: "#0048ff81",
  },
  imageBackground: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  button: {
    width: 240,
    backgroundColor: "#fff",
    color: "white",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    fontFamily: "raleway-bold",
    textTransform: "uppercase",
    opacity: 0.7,
  },
  buttonText: {
    fontFamily: "raleway-bold",
    color: "#2934D0",
    textTransform: "uppercase",
  },
  inputBox: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#0000003d",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    height: 60,
    alignSelf: "center",
  },

  arrowIcon: {
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
  },

  flatList: {
    marginTop: 30,
    flex: 1,
  },

  flatItem: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 30,
  },

  flatItemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  flatTextOne: {
    fontFamily: "raleway-bold",
    fontSize: 14,
    color: "#2934D0",
  },

  flatTextTwo: {
    fontFamily: "raleway-regular",
    fontSize: 12,
    color: "#A6A6A6",
  },

  resultCard: {
    backgroundColor: "#0048ff81",
    padding: 30,
    margin: 30,
    borderRadius: 10,
  },

  cardHeader: {
    color: "#ffffff",
    fontFamily: "raleway-bold",
    fontSize: 18,
    marginBottom: 30,
  },
  cardContent: {
    backgroundColor: "#ffffff",
    color: "#0048ff81",
    padding: 30,
    borderRadius: 10,
    fontFamily: "raleway-regular",
    fontSize: 22,
  },
});
