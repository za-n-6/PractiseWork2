import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

import MainButton from "./MainButton";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("./assets/dp.png")} />
      <Text
        style={{
          textAlign: "auto",
          marginTop: 10,
          fontSize: 20,
          fontWeight: "bold",
          color: "aqua",
        }}
      >
        Rudy
      </Text>
      <Text style={{ color: "white" }}>New York</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 15,
        }}
      >
        <Text style={styles.text}>15</Text>
        <Text style={styles.text}>99</Text>
        <Text style={styles.text}>48</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <Text
          style={{
            marginHorizontal: 50,
            color: "white",
            textAlign: "auto",
            marginTop: 5,
          }}
        >
          Photos
        </Text>
        <Text
          style={{
            marginHorizontal: 50,
            color: "white",
            textAlign: "auto",
            marginTop: 5,
          }}
        >
          Following
        </Text>
        <Text
          style={{
            marginHorizontal: 50,
            color: "white",
            textAlign: "auto",
            marginTop: 5,
          }}
        >
          Followers
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 30,
        }}
      >
        <MainButton
          children={"GoTo Login"}
          onPress={() => navigation.navigate("Login")}
        />
        <MainButton
          children={"Profile"}
          onPress={() => navigation.navigate("Profile1")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "#696969",
  },
  image: {
    borderWidth: 2,
    borderColor: "grey",
    borderRadius: 100,
    marginTop: 30,
    width: 100,
    height: 100,
  },
  text: {
    textAlign: "auto",
    marginTop: 10,
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
    marginHorizontal: 50,
  },
});
export default Home;
