import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import Track from "./src/screens/Track";
import Tracks from "./src/screens/Tracks";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Tracks" component={Tracks} />
        <Stack.Screen name="Track" component={Track} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
