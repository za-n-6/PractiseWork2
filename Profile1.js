import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

import MainButton from "./MainButton";

const Profile1 = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "column",
          height: "30%",
          backgroundColor: "#00bfff",
          width: "100%",
        }}
      ></View>
      <Image
        style={{
          borderWidth: 3,
          borderColor: "white",
          borderRadius: 100,
          width: 120,
          height: 120,
          marginVertical: 140,
          flexDirection: "column",
          position: "absolute",

          //justifyContent: "flex-start",
        }}
        source={require("./assets/dp.png")}
      />
      <View
        style={{
          flexDirection: "column",
          height: "60%",
          backgroundColor: "white",
          alignItems: "center",
        }}
      >
        <View
          style={{
            position: "absolute",
            flexDirection: "column",

            marginVertical: 120,
          }}
        >
          <View style={{ paddingBottom: 15 }}>
            <MainButton children={"Option 1"} />
          </View>
          <MainButton children={"Option 2"} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",

    height: "100%",
  },
});
export default Profile1;
