import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Screen_1 from "./screens/Screen_1";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screen_2 from "./screens/Screen_2";
import Sceen_3 from "./screens/Srceen_3";
import Screen_4 from "./screens/Screen_4";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Order"
          component={Screen_4}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Drink"
          component={Sceen_3}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Detail"
          component={Screen_2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Screen_1}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
