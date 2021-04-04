import "react-native-gesture-handler";
import React from "react";

import Login from "./Login";
import Home from "./Home";
import Profile1 from "./Profile1";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Login Form" }}
        />
        <Stack.Screen
          name="Profile1"
          component={Profile1}
          options={{ title: "Profile" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
