import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { Pressable } from "react-native";

export default function Sceen_3({ navigation }) {
  const [data, setDate] = useState([]);
  useEffect(() => {
    fetch("https://653f4b7b9e8bd3be29e02fc1.mockapi.io/drinks")
      .then((response) => response.json())
      .then((json) => setDate(json))
      .catch((error) => console.error(error));
  }, []);

  const Item = ({ drink }) => (
    <View
      style={{
        width: 350,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: "rgba(188, 193, 202, 1)",
        flexDirection: "row",
        height: "auto",
        justifyContent: "space-between",
        marginVertical: 5,
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <Image
          style={{ width: 60, height: 60 }}
          source={{ uri: drink.url }}
          resizeMode="contain"
        ></Image>
        <View>
          <Text
            style={{ fontSize: 16, fontWeight: 500, paddingHorizontal: 10 }}
          >
            {drink.name}
          </Text>
          <Text style={{ paddingTop: 20, paddingHorizontal: 10 }}>
            ${drink.price}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../assets/Image230.png")}
          style={{ width: 20, height: 20, marginHorizontal: 10 }}
          resizeMode="contain"
        ></Image>
        <Image
          source={require("../assets/Image231.png")}
          style={{ width: 20, height: 20, marginHorizontal: 10 }}
          resizeMode="contain"
        ></Image>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image
            source={require("../assets/Frame.png")}
            style={{ width: 20, height: 20, marginTop: 8 }}
            resizeMode="contain"
          ></Image>
        </Pressable>
        <Text style={{ fontSize: 24, fontWeight: 700 }}>Drinks</Text>
        <Image
          source={require("../assets/Image177.png")}
          style={{ width: 24, height: 24, marginTop: 5 }}
          resizeMode="contain"
        ></Image>
      </View>
      <View style={{ alignItems: "center" }}>
        <FlatList
          data={data}
          renderItem={({ item }) => <Item drink={item}></Item>}
        ></FlatList>
        <Pressable
          onPress={() => navigation.navigate("Order")}
          style={{
            width: "347px",
            height: "44px",
            borderRadius: 6,
            backgroundColor: "rgba(239, 176, 52, 1)",
            marginVertical: 25,
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 16, color: "white", textAlign: "center" }}>
            GO TO CART
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 10,
  },
});
