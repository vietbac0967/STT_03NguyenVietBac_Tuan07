import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";

export default function Screen_2({ navigation }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://653f4b7b9e8bd3be29e02fc1.mockapi.io/shop")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);

  const Item = ({ shop }) => (
    <Pressable
      style={{ marginVertical: 10 }}
      onPress={() => navigation.navigate("Drink")}
    >
      <Image
        style={{ width: 347, height: 114, borderRadius: 6 }}
        source={{ uri: shop.url }}
      ></Image>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingTop: 5,
        }}
      >
        {/* Status */}
        {shop.status === true ? (
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../assets/Image178.png")}
              style={{ width: 19, height: 14 }}
              resizeMode="contain"
            ></Image>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 400,
                color: "rgba(29, 215, 91, 1)",
              }}
            >
              Accepting Orders
            </Text>
          </View>
        ) : (
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../assets/Image190.png")}
              style={{ width: 24, height: 24 }}
              resizeMode="contain"
            ></Image>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 400,
                color: "rgba(222, 59, 64, 1)",
              }}
            >
              Tempory Unavailable
            </Text>
          </View>
        )}

        <View style={{ flexDirection: "row" }}>
          <Image
            source={require("../assets/Image180.png")}
            style={{ width: 18, height: 18 }}
            resizeMode="contain"
          ></Image>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 400,
              color: "rgba(222, 59, 64, 1)",
            }}
          >
            {shop.time}
          </Text>
        </View>
        <View>
          <Image
            source={require("../assets/Image181.png")}
            style={{ width: 14, height: 18 }}
            resizeMode="contain"
          ></Image>
        </View>
      </View>
      <Text>{shop.name}</Text>
      <Text>{shop.address}</Text>
    </Pressable>
  );

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Pressable onPress={() => navigation.goBack()}>
            <Image
              source={require("../assets/Frame.png")}
              style={{ width: 20, height: 20, marginTop: 8 }}
              resizeMode="contain"
            ></Image>
          </Pressable>
          <Text style={{ fontSize: 24, fontWeight: 700 }}>Shops Near Me</Text>
          <Image
            source={require("../assets/Image177.png")}
            style={{ width: 24, height: 24, marginTop: 5 }}
            resizeMode="contain"
          ></Image>
        </View>
        <View style={{ alignItems: "center" }}>
          <FlatList
            data={data}
            renderItem={({ item }) => <Item shop={item}></Item>}
          ></FlatList>
        </View>
      </View>
    </ScrollView>
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
